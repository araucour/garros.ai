# Stratégie garros.ai — Domaine, Hébergement, Site Vitrine

> Document de référence initial pour le lancement web de Garros Consulting.
> Positionnement : **« L'IA donne la compétence. garros.ai donne la méthode. »**

---

## ═══════════════════════════════════════════════
## BLOC 1 — STRATÉGIE DOMAINE & HÉBERGEMENT
## ═══════════════════════════════════════════════

### 1.1 DÉCISION DOMAINE

| Option | Crédibilité IA | Coût/an | Contrainte | Verdict |
|---|---|---|---|---|
| **garros.ai** | ★★★★★ — colle au positionnement, mémorable, "tech premium" | ~75-80$ (≈70€) | **2 ans min. obligatoires** (≈150$ upfront) | ✅ **Recommandé** |
| garros.fr | ★★☆ — institutionnel, rassure DAF/dirigeants | ~10€ | aucune | 🥈 À prendre **en plus**, défensif |
| garrosconsulting.fr | ★☆ — long, corporate, peu mémorable | ~10€ | aucune | ❌ Trop lourd |
| garros.consulting | ★★ — clair mais cher et peu connu | ~25-30€ | aucune | ❌ Sans intérêt vs .ai |

**Recommandation finale :**
- **Domaine principal : `garros.ai`** — c'est le produit ("garros.ai donne la méthode"), il fait le travail de marque tout seul.
- **Registrar : Cloudflare Registrar** — vend le .ai au prix coûtant (pas de marge, ~70-80$/an), et fournit le DNS Cloudflare gratuit dans la foulée (pratique pour les sous-domaines, cf 1.4).
- **Défensif optionnel : `garros.fr`** chez OVH/Gandi (~10€/an) → redirige vers garros.ai. Rassure les décideurs FR et protège la marque. Pas urgent.

⚠️ **Point budget à connaître** : le .ai impose un **achat minimum 2 ans**. Paiement ~150$ d'un coup, pas 75$. Lissé, ~6€/mois. Dans le budget.

---

### 1.2 TABLEAU COMPARATIF HÉBERGEMENT

| Solution | Prix/mois utile | Commercial autorisé ? | Support Next.js | Deploy GitHub auto | Évolutivité projets IA | Score /10 |
|---|---|---|---|---|---|---|
| **Vercel (Pro)** | **20$** | ✅ Oui (Pro) | ★★★★★ le meilleur (éditeur de Next.js) | ✅ le meilleur + previews | ★★★★ multi-projets natif | **🥇 9** |
| Netlify | 0€ (Starter) | ✅ Oui en gratuit | ★★★★ natif | ✅ natif + previews | ★★★★ | 8 (plan B gratuit) |
| Cloudflare Pages | 0€ | ✅ Oui (bande passante illimitée) | ★★★ partiel (SSR/ISR limités) | ✅ natif | ★★★★★ (Workers, R2, D1) | 8 |
| Railway | ~5$ usage | ✅ Oui | ★★★ (conteneur) | ✅ | ★★★★★ (backends, DB, IA) | 8 (backends) |
| Render | 0€ statique / 7$ web | ✅ Oui | ★★★ | ✅ | ★★★★ | 7 |
| Firebase Hosting | 0€ (Spark) | ✅ Oui | ★★ (SSR Next pas idéal) | ⚠️ via Actions | ★★★ | 6 |

> Note : le plan **gratuit Hobby de Vercel interdit l'usage commercial** — d'où le passage au plan **Pro (20$)**, qui lève la contrainte. Netlify reste le repli 0€ si un jour il faut supprimer ce coût.

---

### 1.3 RECOMMANDATION PRINCIPALE

**Vitrine `garros.ai` → Vercel (plan Pro, 20$/mo).**

Pourquoi pour ce profil précis :

1. **La meilleure expérience Next.js** — Vercel est l'éditeur de Next.js. Build, previews par branche, edge, rollback : tout est natif, sans adaptateur ni trou de compatibilité.
2. **Usage commercial couvert** — le plan Pro autorise explicitement le commercial (le piège du Hobby gratuit, qui l'interdit, est levé).
3. **Workflow maîtrisé** — `git push` GitHub → déploiement auto, previews, rollback 1 clic. Zéro DevOps.
4. **Analytics inclus** — Vercel Web Analytics (respectueux vie privée, sans bandeau cookies lourd) est compris dans Pro. Une brique en moins.
5. **Sous-domaines & multi-projets natifs** — chaque projet IA futur = un projet Vercel + un domaine en quelques clics.

> Budget : 20$/mo (~18€) + domaine ~6€ = **~24€/mo**. Sous les 50€, marge confortable.
> Pour les backends lourds futurs (API longue, base de données, modèle hébergé) → **Railway** à l'usage, en complément, branché en sous-domaine.

---

### 1.4 ARCHITECTURE SOUS-DOMAINES

Principe clé : **le DNS est le hub central, l'hébergement est interchangeable.** Le contrôle du domaine reste au même endroit (Cloudflare DNS) et chaque sous-domaine pointe vers l'hébergeur adapté. Aucune refonte quand on ajoute un projet.

```
                    garros.ai  (Cloudflare DNS — hub gratuit)
                          │
   ┌──────────────┬───────┴────────┬─────────────────┬──────────────┐
   │              │                │                 │              │
 garros.ai      www         audit.garros.ai     app.garros.ai   demo.garros.ai
 (apex)      → vitrine        outil/landing       SaaS/outil IA   démos clients
   │         Vercel           Vercel               Railway         Vercel/CF
   └─→ Vercel (vitrine)       (projet 2)          (backend+DB)     Pages
```

**Suggestions de sous-domaines (extensibles à l'infini) :**

| Sous-domaine | Usage | Hébergeur typique |
|---|---|---|
| `garros.ai` + `www` | Site vitrine principal | Vercel |
| `app.garros.ai` | Outil IA / SaaS interne | Railway (backend + DB) ou Vercel |
| `audit.garros.ai` | Mini-outil de pré-audit IA (lead magnet) | Vercel (2e projet) |
| `demo.garros.ai` | Démos de projets clients | Vercel / Cloudflare Pages |
| `chat.garros.ai` | Agent IA conversationnel démo | Railway |
| `blog.garros.ai` *(option)* | Contenu / SEO | Vercel |

**Stratégie DNS recommandée :**
1. Domaine acheté chez **Cloudflare Registrar** → DNS Cloudflare automatique (gratuit, rapide, contrôle total).
2. Apex `garros.ai` + `www` → enregistrements vers Vercel (Vercel fournit les valeurs exactes : A record + CNAME).
3. Chaque nouveau projet = **un sous-domaine + un projet Vercel** (ou un CNAME vers Railway). 2 minutes, pas de migration.
4. **Cloudflare Email Routing (gratuit)** : `contact@garros.ai` redirigé vers Gmail + envoi "au nom de" depuis Gmail. Email pro à 0€.

➡️ Cette architecture supporte **n'importe quel type de projet IA futur** (statique, serverless, backend conteneurisé, base de données) sans toucher à la vitrine ni au domaine.

---

## ═══════════════════════════════════════════════
## BLOC 2 — ARCHITECTURE DU SITE VITRINE
## ═══════════════════════════════════════════════

### 2.1 STRUCTURE DES PAGES

| URL | Contenu clé | Priorité |
|---|---|---|
| `/` | Home — accroche "écart de vitesse", méthode 4 étapes, approche perso, preuves, CTA | 🔴 P1 |
| `/audit` | Étape 1 — identifier les meilleurs leviers IA. Pour qui, livrable, déroulé | 🔴 P1 |
| `/goal` | Étape 2 — feuille de route rentable. Priorisation, ROI attendu | 🔴 P1 |
| `/build` | Étape 3 — former, automatiser, déployer. Concret | 🔴 P1 |
| `/loop` | Étape 4 — mesurer, ajuster, rendre autonome. Suivi, transfert de compétence | 🔴 P1 |
| `/about` | Histoire d'Arnaud, Garros Consulting, positionnement praticien | 🟠 P2 |
| `/contact` | Formulaire (Resend) + LinkedIn + prise de RDV | 🔴 P1 |
| `/methode` *(ajout recommandé)* | Vue d'ensemble du cycle audit→goal→build→loop sur une page | 🟠 P2 |
| `/mentions-legales` *(obligatoire)* | Mentions légales SASU + RGPD (obligation légale FR) | 🟠 P2 |

**Ajouts jugés indispensables :** `/contact` avec vrai formulaire (sinon zéro lead), `/mentions-legales` (obligation légale d'une SASU avec site commercial), et `/methode` qui raconte le cycle complet d'un coup (bon pour le SEO et les décideurs pressés).

---

### 2.2 CONTENU DE LA HOME PAGE

#### Headline principale
> # L'IA donne la compétence. **garros.ai donne la méthode.**

#### Sous-titre
> L'IA ne creuse plus un écart de compétence. Elle creuse un **écart de vitesse**.
> J'aide les PME et leurs dirigeants à passer de l'IA qu'on interroge à l'IA qui agit — avec une méthode, pas un PowerPoint.

#### Bandeau "écart de vitesse" (le différenciateur — juste sous le hero)
> **Hier**, vous posiez une question à l'IA, vous lisiez la réponse, vous faisiez le travail vous-même. Votre production dépendait de votre temps disponible.
>
> **Aujourd'hui**, des IA ouvrent les dossiers, recoupent l'information et exécutent les tâches elles-mêmes. Votre production ne dépend plus que de votre capacité de calcul.
>
> Cet écart se compose comme des intérêts. **Chaque trimestre, il se creuse un peu plus.** Ceux qui adoptent la méthode aujourd'hui ne seront pas rattrapés demain.

#### Section "Ma méthode" — un cycle en 4 étapes
> ## Une méthode en 4 temps, pensée pour le résultat
> Pas de transformation IA "big bang". Un cycle court, mesurable, qui vous rend autonome.

| Étape | Promesse | Page |
|---|---|---|
| **✓ Audit** | J'identifie où l'IA vous fait gagner le plus, vite. | `/audit` |
| **✓ Goal** | Je définis la feuille de route rentable — priorisée par ROI. | `/goal` |
| **✓ Build** | Je forme vos équipes, j'automatise, je déploie. Concrètement. | `/build` |
| **✓ Loop** | Je mesure, j'ajuste, et je vous rends autonome. | `/loop` |

#### Section "Mon approche" (narrative — Arnaud)
> ## Un praticien, pas un théoricien
> Je m'appelle Arnaud de Raucourt. Je ne vends pas des slides sur "l'IA en entreprise" — je construis des outils qui tournent. Au quotidien, je conçois des automatisations, des agents IA et des applications avec les mêmes outils agentiques que je déploie chez mes clients.
>
> Mon obsession : que vous repartiez avec une **capacité**, pas une dépendance. La compétence IA, vous l'avez déjà sous la main. Ce qui manque, c'est la méthode pour la transformer en résultat mesurable — et c'est exactement ce que j'apporte.
>
> *Garros Consulting — transformation digitale & IA pour PME et dirigeants.*

#### CTA principal
> ## Prêt à prendre de l'avance ?
> Le bon moment pour adopter l'IA agentique, c'était hier. Le deuxième meilleur moment, c'est maintenant.
>
> **[ Réserver un premier échange → ]**  (bouton orange cuivré)
> *Ou commencez par un audit : [Découvrir la méthode →]*

➡️ La home **ne liste pas des services** : elle raconte l'écart de vitesse, puis propose la méthode comme réponse. C'est le positionnement, pas un catalogue.

---

### 2.3 STACK TECHNIQUE RECOMMANDÉE

| Brique | Choix | Pourquoi |
|---|---|---|
| **Framework** | **Next.js 14+ App Router + TypeScript + Tailwind CSS** | Standard, parfait avec Claude Code, SEO solide, évolutif vers les sous-projets IA |
| **Hébergement** | **Vercel Pro (20$/mo)** | Meilleure DX Next.js, commercial autorisé, previews — cf Bloc 1.3 |
| **Formulaire contact** | **Resend** (gratuit, 3 000 mails/mo) via route API Next.js | Envoie l'email du formulaire proprement. Alternative : Formspree |
| **Email pro** | **Cloudflare Email Routing** (gratuit) → Gmail | `contact@garros.ai` sans coût |
| **Analytics** | **Vercel Web Analytics** (inclus dans Pro) | Aucun coût additionnel, RGPD-friendly, sans bandeau lourd |
| **CMS** | **Non** (au lancement) | Contenu en dur / MDX. Un CMS = sur-ingénierie pour ~9 pages. Si blog plus tard → MDX ou Sanity gratuit |

**Tout est compatible workflow Claude Code → GitHub → déploiement auto Vercel.**

---

## ═══════════════════════════════════════════════
## BLOC 3 — PLAN D'ACTION (CYCLES RACCOURCIS)
## ═══════════════════════════════════════════════

### PHASE 1 — FONDATIONS (J1-J7) : "Être en ligne"

1. **Acheter `garros.ai`** sur Cloudflare Registrar (compte Cloudflare gratuit → Domain Registration → garros.ai, 2 ans). Optionnel : `garros.fr` chez OVH.
2. **Créer le repo GitHub** `garros-ai-site` (privé).
3. **Générer le site** avec le prompt du Bloc 4 dans Claude Code → `npm install` → `npm run dev` pour vérifier en local.
4. **Pousser sur GitHub** (`git push`).
5. **Importer dans Vercel** : connecter GitHub → importer le repo → Vercel détecte Next.js → déploiement auto.
6. **Créer un compte Resend** + clé API → l'ajouter dans Vercel comme variable d'environnement `RESEND_API_KEY`.
7. **Brancher le domaine** : Vercel → Settings → Domains → ajouter `garros.ai` + `www` → copier les enregistrements (A + CNAME) dans Cloudflare DNS. HTTPS auto.
8. **Configurer `contact@garros.ai`** via Cloudflare Email Routing → redirection vers Gmail.

**Livrable J7 :** `https://garros.ai` est **en ligne**, en HTTPS, avec la home + les 4 pages méthode + un formulaire de contact fonctionnel. Email pro actif.

---

### PHASE 2 — CRÉDIBILITÉ (J8-J22) : "Convaincre"

1. **Rédiger le contenu réel** des 4 pages `/audit /goal /build /loop` : pour qui, déroulé, livrable concret, durée. Pas de jargon.
2. **Page `/about`** : histoire, SASU, posture de praticien (réutiliser le texte 2.2 enrichi).
3. **Ajouter les preuves disponibles** : projets réalisés (anonymisés si besoin), **automatisations et agents IA construits**, maîtrise de Claude Code, lien LinkedIn, logo SASU. *(Pas de mise en avant d'un outil no-code en particulier.)*
4. **`/mentions-legales` + bandeau RGPD** léger (Vercel Analytics est sans cookies → bandeau minimal).
5. **Analytics + SEO de base** : titres, meta descriptions, `sitemap.xml`, `robots.txt`, Open Graph (aperçu LinkedIn).
6. **1er lead magnet** : un mini "auto-diagnostic IA" en 5 questions sur `audit.garros.ai` (2e projet Vercel) → capture email.

**Livrable J22 :** site complet et crédible, optimisé SEO, avec un outil de capture de leads opérationnel.

---

### PHASE 3 — ACQUISITION (J23-J45) : "Générer des leads"

**LinkedIn (canal principal B2B) :**
1. **Refonte du profil** `linkedin.com/in/raucourt` : titre = "L'IA donne la compétence. garros.ai donne la méthode." + bannière aux couleurs du site + lien garros.ai dans le "à propos" et le bouton CTA.
2. **Série de posts "écart de vitesse"** (2/semaine) : décline le concept agentique en cas concrets PME (avant/après, temps gagné). Chaque post renvoie subtilement vers une page méthode.
3. **Post de lancement** du site avec capture vidéo d'une automatisation réelle (preuve > discours).
4. **Approche directe ciblée** : 5-10 messages/semaine à des DAF/DRH/dirigeants PME du réseau → proposer l'auto-diagnostic gratuit (`audit.garros.ai`), pas la vente.

**Premiers projets IA hébergés :**
5. Mettre en ligne **1 démo publique** sur `demo.garros.ai` (ex : agent qui traite un type de document) → preuve vivante de "l'IA qui agit".
6. Lier la démo depuis la home et les posts LinkedIn.

**Livrable J45 :** profil LinkedIn aligné, 8-12 posts publiés, 1 démo IA en ligne, et **les premiers contacts qualifiés** entrés via formulaire + auto-diagnostic.

---

## ═══════════════════════════════════════════════
## BLOC 4 — PROMPT CLAUDE CODE STARTER
## ═══════════════════════════════════════════════

Copier-coller tel quel dans Claude Code, dans un dossier vide :

```text
Crée un site vitrine professionnel pour mon activité de conseil en IA.

## Contexte marque
- Nom de marque : garros.ai (Garros Consulting, SASU)
- Positionnement : "L'IA donne la compétence. garros.ai donne la méthode."
- Idée centrale : l'IA crée un "écart de vitesse" (IA agentique qui agit seule),
  pas seulement un écart de compétence.
- Audience : décideurs B2B (DAF, DRH, DSI, dirigeants de PME).
- Langue du site : FRANÇAIS uniquement. Code en anglais, contenu en français.

## Stack technique (impérative)
- Next.js 14+ avec App Router
- TypeScript
- Tailwind CSS
- Déploiement cible : Vercel (config Next.js standard, aucun fichier
  spécifique requis ; Vercel détecte Next.js automatiquement)
- Formulaire de contact : route API Next.js (app/api/contact/route.ts)
  qui envoie l'email via Resend (package "resend"), clé en variable
  d'environnement RESEND_API_KEY. Validation côté serveur.
- Analytics : intègre @vercel/analytics (composant <Analytics/> dans le layout).
- Aucun CMS. Contenu en dur dans les composants / fichiers de données.

## Branding (palette Anthropic / Claude)
Définis ces couleurs dans tailwind.config.ts comme tokens nommés :
- beige crème (fond principal) : #F5F0E8
- orange cuivré (accents, CTA, liens) : #D4763B
- brun foncé (texte principal, titres) : #2D1B0E
- blanc cassé (cartes, sections) : #FAF7F2
Typographie : moderne, sobre, premium (style Anthropic). Utilise une font
sans-serif élégante via next/font (ex : Inter ou similaire) + une serif pour
les gros titres si pertinent. Beaucoup d'espace blanc, ambiance
"cabinet de conseil premium" + "praticien IA de terrain".
PAS de design "startup tech bleue".

## Logo
Crée un composant Logo (SVG inline) inspiré du logo Claude : une forme
organique, épurée, mais en REMPLAÇANT l'étoile/astérisque par une CHECKMARK (✓).
Couleur orange cuivré (#D4763B). Décline-le en version header (avec texte
"garros.ai") et version icône seule (favicon).

## Structure de fichiers à générer
/app
  layout.tsx              (header + footer globaux, font, metadata SEO, <Analytics/>)
  page.tsx                (home)
  /audit/page.tsx
  /goal/page.tsx
  /build/page.tsx
  /loop/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /mentions-legales/page.tsx
  /api/contact/route.ts   (envoi email via Resend)
  globals.css
/components
  Logo.tsx
  Header.tsx              (nav + CTA, responsive avec menu mobile)
  Footer.tsx              (liens, LinkedIn linkedin.com/in/raucourt, mentions)
  Hero.tsx                (headline + sous-titre + CTA)
  SpeedGap.tsx            (section "écart de vitesse" : hier vs aujourd'hui)
  Method.tsx              (les 4 étapes audit/goal/build/loop en cartes)
  Approach.tsx            (narrative perso d'Arnaud)
  CTASection.tsx          (CTA final réutilisable)
  ContactForm.tsx         (formulaire client -> POST vers /api/contact)
/lib
  content.ts              (textes centralisés : méthode, étapes, etc.)
tailwind.config.ts
.env.example              (RESEND_API_KEY=)
README.md  (en français : lancer, build, variables d'env, déployer sur Vercel)

## Pages prioritaires (génère le contenu complet en français)
1. Home (/) :
   - Hero : H1 "L'IA donne la compétence. garros.ai donne la méthode."
     + sous-titre sur l'écart de vitesse + bouton CTA orange "Réserver un échange".
   - Section SpeedGap : "Hier" (IA conversationnelle, dépend du temps humain)
     vs "Aujourd'hui" (IA agentique, dépend de la capacité de calcul),
     + phrase sur l'écart qui se compose comme des intérêts.
   - Section Method : 4 cartes (✓ Audit, ✓ Goal, ✓ Build, ✓ Loop), chacune
     avec une phrase de promesse et un lien vers sa page.
   - Section Approach : narrative d'Arnaud (praticien, pas théoricien,
     "une capacité pas une dépendance").
   - CTASection finale : "Prêt à prendre de l'avance ?".
2. /audit /goal /build /loop : une page par étape, même gabarit
   (titre, promesse, "pour qui", déroulé en 3-4 points, livrable concret, CTA).
   Mets des placeholders [À COMPLÉTER] clairement marqués pour le détail
   que je remplirai moi-même. Décris l'automatisation et les agents IA de façon
   générique, sans mettre en avant un outil no-code particulier.
3. /contact : ContactForm (nom, email, entreprise, message) -> /api/contact
   via Resend + lien LinkedIn + email contact@garros.ai.

## Composants UI prioritaires
Hero, SpeedGap, Method (cartes avec checkmark), CTASection — soignés,
responsive mobile-first, animations légères au scroll si simple
(pas de dépendance lourde).

## SEO & qualité
- metadata Next.js par page (title, description en français, Open Graph).
- sitemap.xml et robots.txt.
- Accessible (contrastes AA), responsive, performant.
- Génère un .gitignore Node/Next standard.

## Déploiement
Explique dans le README, en français et pas à pas, comment :
1) pousser sur GitHub, 2) importer le repo dans Vercel,
3) ajouter la variable RESEND_API_KEY dans Vercel,
4) brancher le domaine garros.ai (DNS Cloudflare).

Commence par scaffolder le projet, installe les dépendances (dont "resend"
et "@vercel/analytics"), puis génère les fichiers. À la fin, lance
`npm run dev` pour que je vérifie en local.
```

---

## ✅ VÉRIFICATION

| Critère | Statut |
|---|---|
| Budget total ≤ 50€/mois | ✅ ~24€/mo (domaine ~6€ + Vercel Pro ~18€) ; Resend/Analytics/DNS/email à 0€ |
| Outils compatibles Claude Code → GitHub → déploiement auto | ✅ Next.js + Vercel + GitHub = chaîne native |
| Phase 1 réalisable seul en 7 jours | ✅ Achat domaine + génération + Vercel = faisable |
| Sous-domaines supportent tout projet IA futur sans refonte | ✅ DNS Cloudflare hub + projets Vercel / CNAME Railway |
| Home reflète "écart de vitesse agentique" (pas une liste de services) | ✅ Section SpeedGap dédiée + headline positionnée |
| Prompt Bloc 4 copiable/opérationnel | ✅ Bloc unique, stack + branding + structure + déploiement Vercel spécifiés |
| Branding checkmark + palette Anthropic intégré au prompt | ✅ Couleurs nommées + logo checkmark explicités |

**Récap budget mensuel :**

| Poste | Coût/mo |
|---|---|
| Domaine garros.ai | ~6€ (≈150$ tous les 2 ans) |
| Vercel Pro | ~18€ (20$) |
| Resend + Vercel Analytics + Cloudflare DNS + Email Routing | 0€ |
| **Total** | **~24€/mo** |

Marge restante ~26€/mo (Google Workspace, Plausible, ou Railway pour un projet IA plus tard).

**Prochaines étapes suggérées :**
1. Décider : `garros.ai` seul, ou + `garros.fr` défensif.
2. Créer le compte Cloudflare + acheter le domaine (Phase 1, étape 1).
3. Lancer le prompt Bloc 4 dans Claude Code dans un dossier vide.

---

## Sources

- [Domain Name Wire — hausse prix .ai 2026](https://domainnamewire.com/2026/02/02/ai-domain-name-prices-going-up-20/)
- [TLD-List — prix .ai](https://tld-list.com/tld/ai)
- [Vercel — Fair Use / Hobby (usage commercial interdit)](https://vercel.com/docs/limits/fair-use-guidelines)
- [Vercel Pricing](https://vercel.com/pricing)
- [Comparatif Cloudflare Pages vs Netlify vs Vercel 2026](https://danubedata.ro/blog/cloudflare-pages-vs-netlify-vs-vercel-static-hosting-2026)
