import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartLine = {
  brandSlug: string;
  brandName: string;
  brandAccent: string;
  categoryLabel: string;
  sku: string;
  ean: string;
  name: string;
  size: string;
  image: string;
  priceUsd: number;
  priceEur: number;
  qty: number;
};

export type Account = {
  companyName: string;
  contactPerson: string;
  email: string;
  country: string;
  phone: string;
  distributorType: string;
  monthlyVolume: string;
};

export const MOQ_TOTAL = 200;

type Ctx = {
  lines: CartLine[];
  open: boolean;
  setOpen: (v: boolean) => void;
  addLine: (line: Omit<CartLine, "qty">, qty: number) => void;
  updateQty: (sku: string, qty: number) => void;
  remove: (sku: string) => void;
  clear: () => void;
  totalUnits: number;
  totalUsd: number;
  totalEur: number;
  account: Account | null;
  setAccount: (a: Account | null) => void;
};

const CartCtx = createContext<Ctx | null>(null);

const LS_CART = "vitala.bulk.cart.v1";
const LS_ACCOUNT = "vitala.bulk.account.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [account, setAccountState] = useState<Account | null>(null);

  useEffect(() => {
    try {
      const c = localStorage.getItem(LS_CART);
      if (c) setLines(JSON.parse(c));
      const a = localStorage.getItem(LS_ACCOUNT);
      if (a) setAccountState(JSON.parse(a));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(LS_CART, JSON.stringify(lines)); } catch {}
  }, [lines]);

  const setAccount = (a: Account | null) => {
    setAccountState(a);
    try {
      if (a) localStorage.setItem(LS_ACCOUNT, JSON.stringify(a));
      else localStorage.removeItem(LS_ACCOUNT);
    } catch {}
  };

  const addLine: Ctx["addLine"] = (line, qty) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.sku === line.sku);
      if (existing) {
        return prev.map((l) => (l.sku === line.sku ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { ...line, qty }];
    });
    setOpen(true);
  };

  const updateQty: Ctx["updateQty"] = (sku, qty) =>
    setLines((prev) => prev.map((l) => (l.sku === sku ? { ...l, qty: Math.max(1, qty) } : l)));

  const remove: Ctx["remove"] = (sku) => setLines((prev) => prev.filter((l) => l.sku !== sku));

  const clear = () => setLines([]);

  const totalUnits = lines.reduce((s, l) => s + l.qty, 0);
  const totalUsd = lines.reduce((s, l) => s + l.qty * l.priceUsd, 0);
  const totalEur = lines.reduce((s, l) => s + l.qty * l.priceEur, 0);

  return (
    <CartCtx.Provider value={{ lines, open, setOpen, addLine, updateQty, remove, clear, totalUnits, totalUsd, totalEur, account, setAccount }}>
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
