import Image from "next/image";
import { speedGap } from "@/lib/content";

export default function SpeedGap() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="eyebrow">{speedGap.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            {speedGap.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-espresso/10 bg-cream p-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-espresso/50">
              {speedGap.before.label}
            </span>
            <p className="mt-4 text-lg leading-relaxed text-espresso/80">
              {speedGap.before.text}
            </p>
          </div>
          <div className="rounded-2xl border border-copper/30 bg-copper/5 p-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-copper">
              {speedGap.after.label}
            </span>
            <p className="mt-4 text-lg leading-relaxed text-espresso/90">
              {speedGap.after.text}
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Image
            src="/image-linkedin-ecart-IA_5.webp"
            alt="Illustration de l'écart de vitesse entre l'IA conversationnelle et l'IA agentique"
            width={1080}
            height={1080}
            className="h-auto w-full max-w-md rounded-2xl shadow-md ring-1 ring-espresso/10"
          />
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-xl font-display leading-relaxed text-espresso sm:text-2xl">
          {speedGap.conclusion}
        </p>
      </div>
    </section>
  );
}
