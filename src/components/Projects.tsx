import { useState } from "react";
import { projects } from "../data/projects";
import { FiArrowUpRight } from "react-icons/fi";

const filters = [
"All",
"Web Development",
"UI/UX Design",
"Game Development",
"Side Projects",
];

export default function Projects() {
const [active, setActive] = useState("All");

const filtered =
active === "All"
? projects
: projects.filter(
(project) => project.category === active
);

return ( <section
   id="projects"
   className="section-padding"
 > <p className="uppercase text-blue-400 tracking-[5px] text-sm">
Featured Projects </p>

  <h2 className="text-5xl font-bold mt-4 uppercase">
    My Work
  </h2>

  <div className="flex flex-wrap gap-4 mt-10">
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => setActive(filter)}
        className={`px-6 py-3 rounded-full cursor-pointer  transition ${
          active === filter
            ? "bg-white text-black"
            : "glass hover:bg-white/10"
        }`}
      >
        {filter}
      </button>
    ))}
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

    {filtered.map((project) => (
      <a
        key={project.id}
        href={project.link}
        className="group glass rounded-[30px] overflow-hidden"
      >
        <div className="relative overflow-hidden">

          <img
            src={project.image}
            alt=""
            className="md:h-60 w-full object-fit group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition project-overlay flex flex-col justify-end p-6">

            <div className="flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/20 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>

        <div className="p-6 flex items-center justify-between">

          <div>
            <p className="text-blue-400 text-sm uppercase">
              {project.category}
            </p>

            <h3 className="text-2xl mt-2 font-bold">
              {project.title}
            </h3>
          </div>

          <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-2xl">
            <FiArrowUpRight />
          </div>

        </div>
      </a>
    ))}

  </div>
</section>


);
}
