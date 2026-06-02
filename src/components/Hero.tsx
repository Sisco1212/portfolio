import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const roles = [
"Front-end Developer",
"Game Developer",
"UI/UX Designer",
];

export default function Hero() {
const [text, setText] = useState("");
const [roleIndex, setRoleIndex] = useState(0);
const [deleting, setDeleting] = useState(false);

useEffect(() => {
const current = roles[roleIndex];


const timeout = setTimeout(() => {
  if (!deleting) {
    setText(current.slice(0, text.length + 1));

    if (text === current) {
      setTimeout(() => setDeleting(true), 1200);
    }
  } else {
    setText(current.slice(0, text.length - 1));

    if (text === "") {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }
}, deleting ? 40 : 80);

return () => clearTimeout(timeout);


}, [text, deleting, roleIndex]);

return ( <section
   id="home"
   className="min-h-screen section-padding flex flex-col lg:flex-row items-center justify-between gap-20"
 > <div className="flex-1">

    <motion.h1
      initial={{ opacity:0, y:40 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:.7 }}
      className="text-5xl md:text-7xl tracking-tight font-semibold"
    >
      Hi, I'm <span className="font-black text-blue-400">Sito</span>
    </motion.h1>

    <h2 className="mt-6 text-2xl md:text-3xl font-light">
      And I'm a{" "}
     <TypeAnimation
  sequence={[
    "Front-end Developer",
    1500,
    "Game Developer",
    1500,
    "UI/UX Designer",
    1500,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-blue-400 font-semibold"
/>
    </h2>

    <p className="mt-8 max-w-lg text-white/70 text-md">
      I build modern, cinematic and highly interactive
      digital experiences with smooth animations,
      immersive interfaces and premium frontend
      architecture.
    </p>

    <div className="mt-10 flex flex-wrap gap-5">
      <a
        href="#projects"
        className="px-8 py-4 bg-[#2563eb]  hover:scale-105 transition"
      >
        View My Work
      </a>

      <a
        href="#contact"
        className="px-8 py-4 border border-blue-500 hover:bg-blue-500 transition"
      >
        Contact Me
      </a>
    </div>

    <div className="flex items-center gap-5 mt-5">
      <a
        href="https://github.com/Sisco1212"
        className="w-10 h-10 rounded-full glass flex items-center justify-center text-2xl hover:scale-110 transition"
      >
        <FaGithub />
      </a>

      <a
        href="#"
        className="w-10 h-10 rounded-full glass flex items-center justify-center text-2xl hover:scale-110 transition"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>

  <motion.div
    initial={{ opacity:0, scale:.8 }}
    animate={{ opacity:1, scale:1 }}
    transition={{ duration:.8 }}
    className="flex-1 flex justify-center"
  >
    <div className="relative">

      <div className="absolute inset-0 blue-gradient blur-[120px] opacity-40"></div>

      <div className="relative w-[320px] md:w-105 h-105 md:h-125 rounded-[40px] border border-blue-400/30 glass glow overflow-hidden">

        <img
          src="/edit2.jpg"
          alt=""
          className="w-full h-full object-cover center"
        />

        <div className="absolute inset-0 border-2 border-blue-400/20 rounded-[40px] scale-95"></div>
      </div>

      <div className="absolute -left-5 md:-left-20 top-3/5 bg-blue-950 px-4 py-3 rounded-3xl">
        <h3 className="text-2xl font-bold text-blue-400">
          5+
        </h3>
        <p className="text-sm text-white/70">
          Years Experience
        </p>
      </div>

      <div className="absolute -right-5 md:-right-10 top-20 bg-blue-950 px-4 py-4 rounded-3xl flex items-center justify-center text-2xl font-bold text-blue-400">
        {"</>"}
      </div>
    </div>
  </motion.div>
</section>


);
}
