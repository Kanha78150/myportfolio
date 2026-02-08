"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden pt-40 pb-20 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#050505] to-black" />

      {/* MARQUEE */}
      <div className="absolute top-0 left-0 w-full h-42.5 overflow-hidden border-b border-white/10">
        <div className="max-w-350 mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="flex whitespace-nowrap text-[120px] font-semibold"
          >
            <span className="mx-20">Let’s work together</span>
            <span className="mx-20">Let’s work together</span>
            <span className="mx-20">Let’s work together</span>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-350 mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-2 gap-20 mt-20">
        {/* LEFT LINKS */}
        <div className="flex flex-col gap-6 text-lg">
          <a className="flex items-center gap-2 hover:opacity-70 transition">
            Instagram <ArrowUpRight size={18} />
          </a>
          <a className="flex items-center gap-2 hover:opacity-70 transition">
            Twitter <ArrowUpRight size={18} />
          </a>
          <a className="flex items-center gap-2 hover:opacity-70 transition">
            LinkedIn <ArrowUpRight size={18} />
          </a>
          <a className="flex items-center gap-2 hover:opacity-70 transition">
            Dribbble <ArrowUpRight size={18} />
          </a>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex justify-end">
          <p className="text-xl md:text-2xl leading-relaxed max-w-md text-right">
            I’m currently available for new work, let me know if you need a
            digital developer. I’d love to talk about the next big thing!
          </p>
        </div>
      </div>

      {/* BOTTOM ROW (perfect alignment row) */}
      <div className="relative max-w-350 mx-auto px-6 md:px-8 lg:px-12 mt-24 flex items-center justify-between">
        {/* LEFT */}
        <p className="text-gray-400">bholasankar@email.com</p>

        {/* CENTER */}
        <p className="text-gray-500 absolute left-1/2 -translate-x-1/2">
          © Crafted by Bholasankar
        </p>

        {/* RIGHT */}
        <button
          onClick={scrollTop}
          className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
