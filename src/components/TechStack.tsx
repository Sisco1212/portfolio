
import { useState } from "react";
import type { CSSProperties } from "react";

type TechItem = [name: string, color: string];

type TechCategory = {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
};

type TechPillStyles = CSSProperties & {
  "--brand": string;
  "--delay": string;
};

type TechStackProps = {
  categoryId?: string;
};

const techStacks: TechCategory[] = [
  {
    id: "01",
    title: "Frontend Development",
    description: "Building modern, responsive and interactive user interfaces.",
    items: [
      ["HTML5", "#E34F26"],
      ["CSS3", "#1572B6"],
      ["JavaScript", "#F7DF1E"],
      ["TypeScript", "#3178C6"],
      ["React", "#61DAFB"],
      ["Next.js", "#FFFFFF"],
      ["Vue.js", "#4FC08D"],
      ["Nuxt", "#00DC82"],
      ["Angular", "#DD0031"],
      ["Svelte", "#FF3E00"],
      ["Astro", "#BC52EE"],
      ["Tailwind CSS", "#06B6D4"],
      ["Bootstrap", "#7952B3"],
      ["Sass", "#CC6699"],
      ["shadcn/ui", "#FFFFFF"],
      ["Material UI", "#007FFF"],
      ["Chakra UI", "#319795"],
      ["Radix UI", "#FFFFFF"],
      ["Framer Motion", "#0055FF"],
      ["GSAP", "#88CE02"],
      ["Three.js", "#FFFFFF"],
      ["WebGL", "#990000"],
      ["Lenis", "#FFFFFF"],
      ["Barba.js", "#FFFFFF"],
      ["Redux Toolkit", "#764ABC"],
      ["Zustand", "#443E38"],
      ["TanStack Query", "#FF4154"],
      ["React Hook Form", "#EC5990"],
      ["Zod", "#3068B7"],
      ["Storybook", "#FF4785"],
      ["Vite", "#646CFF"],
      ["Webpack", "#8DD6F9"],
      ["Figma", "#F24E1E"],
    ],
  },
  {
    id: "02",
    title: "Backend Development",
    description: "Building reliable server-side systems and application infrastructure.",
    items: [
      ["Node.js", "#5FA04E"],
      ["Express.js", "#FFFFFF"],
      ["NestJS", "#E0234E"],
      ["Fastify", "#000000"],
      ["Hono", "#E36002"],
      ["Bun", "#FBF0DF"],
      ["Deno", "#70FFAF"],
      ["Python", "#3776AB"],
      ["Django", "#092E20"],
      ["Flask", "#FFFFFF"],
      ["PHP", "#777BB4"],
      ["Laravel", "#FF2D20"],
      ["Java", "#ED8B00"],
      ["Spring Boot", "#6DB33F"],
      ["C#", "#68217A"],
      ["ASP.NET Core", "#512BD4"],
      ["Go", "#00ADD8"],
      ["Rust", "#DEA584"],
      ["PostgreSQL", "#4169E1"],
      ["MySQL", "#4479A1"],
      ["MongoDB", "#47A248"],
      ["Redis", "#FF4438"],
      ["SQLite", "#003B57"],
      ["Supabase", "#3FCF8E"],
      ["Firebase", "#FFCA28"],
      ["Prisma", "#2D3748"],
      ["Drizzle ORM", "#C5F74F"],
      ["Mongoose", "#880000"],
      ["GraphQL", "#E10098"],
      ["REST API", "#009688"],
      ["Socket.IO", "#FFFFFF"],
      ["JWT", "#000000"],
      ["Swagger", "#85EA2D"],
      ["Postman", "#FF6C37"],
      ["Insomnia", "#4000BF"],
      ["Upstash", "#00E9A3"],
      ["QStash", "#00E9A3"],
      ["Nodemailer", "#339933"],
    ],
  },
  {
    id: "03",
    title: "Creative Development",
    description: "Creating immersive, animated and visually engaging digital experiences.",
    items: [
      ["GSAP", "#88CE02"],
      ["ScrollTrigger", "#88CE02"],
      ["Three.js", "#FFFFFF"],
      ["WebGL", "#990000"],
      ["GLSL", "#5586A4"],
      ["WebGPU", "#005A9C"],
      ["React Three Fiber", "#FFFFFF"],
      ["Drei", "#FFFFFF"],
      ["Theatre.js", "#FFFFFF"],
      ["Framer Motion", "#0055FF"],
      ["Motion", "#FFFFFF"],
      ["Lenis", "#FFFFFF"],
      ["Barba.js", "#FFFFFF"],
      ["PixiJS", "#E72264"],
      ["p5.js", "#ED225D"],
      ["Paper.js", "#FBB03B"],
      ["Lottie", "#00DDB3"],
      ["Rive", "#FF4D4D"],
      ["Spline", "#FFFFFF"],
      ["Blender", "#E87D0D"],
      ["Figma", "#F24E1E"],
      ["Photoshop", "#31A8FF"],
      ["Illustrator", "#FF9A00"],
      ["After Effects", "#9999FF"],
      ["Premiere Pro", "#9999FF"],
      ["Cinema 4D", "#011A6A"],
    ],
  },
  {
    id: "04",
    title: "Game Development",
    description: "Developing interactive gameplay systems and immersive game environments.",
    items: [
      ["Unity", "#FFFFFF"],
      ["C#", "#68217A"],
      ["Unreal Engine", "#FFFFFF"],
      ["C++", "#00599C"],
      ["Godot Engine", "#478CBF"],
      ["GDScript", "#478CBF"],
      ["GameMaker", "#000000"],
      ["Blender", "#E87D0D"],
      ["Maya", "#37A5CC"],
      ["Substance 3D Painter", "#FF6D00"],
      ["Aseprite", "#7D929E"],
      ["FMOD", "#000000"],
      ["Wwise", "#FF6D00"],
      ["Photon Engine", "#004480"],
      ["PlayFab", "#E33A3A"],
      ["Mirror Networking", "#FFFFFF"],
      ["Netcode for GameObjects", "#FFFFFF"],
      ["Git", "#F05032"],
      ["Git LFS", "#F05032"],
    ],
  },
  {
    id: "05",
    title: "Deployment & Server Configuration",
    description: "Deploying, configuring and maintaining production-ready applications.",
    items: [
      ["Vercel", "#FFFFFF"],
      ["Netlify", "#00C7B7"],
      ["Cloudflare", "#F38020"],
      ["AWS", "#FF9900"],
      ["Google Cloud", "#4285F4"],
      ["Microsoft Azure", "#0078D4"],
      ["DigitalOcean", "#0080FF"],
      ["Koyeb", "#FFFFFF"],
      ["Railway", "#FFFFFF"],
      ["Render", "#46E3B7"],
      ["Docker", "#2496ED"],
      ["Kubernetes", "#326CE5"],
      ["Git", "#F05032"],
      ["GitHub", "#FFFFFF"],
      ["GitLab", "#FC6D26"],
      ["GitHub Actions", "#2088FF"],
      ["Jenkins", "#D24939"],
      ["Nginx", "#009639"],
      ["Apache", "#D22128"],
      ["Linux", "#FCC624"],
      ["Ubuntu", "#E95420"],
      ["Bash", "#4EAA25"],
      ["DNS", "#4285F4"],
      ["Let's Encrypt", "#003A70"],
      ["Sentry", "#362D59"],
      ["Google Analytics", "#E37400"],
      ["Google Search Console", "#458CF5"],
      ["Lighthouse", "#F44B21"],
      ["PostHog", "#F9BD2B"],
      ["Umami", "#FFFFFF"],
      ["UptimeRobot", "#3BD671"],
      ["Cloudinary", "#3448C5"],
      ["Resend", "#FFFFFF"],
    ],
  },
];

function slugify(value:string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function TechPill({ name, color, index } : {name: string, color: string, index: number}) {
  const [imageFailed, setImageFailed] = useState(false);

  const logoPath = `/tech-logos/${slugify(name)}.svg`;

  return (
    <div
      className="tech-pill group"
     style={
  {
    "--brand": color,
    "--delay": `${Math.min(index * 35, 500)}ms`,
    backgroundColor: `${color}12`,
    borderColor: `${color}35`,
  } as TechPillStyles
}
      title={name}
    >
      <span className="tech-pill__logo">
        {!imageFailed ? (
          <img
            src={logoPath}
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="tech-pill__fallback">
            {name.charAt(0)}
          </span>
        )}
      </span>

      <span className="tech-pill__name">{name}</span>
    </div>
  );
}

export default function TechStack({ categoryId }: TechStackProps) {
 
   const categories = categoryId
    ? techStacks.filter((category) => category.id === categoryId)
    : techStacks;
 
    return (
       <section id="tech-stack" className="tech-stack-section">
      <div className="tech-stack-container">
        <div className="tech-stack-categories">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Category({ category }: { category: TechCategory }) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded
    ? category.items
    : category.items.slice(0, 12);

  return (
    <div className="tech-category">
      <div className="tech-category-heading">
        <div>
          <span className="tech-category-number">
            / {category.id}
          </span>

          <h3>{category.title}</h3>

          <p>{category.description}</p>
        </div>

        <span className="tech-category-count">
          {String(category.items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="tech-pills">
        {visibleItems.map(([name, color] : [string, string], index: number) => (
          <TechPill
            key={name}
            name={name}
            color={color}
            index={index}
          />
        ))}
      </div>

      {category.items.length > 12 && (
        <button
          className="tech-show-more"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `Show all ${category.items.length} technologies`}
          <span className={expanded ? "rotate" : ""}>↓</span>
        </button>
      )}
    </div>
  );
}
