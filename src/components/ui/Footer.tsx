"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden pt-28 md:pt-40 pb-16 md:pb-20 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-black" />

      {/* MARQUEE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 py-6">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="
              flex whitespace-nowrap font-semibold
              text-[40px]
              sm:text-[60px]
              md:text-[90px]
              lg:text-[120px]
            "
          >
            <span className="mx-12 md:mx-20">Let’s work together</span>
            <span className="mx-12 md:mx-20">Let’s work together</span>
            <span className="mx-12 md:mx-20">Let’s work together</span>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-20">
        {/* LEFT LINKS */}
        <div className="flex flex-col gap-5 text-base md:text-lg">
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
        <div className="flex md:justify-end">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-md md:text-right">
            I’m currently available for new work, let me know if you need a
            digital developer. I’d love to talk about the next big thing!
          </p>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT */}
        <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
          bholasankar@email.com
        </p>

        {/* CENTER */}
        <p className="text-gray-500 text-sm md:text-base text-center order-last md:order-none">
          © Crafted by Bholasankar
        </p>

        {/* RIGHT */}
        <button
          onClick={scrollTop}
          className="bg-white text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full shadow-lg hover:scale-105 transition text-sm md:text-base"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
