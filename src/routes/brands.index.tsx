import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, brandsByCategory } from "@/lib/brands";
import { Reveal } from "@/components/site/Reveal";
import { Seo } from "@/lib/seo";

export const Route = createFileRoute("/brands/")({ component: BrandsIndex });

function BrandsIndex() {
  return (
    <>
      <Seo
        title="Our Brands — Vitala Global Consumer Healthcare"
        description="Explore Vitala Global's portfolio of trusted consumer healthcare brands across Oral Health, Vitamins, Respiratory, Pain Relief, Digestive Health and Therapeutic Skin Health."
      />

      <section className="bg-bone pt-40 pb-20 lg:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Our brands</p>
            <h1 className="mt-4 max-w-5xl font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
              A portfolio across six everyday health categories.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-muted-foreground md:text-lg">
              From oral care and vitamins to pain relief and therapeutic skin health — our brands meet people where everyday health happens. Tap a brand to explore its range.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-ink/80 transition-colors hover:border-ink hover:text-ink"
              >
                {c.label}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {CATEGORIES.map((cat) => {
            const brands = brandsByCategory(cat.slug);
            return (
              <div key={cat.slug} id={cat.slug} className="scroll-mt-24 border-t border-black/10 py-16 lg:py-24">
                <Reveal>
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Category · {String(brands.length).padStart(2, "0")} brand{brands.length === 1 ? "" : "s"}
                      </p>
                      <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">{cat.label}</h2>
                      <p className="mt-5 max-w-md text-muted-foreground">{cat.blurb}</p>
                    </div>

                    <div className="lg:col-span-8">
                      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {brands.map((b, i) => (
                          <Reveal key={b.slug} delay={i * 0.06}>
                            <Link
                              to="/brands/$slug"
                              params={{ slug: b.slug }}
                              className="group block h-full overflow-hidden rounded-lg bg-bone ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                            >
                              <div
                                className="relative grid aspect-[4/3] place-items-center overflow-hidden"
                                style={{ background: `linear-gradient(135deg, ${b.accent}55, ${b.accent}10)` }}
                              >
                                <img
                                  src={b.heroImage}
                                  alt={b.name}
                                  loading="lazy"
                                  className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                                />
                                <p className="relative z-10 font-display text-7xl tracking-tight text-ink/90">
                                  {b.monogram}
                                </p>
                              </div>
                              <div className="flex items-start justify-between gap-3 p-5">
                                <div>
                                  <p className="font-display text-2xl">{b.name}</p>
                                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{b.tagline}</p>
                                </div>
                                <ArrowUpRight className="h-5 w-5 shrink-0 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                              </div>
                            </Link>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
