import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Banknote, Bitcoin, CheckCircle2, CreditCard, LogIn, UserPlus, ShieldCheck, Globe2, Truck } from "lucide-react";
import { useCart, MOQ_TOTAL, type Account } from "@/lib/cart";
import { Seo } from "@/lib/seo";

export const Route = createFileRoute("/checkout")({ component: CheckoutPage });

const PAYMENTS = [
  { id: "bank", label: "Bank Transfer", icon: Banknote },
  { id: "crypto", label: "Crypto Currency", icon: Bitcoin },
  { id: "card", label: "Card Payment", icon: CreditCard },
] as const;

const DISTRIBUTOR_TYPES = ["Wholesaler", "Pharmacy chain", "Importer", "Government / NGO", "Retail group", "Hospital group"];
const VOLUMES = ["200 – 1,000 units", "1,000 – 5,000 units", "5,000 – 20,000 units", "20,000 – 100,000 units", "100,000+ units"];

function CheckoutPage() {
  const navigate = useNavigate();
  const { lines, totalUnits, totalUsd, totalEur, account, setAccount, clear } = useCart();
  const [mode, setMode] = useState<"signup" | "login">(account ? "login" : "signup");
  const [authed, setAuthed] = useState(!!account);
  const [payment, setPayment] = useState<(typeof PAYMENTS)[number]["id"]>("bank");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const moqMet = totalUnits >= MOQ_TOTAL;

  if (lines.length === 0 && !submitted) {
    return (
      <div className="mx-auto max-w-xl px-6 py-40 text-center">
        <h1 className="font-display text-5xl">Your inquiry is empty.</h1>
        <p className="mt-4 text-muted-foreground">Add at least {MOQ_TOTAL} units across our brands to request a bulk quote.</p>
        <Link to="/brands" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-white">
          Browse brands <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-40 text-center">
        <Seo title="Inquiry received | Vitala Global" description="Your bulk inquiry has been received." />
        <CheckCircle2 className="mx-auto h-14 w-14 text-lime-dim" />
        <h1 className="mt-8 font-display text-5xl md:text-6xl">Thank you for your bulk inquiry.</h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-muted-foreground md:text-lg">
          Our international supply team will review your request and send you an official quotation/invoice shortly.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link to="/" className="rounded-full bg-ink px-6 py-3 text-sm text-white hover:bg-ink/85">Return home</Link>
          <Link to="/brands" className="rounded-full border border-ink/15 px-6 py-3 text-sm hover:border-ink/40">Browse more brands</Link>
        </div>
      </div>
    );
  }

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const acc: Account = {
      companyName: String(f.get("companyName") || ""),
      contactPerson: String(f.get("contactPerson") || ""),
      email: String(f.get("email") || ""),
      country: String(f.get("country") || ""),
      phone: String(f.get("phone") || ""),
      distributorType: String(f.get("distributorType") || ""),
      monthlyVolume: String(f.get("monthlyVolume") || ""),
    };
    setAccount(acc);
    setAuthed(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real backend: POST inquiry to API, send admin email, persist in DB.
    setSubmitted(true);
    clear();
    setTimeout(() => navigate({ to: "/" }), 12000);
  };

  return (
    <div className="bg-bone">
      <Seo title="Request Bulk Quote | Vitala Global" description="Submit your distributor inquiry to Vitala Global's international supply team." />

      {/* Header */}
      <section className="bg-ink pb-16 pt-32 text-white lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Distributor portal</p>
          <h1 className="mt-3 font-display text-5xl leading-[1] md:text-7xl">Request bulk quote</h1>
          <p className="mt-5 max-w-2xl text-white/70 md:text-lg">
            Enterprise inquiry — not a payment. Submit your selection and our international supply team will respond with an official quotation, MOQ confirmation and shipping options within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4" /> Ships to 38 markets</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> GMP & ISO 22716</span>
            <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4" /> CIF / FOB / DDP</span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 lg:grid-cols-[1.4fr_1fr] lg:px-10 lg:py-24">
        {/* LEFT: Form steps */}
        <div className="space-y-6">
          {/* Step 1 — Account */}
          <motion.section
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Step 1</p>
                <h2 className="mt-1 font-display text-3xl">Distributor account</h2>
              </div>
              {!authed && (
                <div className="inline-flex rounded-full bg-bone p-1 text-xs">
                  <button onClick={() => setMode("signup")} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 ${mode === "signup" ? "bg-ink text-white" : "text-ink/70"}`}>
                    <UserPlus className="h-3.5 w-3.5" /> Create account
                  </button>
                  <button onClick={() => setMode("login")} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 ${mode === "login" ? "bg-ink text-white" : "text-ink/70"}`}>
                    <LogIn className="h-3.5 w-3.5" /> Log in
                  </button>
                </div>
              )}
            </div>

            {authed && account ? (
              <div className="mt-6 rounded-lg border border-black/10 bg-bone/60 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl leading-tight">{account.companyName}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {account.contactPerson} · {account.email} · {account.country}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {account.distributorType} · Est. {account.monthlyVolume}/mo
                    </p>
                  </div>
                  <button onClick={() => { setAuthed(false); setAccount(null); }} className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-ink">
                    Change
                  </button>
                </div>
              </div>
            ) : mode === "login" ? (
              <form onSubmit={handleAuth} className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Business email" required><input required name="email" type="email" maxLength={255} className="co-input" placeholder="you@company.com" /></Field>
                <Field label="Password" required><input required name="password" type="password" maxLength={80} className="co-input" placeholder="••••••••" /></Field>
                <input type="hidden" name="companyName" defaultValue={account?.companyName || "Returning distributor"} />
                <input type="hidden" name="contactPerson" defaultValue={account?.contactPerson || ""} />
                <input type="hidden" name="country" defaultValue={account?.country || ""} />
                <input type="hidden" name="phone" defaultValue={account?.phone || ""} />
                <input type="hidden" name="distributorType" defaultValue={account?.distributorType || ""} />
                <input type="hidden" name="monthlyVolume" defaultValue={account?.monthlyVolume || ""} />
                <div className="md:col-span-2 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">No account? <button type="button" onClick={() => setMode("signup")} className="underline hover:text-ink">Create one</button></p>
                  <button type="submit" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-ink/85">Continue</button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleAuth} className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Company name" required><input required name="companyName" maxLength={150} className="co-input" placeholder="Acme Pharmaceuticals Ltd." /></Field>
                <Field label="Contact person" required><input required name="contactPerson" maxLength={100} className="co-input" placeholder="Jane Mwangi" /></Field>
                <Field label="Business email" required><input required name="email" type="email" maxLength={255} className="co-input" placeholder="jane@company.com" /></Field>
                <Field label="Phone number" required><input required name="phone" type="tel" maxLength={30} className="co-input" placeholder="+254 700 000 000" /></Field>
                <Field label="Country" required><input required name="country" maxLength={80} className="co-input" placeholder="Kenya" /></Field>
                <Field label="Distributor type" required>
                  <select required name="distributorType" className="co-input">
                    <option value="">Select…</option>
                    {DISTRIBUTOR_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Estimated monthly volume" required className="md:col-span-2">
                  <select required name="monthlyVolume" className="co-input">
                    <option value="">Select…</option>
                    {VOLUMES.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                </Field>
                <div className="md:col-span-2 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">By continuing you agree to be contacted about this inquiry.</p>
                  <button type="submit" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-ink/85">Create & continue</button>
                </div>
              </form>
            )}
          </motion.section>

          {/* Step 2 — Payment preference + notes */}
          <motion.section
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className={`rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 ${!authed ? "opacity-50 pointer-events-none" : ""}`}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Step 2</p>
            <h2 className="mt-1 font-display text-3xl">Preferred payment method</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Preference only — no transaction is processed here. Final terms confirmed on your official invoice.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {PAYMENTS.map((opt) => {
                  const Icon = opt.icon;
                  const active = payment === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setPayment(opt.id)}
                      className={`flex flex-col items-center gap-2 rounded-lg border px-3 py-5 text-sm font-medium transition-colors ${
                        active ? "border-ink bg-ink text-white" : "border-black/10 text-ink/80 hover:border-ink/40"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Additional notes (optional)</span>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={1000}
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-black/10 bg-bone/40 p-3 text-sm outline-none focus:border-ink"
                  placeholder="Target market, delivery timeline, required certifications, packaging preferences…"
                />
              </div>

              <button
                type="submit"
                disabled={!moqMet}
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors ${
                  moqMet ? "bg-ink text-white hover:bg-ink/85" : "bg-ink/15 text-ink/40"
                }`}
              >
                Submit bulk inquiry <ArrowUpRight className="h-4 w-4" />
              </button>
              {!moqMet && (
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Add {MOQ_TOTAL - totalUnits} more units to meet MOQ.
                </p>
              )}
            </form>
          </motion.section>
        </div>

        {/* RIGHT: Order summary */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Inquiry summary</p>
            <h3 className="mt-1 font-display text-2xl">{lines.length} product{lines.length === 1 ? "" : "s"}</h3>

            <ul className="mt-5 divide-y divide-black/5">
              {lines.map((l) => (
                <li key={l.sku} className="flex gap-3 py-3">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded" style={{ background: `linear-gradient(135deg, ${l.brandAccent}55, ${l.brandAccent}10)` }}>
                    <img src={l.image} alt={l.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{l.brandName}</p>
                    <p className="truncate text-sm">{l.name}</p>
                    <p className="text-[11px] text-muted-foreground">EAN {l.ean}</p>
                  </div>
                  <div className="text-right text-xs tabular-nums">
                    <p className="font-medium">×{l.qty}</p>
                    <p className="text-muted-foreground">${(l.priceUsd * l.qty).toFixed(0)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-1.5 border-t border-black/10 pt-5 text-sm">
              <Row label="Total units" value={`${totalUnits}`} />
              <Row label="MOQ" value={`${MOQ_TOTAL} units`} />
              <Row label="Indicative USD" value={`$${totalUsd.toFixed(2)}`} />
              <Row label="Indicative EUR" value={`€${totalEur.toFixed(2)}`} />
            </div>

            <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">
              All figures are indicative. Final wholesale pricing, Incoterms and lead times are confirmed in your official quotation.
            </p>
          </div>
        </aside>
      </div>

      <style>{`
        .co-input {
          width: 100%;
          background: rgba(0,0,0,0.025);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 14px;
          outline: none;
          transition: border-color .2s, background .2s;
        }
        .co-input:focus { border-color: #0a0a0a; background: white; }
      `}</style>
    </div>
  );
}

function Field({ label, required, children, className = "" }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}{required && " *"}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}
