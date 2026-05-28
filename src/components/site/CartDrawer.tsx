import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, Trash2, ArrowUpRight, Globe2, ShieldCheck, Boxes } from "lucide-react";
import { useCart, MOQ_TOTAL } from "@/lib/cart";

export function CartDrawer() {
  const { open, setOpen, lines, updateQty, remove, totalUnits, totalUsd, totalEur } = useCart();
  const remaining = Math.max(0, MOQ_TOTAL - totalUnits);
  const pct = Math.min(100, (totalUnits / MOQ_TOTAL) * 100);
  const moqMet = totalUnits >= MOQ_TOTAL;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 flex h-full w-full max-w-[460px] flex-col bg-white text-ink shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Distributor cart</p>
                <h2 className="font-display text-2xl leading-none">Bulk inquiry</h2>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 hover:bg-ink/10">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* MOQ tracker */}
            <div className="border-b border-black/5 bg-bone px-6 py-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium">Minimum order: {MOQ_TOTAL} units (mixed)</span>
                <span className="tabular-nums text-muted-foreground">{totalUnits}/{MOQ_TOTAL}</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
                <div className="h-full rounded-full bg-ink transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                {moqMet ? "MOQ met — you can request your bulk quote." : `${remaining} more units needed across any brands or categories.`}
              </p>
            </div>

            {/* Lines */}
            <div className="flex-1 overflow-y-auto">
              {lines.length === 0 ? (
                <div className="grid h-full place-items-center px-6 text-center">
                  <div>
                    <Boxes className="mx-auto h-10 w-10 text-ink/30" />
                    <p className="mt-4 font-display text-2xl">Your inquiry is empty.</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Add products from any brand or category. Mix freely until you reach the 200-unit MOQ.
                    </p>
                    <Link
                      to="/brands"
                      onClick={() => setOpen(false)}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-ink/85"
                    >
                      Browse brands <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <ul className="divide-y divide-black/5">
                  {lines.map((l) => (
                    <li key={l.sku} className="flex gap-4 p-5">
                      <div
                        className="h-20 w-20 shrink-0 overflow-hidden rounded-md"
                        style={{ background: `linear-gradient(135deg, ${l.brandAccent}55, ${l.brandAccent}10)` }}
                      >
                        <img src={l.image} alt={l.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{l.brandName} · {l.categoryLabel}</p>
                        <p className="mt-0.5 truncate font-display text-lg leading-tight">{l.name}</p>
                        <p className="text-[11px] text-muted-foreground">SKU {l.sku} · {l.size}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full border border-black/10">
                            <button aria-label="Decrease" onClick={() => updateQty(l.sku, l.qty - 1)} className="grid h-7 w-7 place-items-center hover:bg-ink/5"><Minus className="h-3 w-3" /></button>
                            <span className="w-10 text-center text-sm tabular-nums">{l.qty}</span>
                            <button aria-label="Increase" onClick={() => updateQty(l.sku, l.qty + 1)} className="grid h-7 w-7 place-items-center hover:bg-ink/5"><Plus className="h-3 w-3" /></button>
                          </div>
                          <button onClick={() => remove(l.sku)} aria-label="Remove" className="grid h-7 w-7 place-items-center rounded-full text-muted-foreground hover:bg-ink/5 hover:text-ink">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="mt-1 text-right text-xs tabular-nums text-muted-foreground">
                          ${(l.priceUsd * l.qty).toFixed(2)} · €{(l.priceEur * l.qty).toFixed(2)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-black/5 px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Indicative total</span>
                <span className="font-display text-2xl tabular-nums">${totalUsd.toFixed(2)} <span className="text-base text-muted-foreground">/ €{totalEur.toFixed(2)}</span></span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">Final wholesale pricing confirmed in your official quotation.</p>

              <Link
                to="/checkout"
                onClick={() => setOpen(false)}
                aria-disabled={!moqMet}
                className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                  moqMet ? "bg-ink text-white hover:bg-ink/85" : "pointer-events-none bg-ink/15 text-ink/40"
                }`}
              >
                Request bulk quote <ArrowUpRight className="h-4 w-4" />
              </Link>

              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Globe2 className="h-3.5 w-3.5" /> Global shipping</span>
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> GMP-certified</span>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
