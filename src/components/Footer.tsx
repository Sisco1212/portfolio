export default function Footer() {
return ( <footer className="border-t border-white/5 py-10 px-[7%] flex flex-col md:flex-row items-center justify-between gap-5">

  <h2 className="text-2xl font-bold">
    Sito.
  </h2>

  <p className="text-white/50 text-center">
    © 2026 Sito Patrick. All Rights Reserved.
  </p>

  <a
    href="#home"
    className="w-14 h-14 rounded-full glass flex items-center justify-center hover:scale-110 transition"
  >
    ↑
  </a>

</footer>

);
}
