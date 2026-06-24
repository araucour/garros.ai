import Link from "next/link";
import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Halo chaud décoratif en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[34rem] w-[34rem] rounded-full bg-copper/10 blur-3xl"
      />
      <div className="container-content relative py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Colonne texte */}
          <div className="fade-in-up">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-espresso sm:text-5xl lg:text-6xl">
              L&apos;IA donne la compétence.
              <br />
              <span className="text-copper">garros.ai</span> donne la{" "}
              <span className="text-copper">méthode.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-espresso/80 sm:text-xl">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={hero.ctaPrimary.href} className="btn-primary">
                {hero.ctaPrimary.label}
              </Link>
              <Link href={hero.ctaSecondary.href} className="btn-secondary">
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </div>

          {/* Colonne photo (ronde) — clic vers la section À propos */}
          <div className="flex justify-center lg:justify-end">
            <Link
              href="/#about"
              aria-label="En savoir plus sur Arnaud de Raucourt"
              className="group relative block"
            >
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full bg-copper/15 blur-2xl transition-all group-hover:bg-copper/25"
              />
              <Image
                src="/photo-arnaud.jpg"
                alt="Arnaud de Raucourt, fondateur de Garros Consulting"
                width={420}
                height={420}
                priority
                className="relative aspect-square w-56 rounded-full border-4 border-ivory object-cover shadow-xl ring-1 ring-copper/20 transition-transform group-hover:scale-[1.02] sm:w-72 lg:w-full lg:max-w-sm"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
