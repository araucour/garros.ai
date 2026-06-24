import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et informations sur le traitement des données du site garros.ai.",
  robots: { index: false },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-espresso">{title}</h2>
      <div className="mt-3 space-y-2 leading-relaxed text-espresso/80">{children}</div>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-content max-w-2xl">
        <h1 className="text-4xl font-semibold leading-tight text-espresso">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-10">
          <Block title="Éditeur du site">
            <p>{site.legalName} — SASU au capital de 1 000 €</p>
            <p>Siège social : 44 rue de Tourville, Carantec (Finistère)</p>
            <p>SIREN / SIRET : 910 146 315 00015 — RCS Brest</p>
            <p>TVA intracommunautaire : FR22910146315</p>
            <p>Directeur de la publication : Arnaud de Raucourt</p>
            <p>
              Contact :{" "}
              <a href={`mailto:${site.email}`} className="text-copper hover:underline">
                {site.email}
              </a>
            </p>
          </Block>

          <Block title="Hébergement">
            <p>Site hébergé par Vercel Inc.</p>
            <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com</p>
            <p>
              Domaine et services DNS : Cloudflare, Inc. — 101 Townsend St, San
              Francisco, CA 94107, États-Unis.
            </p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus de ce site (textes, identité visuelle, logo)
              est la propriété de {site.legalName}, sauf mention contraire. Toute
              reproduction sans autorisation est interdite.
            </p>
          </Block>

          <Block title="Données personnelles (RGPD)">
            <p>
              Les informations transmises via le formulaire de contact (nom, email,
              entreprise, message) sont utilisées uniquement pour répondre à votre
              demande et ne sont ni revendues ni cédées à des tiers.
            </p>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de
              rectification et de suppression de vos données : écrivez à{" "}
              <a href={`mailto:${site.email}`} className="text-copper hover:underline">
                {site.email}
              </a>
              .
            </p>
            <p>
              Mesure d'audience : Vercel Web Analytics, sans cookie et sans donnée
              personnelle identifiante.
            </p>
          </Block>
        </div>
      </div>
    </section>
  );
}
