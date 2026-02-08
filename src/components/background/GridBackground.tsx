"use client";

import { useEffect, useState } from "react";

const GridBackground = () => {
  const [columns, setColumns] = useState(12);
  const [mounted] = useState(() => typeof window !== "undefined");

  const getColumns = () => {
    if (window.innerWidth < 640) return 4;
    if (window.innerWidth < 768) return 6;
    if (window.innerWidth < 1024) return 8;
    if (window.innerWidth < 1280) return 10;
    return 12;
  };

  useEffect(() => {
    const updateColumns = () => {
      setColumns(getColumns());
    };

    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateColumns();
    setVH();

    window.addEventListener("resize", updateColumns);
    window.addEventListener("resize", setVH);

    return () => {
      window.removeEventListener("resize", updateColumns);
      window.removeEventListener("resize", setVH);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] bg-[#F1EFED]">
      <div className="relative h-full max-w-400 mx-auto">
        {/* vertical grid */}
        <div className="absolute inset-0 flex justify-between px-6 md:px-8 lg:px-12">
          {[...Array(columns)].map((_, i) => (
            <div key={i} className="h-full w-px bg-[#E6E4E2]" />
          ))}
        </div>

        {/* horizontal guides */}
        <div className="absolute top-16 left-6 right-6 h-px bg-[#E6E4E2] opacity-40" />
        <div className="absolute bottom-16 left-6 right-6 h-px bg-[#E6E4E2] opacity-40" />
      </div>
    </div>
  );
};

export default GridBackground;
