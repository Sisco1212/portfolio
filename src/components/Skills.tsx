import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const skillGroups = [
{
title: "Frontend",
items: [
"HTML",
"CSS",
"JavaScript",
"TypeScript",
"React",
"Next.js",
"Tailwind",
"Bootstrap",
],
},

{
title: "Animation & 3D",
items: [
"GSAP",
"Lenis",
"Barba.js",
"Three.js",
"WebGL",
],
},

{
title: "Game Development",
items: [
"Unity Engine",
"C#",
"Shader Graph",
"Addressables",
"Cinemachine",
],
},

{
title: "Design",
items: [
"Figma",
"Adobe Photoshop",
"Adobe Illustrator",
"Canva",
],
},
];

export default function Skills() {
const [openIndex, setOpenIndex] = useState(0);

return ( <section
   id="skills"
   className="section-padding"
 > <div className="max-w-6xl mx-auto">


    <p className="uppercase text-blue-400 tracking-[5px] text-sm mb-6">
      MY Skills
    </p>
    <h1 className="uppercase text-5xl font-bold"> TECHNOLOGIES I WORK WITH</h1>

    {skillGroups.map((group, index) => {
      const isOpen = openIndex === index;

      return (
        <div
          key={group.title}
          className="border-b border-white/10"
        >
          <button
            onClick={() =>
              setOpenIndex(
                isOpen ? -1 : index
              )
            }
            className="
              w-full
              py-10
              flex
              items-center
              justify-between
              text-left
            "
          >
            <h2
              className="
                text-4xl
                
                font-light
                tracking-tight
              "
            >
              {group.title}
            </h2>

            <div
              className="
                text-4xl
                text-white/80
                transition
              "
            >
              {isOpen ? (
                <FiMinus />
              ) : (
                <FiPlus />
              )}
            </div>
          </button>

          <div
            className={`
              overflow-hidden
              transition-all
              duration-500
              ${
                isOpen
                  ? "max-h-150 pb-10"
                  : "max-h-0"
              }
            `}
          >
            <div
              className="
                flex
                flex-col
                gap-6
                text-white/55
                text-xl
                
              "
            >
              {group.items.map((item) => (
                <span
                  key={item}
                  className="
                    hover:text-blue-400
                    transition-colors
                    cursor-default
                    w-fit
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>


);
}
