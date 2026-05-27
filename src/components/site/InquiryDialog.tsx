import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowUpRight, Banknote, CreditCard, Bitcoin } from "lucide-react";
import type { Brand, Product } from "@/lib/brands";

type Props = {
  open: boolean;
  onClose: () => void;
  brand: Brand;
  product: Product;
  quantity: number;
};

const PAYMENTS = [
  { id: "bank", label: "Bank Transfer", icon: Banknote },
  { id: "crypto", label: "Crypto Currency", icon: Bitcoin },
  { id: "card", label: "Card Payment", icon: CreditCard },
] as const;

export function InquiryDialog({ open, onClose, brand, product, quantity }: Props) {
  const [sent, setSent] = useState(false);
  const [payment, setPayment] = useState<(typeof PAYMENTS)[number]["id"]>("bank");

  const totalUsd = (product.priceUsd * quantity).toFixed(2);
  const totalEur = (product.priceEur * quantity).toFixed(2);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm md:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-t-2xl bg-white text-ink shadow-2xl md:rounded-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-ink/5 hover:bg-ink/10"
            >
              <X className="h-4 w-4" />
            </button>

            {sent ? (
              <div className="p-10 md:p-14">
                <CheckCircle2 className="h-10 w-10 text-lime-dim" />
                <h2 className="mt-6 font-display text-4xl md:text-5xl">Inquiry received.</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Thank you. Our partnership team will follow up within 48 hours with pricing, MOQ and shipping options for{" "}
                  <strong>{product.name}</strong>.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-ink/85"
                >
                  Close <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                {/* Header summary */}
                <div
                  className="border-b border-black/5 px-8 py-6"
                  style={{ background: `linear-gradient(135deg, ${brand.accent}33, transparent)` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {brand.name} · {brand.categoryLabel}
                  </p>
                  <h2 className="mt-2 font-display text-3xl md:text-4xl">Submit Order Inquiry</h2>
                  <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
                    <span><strong>{product.name}</strong> · {product.size}</span>
                    <span>SKU: {product.sku}</span>
                    <span>EAN: {product.ean}</span>
                    <span>Qty: <strong>{quantity}</strong></span>
                    <span>Est. total: <strong>${totalUsd}</strong> / <strong>€{totalEur}</strong></span>
                  </div>
                </div>

                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="grid gap-5 p-8 md:grid-cols-2 md:p-10"
                >
                  <Field label="Full name" required>
                    <input required maxLength={100} className="dlg-input" placeholder="Jane Mwangi" />
                  </Field>
                  <Field label="Company name" required>
                    <input required maxLength={150} className="dlg-input" placeholder="Acme Pharmacies Ltd." />
                  </Field>
                  <Field label="Email" required>
                    <input required type="email" maxLength={255} className="dlg-input" placeholder="jane@company.com" />
                  </Field>
                  <Field label="Phone" required>
                    <input required type="tel" maxLength={30} className="dlg-input" placeholder="+254 700 000 000" />
                  </Field>
                  <Field label="Country" required>
                    <input required maxLength={80} className="dlg-input" placeholder="Kenya" />
                  </Field>
                  <Field label="Quantity (units)">
                    <input readOnly defaultValue={quantity} className="dlg-input bg-ink/5" />
                  </Field>

                  <Field label="Message" className="md:col-span-2">
                    <textarea
                      maxLength={1000}
                      className="dlg-input min-h-[110px] resize-y"
                      placeholder="Tell us about your distribution market, MOQ requirements and timeline."
                    />
                  </Field>

                  <div className="md:col-span-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Preferred payment method
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {PAYMENTS.map((opt) => {
                        const Icon = opt.icon;
                        const active = payment === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setPayment(opt.id)}
                            className={`flex items-center justify-center gap-2 rounded-md border px-3 py-3 text-sm font-medium transition-colors ${
                              active
                                ? "border-ink bg-ink text-white"
                                : "border-black/10 text-ink/80 hover:border-ink/40"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            <span className="hidden md:inline">{opt.label}</span>
                            <span className="md:hidden">{opt.label.split(" ")[0]}</span>
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Payment preference only — final terms confirmed by our partnership team.
                    </p>
                  </div>

                  <div className="md:col-span-2 flex items-center justify-between gap-4 border-t border-black/10 pt-6">
                    <p className="text-xs text-muted-foreground">
                      By submitting you agree to be contacted about this inquiry.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-ink/85"
                    >
                      Submit Order
                      <ArrowUpRight className="h-4 w-4 hover-arrow" />
                    </button>
                  </div>
                </form>
              </>
            )}

            <style>{`
              .dlg-input {
                width: 100%;
                background: transparent;
                border: 0;
                border-bottom: 1px solid rgba(0,0,0,0.15);
                padding: 10px 0;
                font-size: 15px;
                outline: none;
                transition: border-color .2s;
              }
              .dlg-input:focus { border-color: #0a0a0a; }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, required, children, className = "" }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}{required && " *"}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
