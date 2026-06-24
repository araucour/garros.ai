// Copie le CV statique (cv/index.html, à la racine du monorepo) dans le dossier
// public du site Next.js, afin qu'il soit servi à garros.ai/cv.
// Source unique = cv/index.html ; la copie (public/cv/) est générée et gitignorée.
import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url)); // web/scripts
const src = resolve(here, "../../cv/index.html"); // <racine>/cv/index.html
const destDir = resolve(here, "../public/cv"); // web/public/cv
const dest = resolve(destDir, "index.html");

if (!existsSync(src)) {
  console.warn(`[copy-cv] Source introuvable : ${src} — /cv ne sera pas généré.`);
  process.exit(0); // ne pas casser le build
}

mkdirSync(destDir, { recursive: true });
copyFileSync(src, dest);
console.log("[copy-cv] CV copié → public/cv/index.html");
