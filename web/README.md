# garros.ai — Site vitrine

Site vitrine de **Garros Consulting** (conseil en transformation IA).
Positionnement : « L'IA donne la compétence. garros.ai donne la méthode. »

Stack : **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Resend · Vercel Analytics**.

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres commandes :

```bash
npm run build    # build de production (ce que Vercel exécute)
npm run start    # lancer le build de prod en local
npm run lint     # ESLint (config Next.js)
```

## Variables d'environnement

Copier `.env.example` en `.env.local` et renseigner :

| Variable | Rôle |
|---|---|
| `RESEND_API_KEY` | Clé API Resend (envoi des emails du formulaire de contact) |
| `CONTACT_TO_EMAIL` | Adresse de réception des messages (défaut : `contact@garros.ai`) |
| `CONTACT_FROM_EMAIL` | Adresse expéditrice, sur un domaine vérifié chez Resend |

> Sans `RESEND_API_KEY`, le site fonctionne mais le formulaire renvoie une erreur « service non configuré ». C'est normal en local tant que Resend n'est pas branché.

## Structure

```
app/
  layout.tsx              en-tête + pied de page + polices + analytics
  page.tsx                home (Hero, SpeedGap, Method, Approach, CTA)
  audit|goal|build|loop/  les 4 étapes de la méthode (gabarit StepPage)
  methode/                vue d'ensemble du cycle
  about/  contact/  mentions-legales/
  api/contact/route.ts    envoi email via Resend (validation serveur)
  sitemap.ts  robots.ts   SEO
  icon.svg                favicon (logo checkmark)
components/               Logo, Header, Footer, Hero, SpeedGap, Method,
                          Approach, CTASection, ContactForm, StepPage
lib/content.ts            tout le contenu éditorial (FR), centralisé
tailwind.config.ts        palette de marque (tokens nommés)
```

Pour modifier les textes : éditer **`lib/content.ts`** (source unique du contenu).
Les blocs `[À COMPLÉTER]` (about, mentions légales) sont à renseigner avant mise en ligne.

## Déploiement

Voir le runbook complet : [tuto_deploiement.md](tuto_deploiement.md).
Résumé : `git push` sur GitHub → import dans Vercel → ajouter `RESEND_API_KEY` →
brancher le domaine `garros.ai` (DNS Cloudflare). Build auto à chaque push.
