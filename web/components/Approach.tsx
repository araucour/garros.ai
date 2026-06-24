import { approach, site } from "@/lib/content";

export default function Approach() {
  return (
    <section id="about" className="scroll-mt-24 bg-ivory py-20 sm:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">{approach.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            {approach.title}
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-espresso/80">
            {approach.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-8 font-display text-base font-medium text-copper">
            {approach.signature}
          </p>
          <div className="mt-8">
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Consulter mon CV en ligne →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
