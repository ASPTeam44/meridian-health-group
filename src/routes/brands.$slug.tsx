import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronRight, Minus, Plus, Quote, Check, Globe2, ShieldCheck, Truck } from "lucide-react";
import { BRANDS, getBrand, brandsByCategory, type Brand, type Product } from "@/lib/brands";
import { Reveal } from "@/components/site/Reveal";
import { Seo } from "@/lib/seo";
import { useCart, MOQ_TOTAL } from "@/lib/cart";

export const Route = createFileRoute("/brands/$slug")({
  component: BrandPage,
  loader: ({ params }) => {
    const brand = getBrand(params.slug);
    if (!brand) throw notFound();
    return { brand };
  },
});

function BrandPage() {
  const { brand } = Route.useLoaderData() as { brand: Brand };
  const siblings = brandsByCategory(brand.category).filter((b) => b.slug !== brand.slug);
  const related = (siblings.length ? siblings : BRANDS.filter((b) => b.slug !== brand.slug)).slice(0, 4);

  return (
    <>
      <Seo
        title={`${brand.name} — ${brand.categoryLabel} | Vitala Global`}
        description={brand.description}
        ogImage={brand.heroImage}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Brand",
          name: brand.name,
          description: brand.description,
          slogan: brand.tagline,
          parentOrganization: { "@type": "Organization", name: "Vitala Global" },
          keywords: brand.keywords.join(", "),
        }}
      />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-white">
        <video
          src={brand.heroVideo}
          poster={brand.heroImage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
          <nav className="flex items-center gap-2 text-xs text-white/70">
            <Link to="/" className="hover:text-white">Vitala</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/brands" className="hover:text-white">Brands</Link>
            <ChevronRight className="h-3 w-3" />
            <span>{brand.name}</span>
          </nav>
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: brand.accent }} />
              {brand.categoryLabel}
            </p>
            <h1 className="font-display text-[14vw] leading-[0.9] tracking-tight md:text-[10vw] lg:text-[8vw]">
              {brand.name}
            </h1>
            <p className="mt-6 max-w-2xl font-display text-2xl text-white/90 md:text-3xl">
              {brand.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-28 lg:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Brand story</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <p className="font-display text-4xl leading-[1.1] text-balance md:text-5xl">
              {brand.description}
            </p>
            <p className="mt-10 max-w-2xl text-pretty text-muted-foreground md:text-lg">
              {brand.story}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-bone py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Product showcase</p>
            <h2 className="mt-3 font-display text-5xl leading-[1] md:text-6xl">
              The {brand.name} range.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Select a product, choose your quantity and submit an order inquiry to our partnership team.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brand.products.map((p, i) => (
              <Reveal key={p.sku} delay={(i % 3) * 0.07}>
                <ProductCard
                  brand={brand}
                  product={p}
                  onSubmit={(qty) => setActive({ product: p, qty })}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-ink py-24 text-white lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
          <Reveal>
            <Quote className="mx-auto h-8 w-8 text-lime" />
            <blockquote className="mt-8 font-display text-4xl leading-[1.15] md:text-5xl">
              "{brand.name} is in our top three recommended brands for everyday {brand.categoryLabel.toLowerCase()} — formulations our pharmacists trust."
            </blockquote>
            <p className="mt-8 text-sm text-white/60">Verified retail partner · Europe</p>
          </Reveal>
        </div>
      </section>

      {/* OTHER BRANDS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">More from {brand.categoryLabel}</p>
            <h3 className="mt-3 font-display text-4xl md:text-5xl">Related brands</h3>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {related.map((b) => (
              <Link
                key={b.slug}
                to="/brands/$slug"
                params={{ slug: b.slug }}
                className="group block overflow-hidden rounded-md bg-bone ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: `linear-gradient(135deg, ${b.accent}55, ${b.accent}11)` }}>
                  <img src={b.heroImage} alt={b.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="font-display text-2xl">{b.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{b.categoryLabel}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

function ProductCard({
  brand,
  product,
  onSubmit,
}: {
  brand: Brand;
  product: Product;
  onSubmit: (qty: number) => void;
}) {
  const [qty, setQty] = useState(1);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-lg bg-white ring-1 ring-black/5 transition-shadow hover:shadow-xl"
    >
      <div
        className="relative grid aspect-[4/3] place-items-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${brand.accent}55, ${brand.accent}11)` }}
      >
        <img
          src={brand.productImage}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] backdrop-blur">
          {product.sku}
        </span>
        <span
          className="absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink"
          style={{ background: brand.accent }}
        >
          {brand.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{brand.name} · {product.tagline}</p>
        <h3 className="mt-2 font-display text-2xl leading-tight">{product.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{product.description}</p>

        <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          EAN <span className="text-ink/80 tabular-nums">{product.ean}</span>
        </p>

        <div className="mt-3 flex items-baseline justify-between border-t border-black/10 pt-4">
          <div>
            <p className="font-display text-3xl leading-none">${product.priceUsd.toFixed(2)}</p>
            <p className="mt-1 text-sm text-muted-foreground">€{product.priceEur.toFixed(2)} · per unit</p>
          </div>
          <p className="text-xs text-muted-foreground">{product.size}</p>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="inline-flex items-center rounded-full border border-black/10 bg-bone">
            <button
              type="button"
              aria-label="Decrease"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-ink/5"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-medium tabular-nums">{qty}</span>
            <button
              type="button"
              aria-label="Increase"
              onClick={() => setQty((q) => Math.min(9999, q + 1))}
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-ink/5"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => onSubmit(qty)}
            className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink/85"
          >
            Submit Order
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
