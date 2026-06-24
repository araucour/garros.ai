import { method } from "@/lib/content";

export default function MethodSection() {
  return (
    <section id="methode" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="eyebrow">Ma méthode</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            Une méthode en 4 temps, pensée pour le résultat
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-espresso/75">
            Pas de transformation IA « big bang ». Un cycle court, mesurable, qui vous rend autonome.
          </p>
        </div>

        {/* Aperçu — 4 cartes cliquables (ancres) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {method.map((step) => (
            <a
              key={step.slug}
              href={`#${step.slug}`}
              className="group flex flex-col rounded-2xl border border-espresso/10 bg-ivory p-8 transition-all hover:border-copper/40 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-2xl font-semibold text-copper">
                  {step.name}
                </span>
                <span className="ml-auto font-display text-sm font-medium text-espresso/40">
                  {step.number}
                </span>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-espresso/85">
                {step.promise}
              </p>
            </a>
          ))}
        </div>

        {/* Détail de chaque étape (ancres #audit / #goal / #build / #loop) */}
        <div className="mt-20 space-y-16">
          {method.map((step) => (
            <div
              key={step.slug}
              id={step.slug}
              className="scroll-mt-24 grid gap-10 border-t border-espresso/10 pt-12 lg:grid-cols-3"
            >
              <div className="lg:col-span-2">
                <p className="eyebrow">Étape {step.number}</p>
                <h3 className="mt-3 text-2xl font-semibold text-espresso sm:text-3xl">
                  <span className="text-copper">{step.name}</span> — {step.tagline}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-espresso/85">
                  {step.promise}
                </p>

                <p className="mt-6 font-medium text-espresso">Pour qui ?</p>
                <p className="mt-2 leading-relaxed text-espresso/80">{step.forWho}</p>

                <p className="mt-6 font-medium text-espresso">Comment ça se déroule</p>
                <ol className="mt-3 space-y-3">
                  {step.steps.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-copper/12 font-display text-sm font-semibold text-copper">
                        {i + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed text-espresso/80">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <aside className="lg:col-span-1">
                <div className="rounded-2xl border border-copper/30 bg-copper/5 p-7">
                  <h4 className="font-display text-lg font-semibold text-copper">
                    /Résultat :
                  </h4>
                  <p className="mt-3 leading-relaxed text-espresso/85">{step.deliverable}</p>
                </div>
              </aside>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
