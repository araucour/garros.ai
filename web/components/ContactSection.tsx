import ContactForm from "./ContactForm";
import { site } from "@/lib/content";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-content grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            Parlons de vos leviers IA
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-espresso/85">
            Un projet, une question, un doute sur où commencer ? Décrivez votre
            contexte en quelques lignes. Je vous réponds personnellement, sous 24
            à 48 heures.
          </p>

          <div className="mt-10 space-y-4 text-espresso/80">
            <p>
              <span className="font-medium text-espresso">Email — </span>
              <a href={`mailto:${site.email}`} className="text-copper hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              <span className="font-medium text-espresso">LinkedIn — </span>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper hover:underline"
              >
                linkedin.com/in/raucourt
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-espresso/10 bg-ivory p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
