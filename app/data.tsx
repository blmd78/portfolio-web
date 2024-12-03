export const timelineData = [
  {
    id: 1,
    title: "Développeur fullstack - Arkone",
    date1: "09/2024",
    date2: "10/2024",
    description: `Arkone est une entreprise française spécialisé dans le la création d'application
    Web et mobile.
    • Création du Site vitrine pour le congrès Point S
    • Création du Site Formulaire d’inscription (Partenaire et adhérent)
    • Création d’un back office pour la gestion des activité, des plan de table,
    des moyens de transports.
    • Création du back avec NodeJs
    • Mise en place de test unitaire`,
    skills: [
      "React",
      "Typescript",
      "NodeJs",
      "Jest",
      "MongoDB",
      // "Github",
      // "Notion",
    ],
    companyIcon: "/arkone-icon.png",
  },
  {
    id: 2,
    title: "Développeur fullstack - Atixis",
    date1: "09/2022",
    date2: "07/2024",
    description: `Atixis est une entreprise spécialisée dans l'ingénierie, le conseil et la gestion de
        projets. Elle intervient principalement dans les secteurs du bâtiment, des
        infrastructures et de l'industrie.
        Le projet vise à améliorer l'outils de gestion d'Atixis pour accroître l'efficacité et
        la
        précision des opérations internes (ERP).
        • Création d'interface permettant la visualisation et la gestion de data
        • Interface pour afficher des données analytique comme des chiffres ou des
        graphiques avec Rechart
        • Visualisation des données en multi-devise suivant la devise sélectionné un
        taux de change est calculé
        • Multilinguisme pour répondre aux besoins internationaux à l'aide de la librairie
        i18n
        • Gestion de temps utilisateur par projet
        • Back-End en architecture microservice
        • Upload de document
        • Améliorer la plateforme en matière de design.
        • Rédaction de documentation (Swagger et doc technique)
        • Mise en Place de Pull Request`,
    skills: [
      "React",
      // "Express",
      // "Passport",
      // "Mongoose",
      // "JWT",
      // "Rechart",
      "NodeJs",
      "TypeScript",
      // "i18n",
      // "Swagger",
      // "Microservice",
      // "Pull Request",
      "MongoDB",
      // "Azure",
      // "Teams",
      // "Notion",
      // "Figma",
    ],
    companyIcon: "/atixis-icon.png",
  },
  {
    id: 3,
    title: "Développeur fullstack - Tropicalswap",
    date1: "11/2024",
    date2: "07/2024",
    description: `
      TropicalSwap est une plateforme d'échange décentralisée (DEFI) basée sur la
      technologie blockchain, offrant des services de swap, de farming, et de staking
      pour diverses cryptomonnaies. La plateforme vise à fournir des transactions
      rapides et sécurisées avec des frais réduits. TropicalSwap permet aux
      utilisateurs de participer à des pools de liquidité et de gagner des récompenses
      en retour.
      • Création d’un Front à l’aide d’une maquette Figma
      • Relier le Front au smart contract
      • la CI / CD,Mise en place de pipeline pour automatiser les tests le
      déploiement et les mises à jour de l'application sur une infrastructure Cloud.`,
    skills: [
      "React",
      "NextJS",
      "Typescript",
      "DevOps",
      // "CI/CD",
      // "Cloud",
      // "Github",
      // "Netlify",
      "Figma",
      "Shadcn",
      // "Discord",
      // "Asana",
    ],
    companyIcon: "/tropicalswap-icon.png",
  },
];

export const timelineEducation = [
  {
    id: 1,
    title: "Epitech",
    date1: "2024",
    description: `MASTER ARCHITECTE LOGICIEL ET DEVELOPPEUR D’APPLICATION`,
  },
  {
    id: 2,
    title: "Lycée Louis Bascan",
    date1: "2018",
    description: `Bac STI2D`,
  },
];

export type TimelineData = (typeof timelineData)[number];
export type TimelineEducation = (typeof timelineEducation)[number];

export interface TimelineElement {
  id: number;
  title: string;
  date1: string;
  date2?: string;
  description?: string;
  skills?: string[];
  companyIcon?: string;
}
