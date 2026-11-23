export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  role: string;
  features: string[];
  screenshots: string[];
  github: string;
  demo: string;
  client: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "subverse",
    title: "Subverse",
    description:
      "A subscription management platform for tracking recurring expenses, monitoring renewals, and managing payments with automated reminders and real-time insights.",
    category: "Full Stack Development",
    image: "/subversee.jpg",
    tech: ["Next.js", "TypeScript", "Express.js", "Node.js", "MongoDB"],
    role: "Full Stack Development",
    features: [
      "User authentication and account management",
      "Create, update, and manage subscriptions",
      "Track recurring expenses and upcoming renewals",
      "Automated renewal reminder workflows",
      "Monthly and yearly spending summaries",
    ],
    screenshots: [
      // Add paths such as "/screenshots/subverse-dashboard.png"
    ],
    github: "github.com/sisco1212/subverse-frontend",
    demo: "subversee.vercel.app",
    client: "",
  },
  {
    id: 2,
    slug: "animatrix",
    title: "Animatrix",
    description:
      "An anime news platform featuring automated article aggregation, categorized news feeds, and dynamic article pages.",
    category: "Front-end Development",
    image: "/animatrix2.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Frontend Development",
    features: [
      "Automated anime news aggregation",
      "Categorized news feeds",
      "Dynamic article pages",
      "Responsive user interface",
    ],
    screenshots: [],
    github: "github.com/animatrix-x/animatrix-frontend",
    demo: "https://www.animatrix.org/",
    client: "Animatrix",
  },
  {
    id: 3,
    slug: "barbershop",
    title: "Barbershop",
    description:
      "A modern barbershop platform designed to streamline appointment booking, manage services, and deliver a seamless customer experience through a clean, intuitive interface.",
    category: "UI/UX Design",
    image: "/barbershop.jpg",
    tech: ["Figma", "React", "JavaScript", "React Router", "GSAP"],
    role: "UI/UX Design & Frontend Development",
    features: [
      "Interactive service presentation",
      "Appointment booking experience",
      "Responsive layouts",
      "Animated interface interactions",
    ],
    screenshots: [],
    github: "github.com/sisco1212/barbershop",
    demo: "https://barbershop-sisco.vercel.app/",
    client: "",
  },
  {
    id: 4,
    slug: "defi-foundry",
    title: "DeFi Foundry",
    description:
      "A website for a Web3 startup featuring an interactive interface, form validation, and API integration.",
    category: "Front-end Development",
    image: "/defi-foundry.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Development",
    features: [
      "Interactive website interface",
      "Form validation",
      "API integration",
      "Responsive layout",
    ],
    screenshots: [],
    github: "github.com/sisco1212/defi-foundry-frontend",
    demo: "https://defifoundry.xyz/",
    client: "Defi Foundry",
  },
  {
    id: 5,
    slug: "agrovest",
    title: "Agrovest",
    description:
      "An agricultural marketplace connecting African farmers with buyers through produce listings, online ordering, and secure payments.",
    category: "Front-end Development",
    image: "/agrovest.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Frontend Development",
    features: [
      "Agricultural produce listings",
      "Farmer and buyer marketplace experience",
      "Online ordering flow",
      "Secure payment experience",
    ],
    screenshots: [],
    github: "github.com/agrovest-app/agrovest-frontend",
    demo: "https://www.agro-vest.com/",
    client: "Agrovest",
  },
  {
    id: 6,
    slug: "the-fall",
    title: "The Fall",
    description:
      "A 2D action-fighting game featuring progressive storytelling, multiple levels, character progression, and unlockable weapons.",
    category: "Game Development",
    image: "/the-fall.png",
    tech: ["Unity", "C#"],
    role: "Game Development",
    features: [
      "2D action-fighting gameplay",
      "Progressive story and multiple levels",
      "Character progression",
      "Unlockable weapons",
    ],
    screenshots: [],
    github: "https://github.com/Sisco1212/Mentorship-project-by-clan-3",
    demo: "https://siscox.itch.io/the-fall",
    client: "",
  },
  {
    id: 7,
    slug: "quizyn",
    title: "Quizyn",
    description:
      "An interactive quiz platform with category-based challenges, API-powered questions, instant scoring, and answer reviews.",
    category: "Side Projects",
    image: "/quizyn.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Development",
    features: [
      "Category-based quiz challenges",
      "Questions retrieved from a public API",
      "Instant score calculation",
      "Review of correct and incorrect answers",
    ],
    screenshots: [],
    github: "https://github.com/Sisco1212/quizyn",
    demo: "https://quizyn.vercel.app/",
    client: "",
  },
  {
    id: 8,
    slug: "weatherly",
    title: "Weatherly",
    description:
      "A weather app featuring live API-powered forecasts, location search, and immersive weather-matched background videos.",
    category: "Side Projects",
    image: "/weatherly.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Development",
    features: [
      "Live weather data from a public API",
      "Location search",
      "Weather-matched background videos",
      "Dynamic weather information",
    ],
    screenshots: [],
    github: "https://github.com/Sisco1212/weatherly",
    demo: "https://weatherly-sisco.vercel.app/",
    client: "",
  },
];