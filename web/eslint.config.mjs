import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      // Contenu 100% français : les apostrophes (l'IA, d'abord…) sont voulues
      // dans le texte JSX. Échapper chaque apostrophe serait du bruit inutile.
      "react/no-unescaped-entities": "off",
    },
  },
  {
    ignores: [".next/**", "node_modules/**"],
  },
];

export default eslintConfig;
