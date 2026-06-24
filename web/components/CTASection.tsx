import Link from "next/link";
import { finalCta } from "@/lib/content";

type CTAProps = {
  title?: string;
  text?: string;
};

export default function CTASection({ title, text }: CTAProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-3xl bg-espresso px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-copper/20 blur-3xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold leading-tight text-cream sm:text-4xl">
            {title ?? finalCta.title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
            {text ?? finalCta.text}
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={finalCta.ctaPrimary.href} className="btn-primary">
              {finalCta.ctaPrimary.label}
            </Link>
            <Link
              href={finalCta.ctaSecondary.href}
              target={finalCta.ctaSecondary.href.startsWith("http") ? "_blank" : undefined}
              rel={finalCta.ctaSecondary.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-base font-medium text-cream transition-colors hover:border-copper hover:text-copper"
            >
              {finalCta.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
