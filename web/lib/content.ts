// Contenu centralisé du site (FR). Modifier ici pour mettre à jour les pages.

export const site = {
  name: "garros.ai",
  legalName: "Garros Consulting",
  baseUrl: "https://garros.ai",
  tagline: "L'IA donne la compétence. garros.ai donne la méthode.",
  description:
    "Conseil en transformation IA pour PME et dirigeants. Une méthode en 4 temps — audit, feuille de route, déploiement, autonomie — pour passer de l'IA qu'on interroge à l'IA qui agit.",
  email: "contact@garros.ai",
  linkedin: "https://www.linkedin.com/in/raucourt",
  cv: "/cv",
};

export const nav = [
  { href: "/#methode", label: "Méthode" },
  { href: "/#audit", label: "/Audit" },
  { href: "/#goal", label: "/Goal" },
  { href: "/#build", label: "/Build" },
  { href: "/#loop", label: "/Loop" },
  { href: "/#about", label: "À propos" },
];

export const hero = {
  eyebrow: "Garros Consulting — transformation IA",
  titleLead: "L'IA donne la compétence.",
  titleEmph: "garros.ai donne la méthode.",
  subtitle:
    "L'Intelligence Artificielle ne creuse plus un écart de compétence. Elle creuse un écart de vitesse. J'aide les PME et leurs dirigeants à passer de l'IA qu'on interroge à l'IA qui agit — avec une méthode, pas un PowerPoint.",
  ctaPrimary: { href: "/#contact", label: "Réserver un échange" },
  ctaSecondary: { href: "/#methode", label: "Découvrir la méthode" },
};

export const speedGap = {
  eyebrow: "L'écart de vitesse",
  title: "Le vrai sujet n'est plus la compétence. C'est la vitesse.",
  before: {
    label: "Hier — l'IA conversationnelle",
    text: "Vous posiez une question, vous lisiez la réponse, vous faisiez le travail vous-même. Votre production dépendait de votre temps disponible.",
  },
  after: {
    label: "Aujourd'hui — l'IA qui agit",
    text: "Des IA ouvrent les dossiers, recoupent l'information et exécutent les tâches elles-mêmes. Votre production ne dépend plus que de votre capacité de calcul.",
  },
  conclusion:
    "Cet écart se compose comme des intérêts. Chaque trimestre, il se creuse un peu plus. Ceux qui adoptent la méthode aujourd'hui ne seront pas rattrapés demain.",
};

export type MethodStep = {
  slug: "audit" | "goal" | "build" | "loop";
  number: string;
  name: string;
  promise: string;
  tagline: string;
  forWho: string;
  steps: string[];
  deliverable: string;
};

export const method: MethodStep[] = [
  {
    slug: "audit",
    number: "01",
    name: "/Audit",
    promise: "J'identifie les cas d'usage où l'IA peut vous faire gagner plus et plus vite.",
    tagline: "Identifier les meilleurs leviers IA",
    forWho:
      "Dirigeants et responsables (DAF, DRH, DSI) qui veulent savoir où l'IA crée de la valeur dans leur organisation — sans pari hasardeux.",
    steps: [
      "Cartographie des processus et des tâches à fort volume ou à faible valeur ajoutée.",
      "Repérage des cas d'usage IA les plus rentables et les plus réalistes.",
      "Évaluation de la faisabilité technique, des données disponibles et des risques.",
      "Hiérarchisation des leviers par impact et par effort.",
    ],
    deliverable:
      "Une liste priorisée de leviers IA, du gain estimé au niveau de complexité — votre point de départ objectif.",
  },
  {
    slug: "goal",
    number: "02",
    name: "/Goal",
    promise: "Je construis une feuille de route claire, priorisée par impact et ROI.",
    tagline: "Définir la feuille de route rentable",
    forWho:
      "Organisations qui ont identifié des leviers et veulent un plan clair, chiffré, qui tient la route en comité de direction.",
    steps: [
      "Traduction des leviers retenus en objectifs mesurables.",
      "Priorisation par retour sur investissement et rapidité de mise en œuvre.",
      "Définition des indicateurs de succès et des jalons.",
      "Cadrage du budget, des ressources et du calendrier.",
    ],
    deliverable:
      "Une feuille de route séquencée et chiffrée : quoi faire, dans quel ordre, pour quel retour attendu.",
  },
  {
    slug: "build",
    number: "03",
    name: "/Build",
    promise: "Je forme vos équipes, j'automatise, je déploie. Concrètement.",
    tagline: "Former, automatiser, déployer",
    forWho:
      "Équipes prêtes à passer du plan à l'exécution, qui veulent des outils qui tournent et des collaborateurs montés en compétence.",
    steps: [
      "Conception et mise en place des automatisations et des agents IA.",
      "Intégration aux outils existants, sans tout réinventer.",
      "Formation pratique et actionnable des équipes concernées.",
      "Déploiement progressif, testé sur des cas réels.",
    ],
    deliverable:
      "Des automatisations et des agents IA en production, et des équipes capables de les utiliser au quotidien.",
  },
  {
    slug: "loop",
    number: "04",
    name: "/Loop",
    promise: "Je mesure, j'ajuste, et je vous rends autonome et audacieux pour la prochaine boucle.",
    tagline: "Mesurer, ajuster, rendre autonome",
    forWho:
      "Organisations qui veulent ancrer les résultats dans la durée et ne plus dépendre d'un prestataire pour avancer.",
    steps: [
      "Suivi des indicateurs définis à l'étape Goal.",
      "Ajustement des automatisations selon les résultats réels.",
      "Transfert de compétence et documentation.",
      "Identification du prochain cycle d'amélioration.",
    ],
    deliverable:
      "Un dispositif mesuré, optimisé, et une équipe autonome — une capacité, pas une dépendance.",
  },
];

export const approach = {
  eyebrow: "Mon approche",
  title: "Un praticien, pas un théoricien",
  paragraphs: [
    "Je m'appelle Arnaud de Raucourt. Je ne vends pas des slides sur « l'IA en entreprise » — je construis des outils qui tournent. Au quotidien, je conçois des automatisations, des agents IA et des applications avec les mêmes outils agentiques que je déploie chez mes clients.",
    "Mon obsession : que vous repartiez avec une capacité, pas une dépendance. La compétence IA, vous l'avez déjà sous la main. Ce qui manque, c'est la méthode pour la transformer en résultat mesurable — et c'est exactement ce que j'apporte.",
  ],
  signature: "Garros Consulting — transformation digitale & IA pour PME et dirigeants.",
};

export const finalCta = {
  title: "Prêt à prendre de l'avance ?",
  text: "Le bon moment pour adopter l'IA agentique, c'était hier. Le deuxième meilleur moment, c'est maintenant.",
  ctaPrimary: { href: "/#contact", label: "Prendre contact" },
  ctaSecondary: {
    href: "https://calendar.app.google/yeW2XeK4hNamzkUo9",
    label: "Prendre RDV dans mon calendrier",
  },
};
