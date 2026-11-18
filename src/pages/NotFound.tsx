import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center px-6 text-center">
      <p className="text-blue-400 tracking-[5px] uppercase text-sm">
        404 Error
      </p>

      <h1 className="text-6xl md:text-8xl font-bold mt-6">
        Lost?
      </h1>

      <p className="text-white/50 mt-5">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-10 flex items-center gap-3 bg-white text-black px-6 py-4 rounded-full hover:bg-blue-400 transition"
      >
        <FiArrowLeft />
        Back to homepage
      </Link>
    </main>
  );
}