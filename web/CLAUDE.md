# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## État du projet

Site Next.js **scaffoldé et fonctionnel** (build + lint OK). Pas encore déployé.

- Contenu éditorial centralisé dans [lib/content.ts](lib/content.ts) — **éditer là** pour changer les textes, pas dans les composants.
- Site en **page unique** (`app/page.tsx`) : toutes les sections sur `/` avec navigation par ancres (`#methode`, `#audit`, `#goal`, `#build`, `#loop`, `#about`, `#contact`). Seules `/` et `/mentions-legales` sont des routes réelles.
- **CV servi à `garros.ai/cv`** : `cv/index.html` (racine du monorepo) est copié dans `web/public/cv/index.html` via `scripts/copy-cv.mjs` (hooks `predev`/`prebuild`), puis exposé par une réécriture `/cv → /cv/index.html` dans `next.config.mjs`. La copie est **committée** (garantit `/cv` sur Vercel même si le dossier frère `cv/` n'est pas accessible au build) et **resynchronisée à chaque build/dev** depuis `cv/index.html` (source unique — aucun diff git si inchangé). Édition manuelle possible : `npm run sync:cv`.
- Runbook de déploiement (achat domaine → Vercel → Resend → email) : [tuto_deploiement.md](tuto_deploiement.md).
- Documents de référence des décisions : [contexte_initial.md](contexte_initial.md) (Bloc 4 = prompt qui a généré le site) et [prompt fondateur garros.ai.md](prompt%20fondateur%20garros.ai.md).

Versions réelles installées : **Next 16 + React 19 + ESLint 9 (flat config)**, montées depuis Next 14 pour purger des advisories de sécurité. ESLint utilise `eslint.config.mjs` (imports plats de `eslint-config-next`, pas de `next lint`). 2 advisories `postcss` modérées subsistent : elles viennent de la copie **embarquée par Next** (build-time, sans impact sur un site statique), non corrigeables sans patch upstream.

## Ce qu'est ce projet

Site vitrine de **Garros Consulting** (SASU d'Arnaud de Raucourt, conseil en transformation IA), destiné à des décideurs B2B (DAF, DRH, DSI, dirigeants PME). **Contenu en français uniquement.** Le code (variables, fichiers, fonctions) reste en anglais ; l'UI et la doc sont en français.

## Stack décidée (ne pas redébattre sans raison)

- **Next.js 14+ App Router + TypeScript + Tailwind CSS**
- **Hébergement : Vercel Pro** (le plan Hobby gratuit interdit l'usage commercial — un site de conseil EST commercial, d'où le Pro à 20$/mo)
- **Formulaire de contact : Resend** via une route API Next.js (`app/api/contact/route.ts`), clé `RESEND_API_KEY` en variable d'environnement, validation côté serveur. Pas de service de formulaire tiers type Netlify Forms (on n'est pas sur Netlify).
- **Analytics : Vercel Web Analytics** (`@vercel/analytics`, inclus dans Pro, sans cookies)
- **DNS + email : Cloudflare** — domaine `garros.ai` chez Cloudflare Registrar, email `contact@garros.ai` via Cloudflare Email Routing (forward vers Gmail)
- **Pas de CMS** au lancement — contenu en dur dans les composants / `lib/content.ts` (ou MDX si blog plus tard)
- Déploiement : `git push` GitHub → build auto Vercel. Aucune CI/CD à coder à la main.

## Commandes (une fois le projet Next.js scaffoldé)

```bash
npm install          # installer les dépendances (dont "resend", "@vercel/analytics")
npm run dev          # serveur de dev local — vérification visuelle
npm run build        # build de prod (ce que Vercel exécute)
npm run lint         # ESLint (config Next.js)
```

Aucun framework de test n'est décidé pour l'instant — un site vitrine se valide d'abord visuellement via `npm run dev`. Ne pas inventer une suite de tests sans demande.

**Dépannage dev — erreur `Error: ENOENT ... statSync ... tailwindcss/.../content.js` sur un fichier supprimé** : bug connu Tailwind v3 + Turbopack (Next 16). Le watcher garde un snapshot périmé de la liste de fichiers après une suppression. Le build de prod (`npm run build`) n'est PAS affecté (process neuf). Fix : arrêter le dev, `rm -rf .next`, relancer `npm run dev`.

## Branding — contraintes non négociables

Palette (à définir comme tokens nommés dans `tailwind.config.ts`, pas en valeurs brutes dispersées) :

| Rôle | Hex |
|---|---|
| Fond principal — beige crème | `#F5F0E8` |
| Accents / CTA / liens — orange cuivré | `#D4763B` |
| Texte & titres — brun foncé | `#2D1B0E` |
| Cartes / sections — blanc cassé | `#FAF7F2` |

- **Logo** : forme organique épurée (esprit Claude) en orange cuivré, avec un **slash `/`** en blanc cassé au centre (écho du `/` des URLs `/audit /goal /build /loop`). Composant `Logo.tsx` (SVG inline), décliné header + favicon (`app/icon.svg`). *(Remplace l'ancienne checkmark.)*
- Ambiance : "cabinet de conseil premium" + "praticien IA de terrain". Beaucoup d'espace blanc, typo sobre/premium (style Anthropic). **PAS de design "startup tech bleue".**

## Voix de marque — l'angle, pas un catalogue

Positionnement central : **« L'IA donne la compétence. garros.ai donne la méthode. »**

Le message structurant est **l'écart de vitesse** : l'IA conversationnelle (on interroge, le volume dépend du temps humain) vs l'IA agentique (elle agit seule, le volume ne dépend plus que de la capacité de calcul) ; l'écart se compose comme des intérêts. La home **raconte cet écart d'abord**, puis présente la méthode comme réponse — ce n'est jamais une simple liste de services.

Posture d'Arnaud : praticien qui construit des outils qui tournent, pas un théoricien à PowerPoint. Objectif client = repartir avec une **capacité**, pas une dépendance.

## Architecture des pages (offre = 4 étapes)

Le cœur de l'offre est un cycle en 4 temps, chacun = une page :

- `/audit` — identifier les meilleurs leviers IA
- `/goal` — feuille de route rentable
- `/build` — former, automatiser, déployer
- `/loop` — mesurer, ajuster, rendre autonome

Plus : `/` (home), `/about`, `/contact`, `/methode` (vue d'ensemble du cycle), `/mentions-legales` (obligation légale SASU). Décrire l'automatisation et les agents IA **de façon générique** — ne pas mettre en avant un outil no-code particulier.

## Architecture multi-projets (extensibilité)

Le DNS Cloudflare est le hub central, l'hébergement est interchangeable. La vitrine vit sur l'apex `garros.ai` ; chaque projet IA futur prend un sous-domaine (`app.`, `audit.`, `demo.`, `chat.`…) pointant vers son propre hébergeur (projet Vercel séparé, ou Railway pour les backends/DB). **Ajouter un projet ne doit jamais imposer de refonte de la vitrine ni du domaine.**
