# Tuto déploiement garros.ai — Runbook complet

> De l'achat du domaine à la mise en ligne sur https://garros.ai.
> Profil : solo, à l'aise Git/terminal, déploie via Claude Code → GitHub → Vercel.
> Budget cible ~24 €/mo (domaine ~6 € + Vercel Pro ~18 €).
> Décisions techniques de référence : [contexte_initial.md](contexte_initial.md) (Bloc 4 = prompt de génération).

## Statut

- [ ] Prérequis — Acheter `garros.ai` (Cloudflare Registrar)
- [x] Phase A — Générer le site (Bloc 4) ✅ build + lint OK, tourne en local
- [ ] Phase B — Push GitHub
- [ ] Phase C — Import + deploy test Vercel
- [ ] Phase D — Resend (formulaire)
- [ ] Phase E — Vercel Pro + brancher `garros.ai`
- [ ] Phase F — Email `contact@garros.ai`

**Ordre clé :** achat domaine → Bloc 4 (code local) → GitHub → **APRÈS seulement** Vercel → Resend → Pro+domaine → email.

> ⚠️ **Piège Cloudflare** (revient en phases D, E, F) : tout enregistrement DNS pointant vers Vercel doit être en **« DNS only » (nuage GRIS)**, jamais en proxy orange — sinon le HTTPS de Vercel échoue.

---

## PRÉREQUIS — Acheter `garros.ai` (Cloudflare Registrar)

**Prix coûtant à l'achat ET au renouvellement, DNS déjà au bon endroit. Pas de code promo fiable en `.ai` : le prix coûtant Cloudflare bat tout coupon.**
**À prévoir : ~160 $ d'un coup** (le `.ai` impose 2 ans minimum). WHOIS privacy + DNSSEC + verrou anti-transfert inclus.

1. Créer un compte sur **https://dash.cloudflare.com/sign-up** → valider l'email.
2. Activer la **2FA** (*My Profile → Authentication*) — protège l'actif.
3. **https://domains.cloudflare.com** → chercher `garros.ai`.
   - **Available** → continuer. **Taken** → STOP, choisir un plan B avant d'acheter.
4. **Register** → durée **2 ans** (imposé) → vérifier WHOIS privacy activé.
5. Titulaire = **Garros Consulting (SASU)** + adresse pro (cohérence légale).
6. Payer par carte → confirmer.
7. Activer le **renouvellement automatique** (un `.ai` expiré est vite repris).

**Livrable :** `garros.ai` détenu, DNS géré par Cloudflare, DNSSEC + verrou actifs.

---

## PHASE A — Générer le site (Bloc 4)

Claude Code scaffolde Next.js (pages, composants, branding, route Resend, `@vercel/analytics`). Source = **Bloc 4 de [contexte_initial.md](contexte_initial.md)**.

1. Dossier de travail vide → ouvrir Claude Code → coller le prompt Bloc 4.
2. Laisser scaffolder + installer (`resend`, `@vercel/analytics`).
3. Vérifier en local :

```bash
npm install
npm run dev     # http://localhost:3000 — contrôle visuel
npm run build   # doit passer (c'est ce que Vercel exécutera)
npm run lint
```

4. Contrôles : home (headline + section « écart de vitesse »), 4 pages `/audit /goal /build /loop`, palette (`#F5F0E8` / `#D4763B` / `#2D1B0E`), logo checkmark.

**Livrable A :** site qui tourne en local, `npm run build` vert.

---

## PHASE B — Push GitHub (terminal)

> ⚠️ Le `.env` (qui contiendra `RESEND_API_KEY`) reste **local et ignoré par git**. Aucun secret versionné.

```bash
git init
git add -A
git commit -m "Initialisation du site vitrine garros.ai"
git branch -M main

# avec gh :
gh repo create garros-ai-site --private --source=. --remote=origin --push

# sinon : créer le repo privé garros-ai-site sur github.com, puis :
git remote add origin https://github.com/TON-USER/garros-ai-site.git
git push -u origin main
```

**Livrable B :** code sur GitHub (privé) = signal de déploiement pour Vercel.

---

## PHASE C — Import Vercel (web, 1re visite — après le push)

1. **vercel.com** → connexion avec GitHub.
2. **Add New → Project** → `garros-ai-site` → Import.
3. Next.js détecté seul, ne rien changer → **Deploy**.
4. ~1-2 min → URL test `https://garros-ai-site-xxx.vercel.app`.

> Plan Hobby gratuit = ok **juste pour tester**. On passe Pro en phase E (avant la mise en ligne commerciale).

**Livrable C :** site sur `.vercel.app` (formulaire KO tant que Resend pas branché).

---

## PHASE D — Resend (formulaire de contact)

1. **resend.com** → Sign up avec le Gmail perso (login seulement, pas d'envoi via Gmail).
2. **API Keys → Create** → copier `re_…` (visible une seule fois).
3. **Domains → Add Domain → garros.ai** → Resend donne 2-3 lignes DNS (DKIM/SPF).
4. Coller ces lignes dans Cloudflare DNS (**DNS only / gris**) → **Verify** dans Resend.
5. Vercel → **Settings → Environment Variables** → `RESEND_API_KEY = re_…` → Save (Production + Preview).
6. Vercel → **Deployments → Redeploy** (pour charger la variable).
7. Tester le formulaire `/contact` → mail reçu.

**Livrable D :** formulaire opérationnel, domaine vérifié chez Resend.

---

## PHASE E — Vercel Pro + brancher le domaine (web, 2e visite — mise en ligne)

1. Vercel → **Settings → Billing → Upgrade to Pro** (20 $/mo). Raison : le Hobby gratuit **interdit l'usage commercial** ; un site de conseil l'est. Pro débloque aussi Web Analytics.
2. Activer **Web Analytics** (onglet *Analytics* → Enable ; le composant `<Analytics/>` est déjà dans le layout).
3. Settings → **Domains** → ajouter `garros.ai` puis `www.garros.ai` (apex = principal).
4. Cloudflare → **DNS → Records** (tout en **gris / DNS only**) :

| Type | Nom | Valeur | Proxy |
|---|---|---|---|
| A | `@` | `76.76.21.21` *(ou la valeur affichée par Vercel)* | 🔘 gris |
| CNAME | `www` | `cname.vercel-dns.com` | 🔘 gris |

5. Attendre **« Valid Configuration »** + HTTPS auto (~1 h de propagation max).
6. Tester `https://garros.ai` et la redirection `https://www.garros.ai`.

> Bloqué « Invalid Configuration » ? 9/10 = **proxy orange** resté actif → repasser en gris.

**Livrable E :** site en ligne sur `https://garros.ai` en HTTPS, plan Pro actif.

---

## PHASE F — Email `contact@garros.ai` (web)

1. Cloudflare → `garros.ai` → **Email → Email Routing → Get started**.
2. **Destination** = Gmail perso → confirmer via le mail de validation.
3. Accepter l'ajout auto des **MX + SPF** (coexistent avec les records Vercel et Resend).
4. **Custom address** `contact@garros.ai` → *forward* vers Gmail (option : **catch-all**).

**Envoi « en tant que »** (répondre depuis l'adresse pro) = brique SMTP Resend en plus, **pas urgent** :
- Resend (domaine déjà vérifié en D) → identifiants SMTP → Gmail → *Paramètres → Comptes → « Envoyer des emails en tant que »* → `contact@garros.ai`.

**Livrable F :** réception `contact@garros.ai` dans Gmail.

---

## Vue d'ensemble

`Prérequis Achat domaine` → **A** Générer (Claude Code) → **B** Push GitHub (toi) → **C** Import Vercel (1re visite) → **D** Resend → **E** Pro + domaine (2e visite) → **F** Email.

## État DNS final (zone Cloudflare `garros.ai`)

| Type | Nom | Rôle | Proxy |
|---|---|---|---|
| A | `@` | site Vercel | gris |
| CNAME | `www` | redirection apex (Vercel) | gris |
| MX (x1-3) | `@` | réception email (Cloudflare) | n/a |
| TXT | `@` | SPF | n/a |
| TXT / CNAME | (divers) | vérif + DKIM Resend | gris |

**Extensibilité :** chaque projet IA futur = **1 ligne DNS en plus** (ex. CNAME `app` → Railway), sans toucher au reste.

## Récap budget

| Poste | €/mo |
|---|---|
| Domaine `garros.ai` (~160 $ / 2 ans) | ~6 |
| Vercel Pro | ~18 |
| Resend + Vercel Analytics + Cloudflare DNS/Email | 0 |
| **Total** | **~24** |
