"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.dispatchEvent(new Event("appLoaded"));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900 px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-white
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold tracking-wide text-center
        "
      >
        Bholasankar Nanda
      </motion.h1>
    </motion.div>
  );
}
