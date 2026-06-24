import Link from "next/link";

type LogoProps = {
  withWordmark?: boolean;
  className?: string;
  href?: string;
};

/**
 * Logo garros.ai — forme organique épurée (esprit Claude) dont l'étoile est
 * remplacée par une checkmark. Le SVG est inline pour rester net à toute taille
 * et servir aussi de favicon (voir app/icon.svg).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="garros.ai"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Forme organique (squircle légèrement irrégulier) en orange cuivré */}
      <path
        fill="#D4763B"
        d="M24 1.5c8.4 0 12.9 1.1 16.6 4.4 3.6 3.3 5.4 8.1 5.4 17.1s-1.5 14.5-5.1 17.9C37.3 44.3 32.6 46 24 46s-13.3-1.7-16.9-5.1C3.5 37.5 2 32.4 2 23S3.8 9.2 7.4 5.9C11.1 2.6 15.6 1.5 24 1.5Z"
      />
      {/* Slash en blanc cassé (écho du / des URLs) — tourne autour de son centre */}
      <path
        className="logo-slash"
        fill="none"
        stroke="#FAF7F2"
        strokeWidth="5"
        strokeLinecap="round"
        d="M18.5 33 L29.5 15"
      />
    </svg>
  );
}

export default function Logo({
  withWordmark = true,
  className = "",
  href = "/",
}: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9" />
      {withWordmark && (
        <span className="font-display text-xl font-semibold tracking-tight text-espresso">
          garros<span className="text-copper">.ai</span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Accueil garros.ai" className="inline-flex">
        {content}
      </Link>
    );
  }
  return content;
}
