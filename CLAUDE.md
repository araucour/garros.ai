# CLAUDE.md — Monorepo garros.ai

Dépôt regroupant **deux sous-projets indépendants**. Travailler toujours dans le bon sous-dossier.

## Structure

- `web/` — site vitrine **Next.js** de Garros Consulting (garros.ai). Détails : [web/CLAUDE.md](web/CLAUDE.md).
- `cv/` — **CV / portfolio** personnel en **HTML statique** : un seul fichier `cv/index.html`, aucun build, aucune dépendance. Détails : [cv/CLAUDE.md](cv/CLAUDE.md).

Les deux ne partagent ni code ni dépendances — ils cohabitent dans le même dépôt git, c'est tout.

## Lancer

- **Site web** : `cd web && npm install && npm run dev` → http://localhost:3000
- **CV** : ouvrir `cv/index.html` directement dans un navigateur (pas de serveur).

## Git

Dépôt unique à la racine. Remotes : `origin` = GitLab, `github` = miroir (`git remote -v`).
Chaque sous-projet garde son propre `.gitignore` (`web/.gitignore` ignore `node_modules`, `.next`, `.env`…). Ne jamais committer `web/node_modules`, `web/.next` ni de secrets.
