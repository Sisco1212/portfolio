export type Certification = {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  description: string;
  skills: string[];
  image: string;
  pdf: string;
  verificationUrl: string;
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Game Programming",
    issuer: "Maliyo Games",
    issueDate: "13 December, 2024",
    credentialId: "",
    description:
      "A brief description of the certification and the knowledge or competencies demonstrated.",
    skills: ["C#", "Unity"],
    image: "/certifications/game-programming-certificate.jpg",
    pdf: "/certifications/game-programming-certificate.pdf",
    verificationUrl: "",
  },
    {
    id: 2,
    title: "Game Design",
    issuer: "Maliyo Games",
    issueDate: "5 September, 2025",
    credentialId: "",
    description:
      "A brief description of what this certification covers.",
    skills: ["MakeCode"],
    image: "/certifications/game-design-certificate.jpg",
    pdf: "/certifications/game-design-certificate.pdf",
    verificationUrl: "",
  },
  {
    id: 3,
    title: "Unity Game Development",
    issuer: "Endless Games and Learning Lab | Arizona State University",
    issueDate: "20 April, 2026",
    credentialId: "",
    description:
      "A brief description of what this certification covers.",
    skills: ["Unity", "C#"],
    image: "/certifications/unity-game-development-certificate.jpg",
    pdf: "/certifications/unity-game-development-certificate.pdf",
    verificationUrl: "https://api.credid.asu.edu/v1/public/assertions/4c3a2e39-1a2e-451e-8717-53db2027d5c7?email=sitopatrick2004%40gmail.com",
  },
  {
    id: 4,
    title: "JavaScript Fundamentals",
    issuer: "Coddy Tech",
    issueDate: "23 October, 2025",
    credentialId: "",
    description:
      "A brief description of what this certification covers.",
    skills: ["JavaScript"],
    image: "/certifications/javascript-fundamentals-certificate.jpg",
    pdf: "/certifications/javascript-fundamentals-certificate.pdf",
    verificationUrl: "https://coddy.tech/certifications/jhA5n5-javascript-Bi8cmJ",
  },

    {
    id: 5,
    title: "JavaScript Logic & Flow",
    issuer: "Coddy Tech",
    issueDate: "3 November, 2025",
    credentialId: "",
    description:
      "A brief description of what this certification covers.",
    skills: ["JavaScript"],
    image: "/certifications/javascript-logic-and-flow-certificate.jpg",
    pdf: "/certifications/javascript-logic-and-flow-certificate.pdf",
    verificationUrl: "",
  },

  {
    id: 6,
    title: "Introduction to Typescript",
    issuer: "Coddy Tech",
    issueDate: "16 June, 2025",
    credentialId: "",
    description:
      "A brief description of what this certification covers.",
    skills: ["JavaScript"],
    image: "/certifications/introduction-to-typescript-certificate.jpg",
    pdf: "/certifications/introduction-to-typescript-certificate.pdf",
    verificationUrl: "",
  },

  {
    id: 7,
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    issueDate: "25 March, 2026",
    credentialId: "",
    description:
      "A brief description of what this certification covers.",
    skills: ["Artificial Intelligence", "LLM"],
    image: "/certifications/ai-fundamentals-certificate.jpg",
    pdf: "/certifications/ai-fundamentals-certificate.pdf",
    verificationUrl: "",
  },
  {
    id: 8,
    title: "AI Literacy",
    issuer: "IBM SkillsBuild",
    issueDate: "25 March, 2026",
    credentialId: "",
    description:
      "A brief description of what this certification covers.",
    skills: ["Artificial Intelligence", "LLM"],
    image: "/certifications/ai-literacy-certificate.jpg",
    pdf: "/certifications/ai-literacy-certificate.pdf",
    verificationUrl: "",
  },

];