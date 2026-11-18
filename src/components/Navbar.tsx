import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
"home",
"about",
"services",
"projects",
"contact",
];

export default function Navbar() {
const [active, setActive] = useState("home");
const [open, setOpen] = useState(false);

useEffect(() => {
const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));

return () => observer.disconnect();


}, []);

return ( <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/5"> <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">


    <a
      href="#home"
      className="text-4xl font-bold tracking-tight  font-jost"
    >
      Sito.
    </a>

    <div className="hidden lg:flex items-center gap-10">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          className={`uppercase font-bold font-jost text-md tracking-tight transition ${
            active === link
              ? "nav-active"
              : "text-white/70 hover:text-white"
          }`}
        >
          {link}
        </a>
      ))}
    </div>

    <div className="hidden lg:block">
    <a
        href="#contact"
        className="px-6 py-4 bg-[#2563eb]  hover:scale-105 transition"
      >
        Contact me
      </a>
    </div>

    <button
      onClick={() => setOpen(!open)}
      className="lg:hidden text-3xl"
    >
      {open ? <HiX /> : <HiOutlineMenuAlt3 />}
    </button>
  </div>

  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity:0, y:-30 }}
        animate={{ opacity:1, y:0 }}
        exit={{ opacity:0, y:-30 }}
        className="lg:hidden bg-[#020617] border-t border-white/5"
      >
        <div className="flex flex-col p-6 gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="uppercase tracking-widest"
            >
              {link}
            </a>
          ))}

        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>


);
}
