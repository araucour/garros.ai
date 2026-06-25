import Link from "next/link";
import Logo from "./Logo";
import { site, method } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-espresso/10 bg-ivory">
      <div className="container-content grid gap-10 py-14 md:grid-cols-3">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-espresso/70">
            {site.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-espresso/60">
            La méthode
          </h3>
          <ul className="mt-4 space-y-2.5">
            {method.map((step) => (
              <li key={step.slug}>
                <Link
                  href={`/#${step.slug}`}
                  className="text-sm text-espresso/80 transition-colors hover:text-copper"
                >
                  <span className="text-copper">{step.name}</span> — {step.tagline}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-espresso/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-espresso/80">
            <li>
              <Link href="/#contact" className="transition-colors hover:text-copper">
                Contact
              </Link>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-copper"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/mentions-legales" className="transition-colors hover:text-copper">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-espresso/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-espresso/60 sm:flex-row">
          <p>
            © {year} <span className="text-copper">{site.legalName}</span>. Tous droits réservés.
          </p>
          <p>
            L&apos;IA donne la compétence.{" "}
            <span className="text-copper">garros.ai</span> donne la{" "}
            <span className="text-copper">méthode.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
