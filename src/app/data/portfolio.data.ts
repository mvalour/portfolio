// Tout le contenu du site. Modifier ici, les sections se mettent à jour seules.

export interface Link {
  label: string;
  url: string;
}

export interface Experience {
  role: string;
  org: string;
  place: string;
  period: string;
  summary: string;
  tags?: string[];
}

export interface Education {
  degree: string;
  detail: string;
  school: string;
  period: string;
}

export type SkillCategory = 'front' | 'back' | 'software' | 'data' | 'tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
  /** Nom du fichier dans public/img/tech (sans .svg). Sans logo, l'icône de la catégorie est affichée. */
  logo?: string;
  /** Logo sombre : inversé en thème sombre pour rester lisible. */
  dark?: boolean;
}

export interface Language {
  name: string;
  level: string;
  /** Sur 5, pour la jauge. */
  score: number;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  year: string;
  logo: string;
  /** Couleurs de la carte, reprises de l'identité du projet. */
  theme: { bg: string; accent: string; accentAlt: string };
  links: Link[];
}

export type IconName =
  | 'code'
  | 'server'
  | 'terminal'
  | 'database'
  | 'tools'
  | 'globe'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'github'
  | 'linkedin'
  | 'arrow-right'
  | 'arrow-up'
  | 'external'
  | 'copy'
  | 'check'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'music'
  | 'graduation';

export const PROFILE = {
  firstName: 'Mathis',
  lastName: 'Valour',
  role: 'Développeur web full-stack',
  status: 'Disponible · en recherche d’un poste',
  pitch:
    'Diplômé d’un BUT Informatique (Bac +3), je conçois des applications web de bout en bout : des API NestJS ou Laravel jusqu’aux interfaces React et Angular.',
  about: [
    'Je cherche aujourd’hui un poste de développeur web. Sérieux, motivé et organisé, j’ai envie de mettre mes compétences au service de projets concrets, au sein d’une équipe.',
    'Deux stages m’ont appris à travailler sur des applications en production, en méthode agile : du full-stack Angular / NestJS chez GuardMe, puis du Laravel chez LalaChante.',
    'À côté, je mène mes propres projets jusqu’à la mise en ligne. Musicien depuis l’enfance, je les fais souvent se croiser avec ma passion du beatmaking, comme avec Bleaty et Prodfolio.',
  ],
  email: 'valour.math@gmail.com',
  phone: '07 83 00 83 75',
  phoneHref: 'tel:+33783008375',
  location: 'Ain (01), près de Lyon',
  github: 'https://github.com/mvalour',
  linkedin: 'https://www.linkedin.com/in/mathis-valour-59450a251',
};

export const FACTS: { value: string; label: string }[] = [
  { value: 'Bac +3', label: 'BUT Informatique' },
  { value: '2', label: 'stages en développement' },
  { value: '2', label: 'projets perso en ligne' },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'CDD',
    org: 'Carrefour Market',
    place: 'Ambérieu-en-Bugey',
    period: '2025',
    summary: 'Emploi en magasin après l’obtention de mon diplôme.',
  },
  {
    role: 'Stage développeur Laravel',
    org: 'LalaChante',
    place: 'Toulouse · télétravail',
    period: 'Juin → sept. 2025',
    summary:
      'Participation à l’évolution d’une application web en production : fonctionnalités back-end Laravel / MySQL et interfaces Alpine.js / Tailwind CSS, en méthode agile.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Alpine.js', 'Tailwind CSS', 'Git', 'Figma', 'Notion'],
  },
  {
    role: 'Stage développeur full-stack',
    org: 'GuardMe',
    place: 'EuraTechnologies · Lille',
    period: 'Avr. → juin 2024',
    summary:
      'Participation à la création de sites web et d’applications : front-end Angular / Tailwind CSS, API NestJS / Node.js. Première expérience d’une équipe produit et des méthodes agiles.',
    tags: ['Angular', 'TypeScript', 'NestJS', 'Node.js', 'Tailwind CSS', 'Git'],
  },
  {
    role: 'Co-vice-président · pôle événementiel',
    org: 'Student Club — IUT Lyon 1',
    place: 'Villeurbanne',
    period: 'Mai 2024 → juin 2025',
    summary: 'Organisation d’événements étudiants, coordination d’équipe et gestion de projets associatifs.',
  },
  {
    role: 'Chargé de mission · pôles événementiel et projet',
    org: 'BDE Informatique — IUT Lyon 1',
    place: 'Villeurbanne',
    period: 'Avr. 2023 → avr. 2024',
    summary: 'Animation de la vie étudiante du département informatique et organisation d’événements.',
  },
  {
    role: 'Stage de découverte',
    org: 'Mairie de Châtillon-la-Palud',
    place: 'Ain',
    period: '2019',
    summary: 'Comptabilité, administration et gestion : premier contact avec le monde professionnel.',
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'BUT Informatique',
    detail: 'Diplômé · Bac +3',
    school: 'IUT Lyon 1 — Université Claude Bernard',
    period: '2022 → 2025',
  },
  {
    degree: 'Baccalauréat général',
    detail: 'Maths / NSI · mention Bien',
    school: 'Lycée de la Plaine de l’Ain, Ambérieu-en-Bugey',
    period: '2022',
  },
];

export const SKILL_CATEGORIES: { id: SkillCategory; label: string; icon: IconName }[] = [
  { id: 'front', label: 'Front-end', icon: 'code' },
  { id: 'back', label: 'Back-end', icon: 'server' },
  { id: 'software', label: 'Logiciel', icon: 'terminal' },
  { id: 'data', label: 'Bases de données', icon: 'database' },
  { id: 'tools', label: 'Outils & méthodes', icon: 'tools' },
];

export const SKILLS: Skill[] = [
  // Front-end
  { name: 'HTML', category: 'front', logo: 'html5', description: 'Structure sémantique et accessible des pages.' },
  { name: 'CSS / SCSS', category: 'front', logo: 'css3', description: 'Mises en page responsive, animations, thèmes.' },
  { name: 'JavaScript', category: 'front', logo: 'javascript', description: 'Interactivité côté navigateur, Alpine.js chez LalaChante.' },
  { name: 'TypeScript', category: 'front', logo: 'typescript', description: 'Mon langage par défaut, du front Angular / React aux API NestJS.' },
  { name: 'React', category: 'front', logo: 'react', description: 'Interfaces de Bleaty et de Prodfolio.' },
  { name: 'Next.js', category: 'front', logo: 'nextjs', dark: true, description: 'Front de Bleaty (App Router).' },
  { name: 'Angular', category: 'front', logo: 'angular', description: 'Stage chez GuardMe, et ce portfolio.' },
  { name: 'Vue.js', category: 'front', logo: 'vuejs', description: 'Projets réalisés pendant le BUT.' },
  { name: 'Tailwind CSS', category: 'front', logo: 'tailwindcss', description: 'Utilisé chez GuardMe, LalaChante et sur Bleaty.' },
  { name: 'three.js', category: 'front', logo: 'threejs', dark: true, description: 'Scène 3D de Prodfolio, via React Three Fiber.' },

  // Back-end
  { name: 'Node.js', category: 'back', logo: 'nodejs', description: 'Serveurs, API et scripts d’outillage.' },
  { name: 'NestJS', category: 'back', logo: 'nestjs', description: 'API chez GuardMe et API de Bleaty (auth, progression).' },
  { name: 'PHP', category: 'back', logo: 'php', description: 'Développement côté serveur, en stage et au BUT.' },
  { name: 'Laravel', category: 'back', logo: 'laravel', description: 'Stage chez LalaChante, sur une application en production.' },
  { name: 'Symfony', category: 'back', logo: 'symfony', dark: true, description: 'Applications web PHP réalisées au BUT.' },
  { name: 'API REST', category: 'back', description: 'Conception de routes, validation, sessions et sécurité.' },

  // Logiciel
  { name: 'Python', category: 'software', logo: 'python', description: 'Scripts, algorithmique et traitement de données.' },
  { name: 'Java', category: 'software', logo: 'java', description: 'Programmation orientée objet et applications.' },
  { name: 'Spring Boot', category: 'software', logo: 'spring', description: 'API et applications Java.' },
  { name: 'C', category: 'software', logo: 'c', description: 'Programmation système et bas niveau.' },

  // Bases de données
  { name: 'PostgreSQL', category: 'data', logo: 'postgresql', description: 'Base de Bleaty, avec l’ORM Drizzle.' },
  { name: 'MySQL', category: 'data', logo: 'mysql', description: 'Base de l’application Laravel chez LalaChante.' },
  { name: 'SQL / PL/SQL', category: 'data', description: 'Requêtes, procédures stockées et triggers.' },
  { name: 'MongoDB', category: 'data', logo: 'mongodb', description: 'Base NoSQL orientée documents.' },
  { name: 'UML / Looping', category: 'data', description: 'Modélisation des données (MCD / MLD) avant le code.' },

  // Outils & méthodes
  { name: 'Git', category: 'tools', logo: 'git', description: 'Branches, pull requests, workflow develop → main.' },
  { name: 'GitHub', category: 'tools', logo: 'github', dark: true, description: 'Code, revues et déploiement automatique (Actions).' },
  { name: 'Docker', category: 'tools', logo: 'docker', description: 'Environnements locaux, comme la base de l’API Bleaty.' },
  { name: 'Linux', category: 'tools', logo: 'linux', dark: true, description: 'Ligne de commande, administration et réseaux.' },
  { name: 'Figma', category: 'tools', logo: 'figma', description: 'Lecture et intégration de maquettes.' },
  { name: 'Notion', category: 'tools', logo: 'notion', dark: true, description: 'Suivi des tâches et documentation en équipe.' },
  { name: 'Agile / Scrum', category: 'tools', description: 'Sprints, Kanban, et aussi cycle en V selon les projets.' },
];

export const LANGUAGES: Language[] = [
  { name: 'Français', level: 'Langue maternelle', score: 5 },
  { name: 'Anglais', level: 'B2', score: 4 },
  { name: 'Espagnol', level: 'A2', score: 2 },
];

export const HOBBIES: { label: string; detail: string }[] = [
  { label: 'Piano', detail: 'autodidacte, depuis 2014' },
  { label: 'Guitare', detail: 'depuis 2014' },
  { label: 'Beatmaking', detail: 'sous le nom de Bleaty' },
  { label: 'Street workout', detail: 'depuis 2025' },
  { label: 'Football', detail: '2010 → 2021' },
];

export const PROJECTS: Project[] = [
  {
    name: 'Bleaty',
    tagline: 'Apprendre le beatmaking, étape par étape',
    description:
      'Une plateforme pour apprendre à faire ses beats en pratiquant directement dans le navigateur : leçons interactives jouées sur un séquenceur, parcours vidéo, documentation et suivi de progression.',
    highlights: [
      'Leçons jouables avec un moteur audio Tone.js',
      'API NestJS : comptes, sessions sécurisées, progression',
      'Front, API et base déployés séparément',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Tone.js', 'NestJS', 'Drizzle', 'PostgreSQL'],
    year: '2026',
    logo: 'img/bleaty.svg',
    theme: { bg: '#1f2428', accent: '#8dd36b', accentAlt: '#ff9a2e' },
    links: [
      { label: 'bleaty.fr', url: 'https://bleaty.fr' },
      { label: 'Code front', url: 'https://github.com/mvalour/bleaty' },
      { label: 'Code API', url: 'https://github.com/mvalour/bleaty-api' },
    ],
  },
  {
    name: 'Prodfolio',
    tagline: 'Un studio 3D à explorer pour écouter mes prods',
    description:
      'Mon portfolio de beatmaker sous forme de chambre-studio en 3D, explorable à 360° : on clique sur les objets (PC, téléphone, piano, guitares, FL Studio…) pour écouter les morceaux.',
    highlights: [
      'Scène three.js avec React Three Fiber',
      'Interfaces HTML posées sur les écrans de la scène',
      'Scripts Node qui encodent et taguent les prods',
    ],
    stack: ['React', 'TypeScript', 'three.js', 'React Three Fiber', 'Vite', 'Cloudflare Pages'],
    year: '2026',
    logo: 'img/prodfolio.svg',
    theme: { bg: '#140a24', accent: '#c084fc', accentAlt: '#7c3aed' },
    links: [
      { label: 'prodfolio.pages.dev', url: 'https://prodfolio.pages.dev' },
      { label: 'Code', url: 'https://github.com/mvalour/prodfolio' },
    ],
  },
];

export const NAV_SECTIONS: { id: string; label: string }[] = [
  { id: 'profil', label: 'Profil' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];
