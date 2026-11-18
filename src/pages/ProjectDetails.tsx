import { Link, useParams } from "react-router";
import { projects } from "../data/projects";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold">
          Project not found
        </h1>

        <p className="text-white/50 mt-4">
          The project you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 flex items-center gap-2 text-blue-400 hover:text-white transition"
        >
          <FiArrowLeft />
          Back to homepage
        </Link>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(
      (item) =>
        item.slug !== project.slug &&
        item.category === project.category
    )
    .slice(0, 3);

  // Fill the related section if the category has fewer than 3 projects.
  const remainingProjects = projects
    .filter(
      (item) =>
        item.slug !== project.slug &&
        !relatedProjects.some(
          (related) => related.id === item.id
        )
    )
    .slice(0, 3 - relatedProjects.length);

  const displayedRelated = [
    ...relatedProjects,
    ...remainingProjects,
  ];

  const screenshots =
    project.screenshots.length > 0
      ? project.screenshots
      : [project.image];

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-20">

        {/* Back navigation */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-3 text-white/60 hover:text-white transition mb-16"
        >
          <FiArrowLeft />
          Back to projects
        </Link>

        {/* Project introduction */}
        <section>
          <p className="text-blue-400 uppercase tracking-[5px] text-sm mb-6">
            {project.category}
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
                {project.title}
              </h1>

              <p className="text-white/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* External project links */}
            <div className="flex flex-wrap gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-black px-6 py-4 rounded-full font-medium hover:bg-blue-400 transition"
                >
                  Live Preview
                  <FiArrowUpRight />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-white/20 px-6 py-4 rounded-full hover:bg-white/10 transition"
                >
                  <FiGithub />
                  Source Code
                  <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Main project image */}
        <section className="mt-16">
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="w-full max-h-[650px] object-cover"
            />
          </div>
        </section>

        {/* Project overview */}
        <section className="grid md:grid-cols-3 gap-12 py-20 border-b border-white/10">
          <div>
            <p className="text-white/40 uppercase tracking-widest text-xs mb-4">
              Project
            </p>
            <h3 className="text-xl font-medium">
              {project.title}
            </h3>
          </div>

          <div>
            <p className="text-white/40 uppercase tracking-widest text-xs mb-4">
              Category
            </p>
            <h3 className="text-xl font-medium">
              {project.category}
            </h3>
          </div>

          <div>
            <p className="text-white/40 uppercase tracking-widest text-xs mb-4">
              My Role
            </p>
            <h3 className="text-xl font-medium">
              {project.role}
            </h3>
          </div>
        </section>

        {/* Features and technology */}
        <section className="grid md:grid-cols-2 gap-16 py-20 border-b border-white/10">

          {/* Key features */}
          <div>
            <p className="text-blue-400 uppercase tracking-[4px] text-xs mb-5">
              What it offers
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Key Features
            </h2>

            <div className="flex flex-col">
              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex gap-5 py-5 border-b border-white/10"
                >
                  <span className="text-blue-400 text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-white/70">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <p className="text-blue-400 uppercase tracking-[4px] text-xs mb-5">
              Built with
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] text-white/80 text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-20 border-b border-white/10">
          <p className="text-blue-400 uppercase tracking-[4px] text-xs mb-5">
            Visual showcase
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Project Screenshots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot}
                className={`rounded-2xl overflow-hidden border border-white/10 ${
                  screenshots.length === 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Related projects */}
        <section className="py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-blue-400 uppercase tracking-[4px] text-xs mb-5">
                Explore more
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                More Projects
              </h2>
            </div>

            <Link
              to="/#projects"
              className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition"
            >
              All projects
              <FiArrowUpRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {displayedRelated.map((related) => (
              <Link
                key={related.id}
                to={`/projects/${related.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
              >
                <div className="overflow-hidden">
                  <img
                    src={related.image}
                    alt={`${related.title} preview`}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <p className="text-blue-400 text-xs uppercase tracking-wider">
                    {related.category}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <h3 className="text-xl font-semibold">
                      {related.title}
                    </h3>

                    <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </div>

                  <p className="text-white/50 text-sm mt-3 line-clamp-2">
                    {related.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}