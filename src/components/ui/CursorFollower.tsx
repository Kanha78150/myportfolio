"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

  const [hover, setHover] = useState(false);
  const [explore, setExplore] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, p, h1, h2, h3, span, input, textarea, label")
      ) {
        setHover(true);
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, p, h1, h2, h3, span")) {
        setHover(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("pointerover", handlePointerOver);
    document.body.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("pointerover", handlePointerOver);
      document.body.removeEventListener("pointerout", handlePointerOut);
    };
  }, [x, y]);

  useEffect(() => {
    const on = () => setExplore(true);
    const off = () => setExplore(false);

    window.addEventListener("cursorExploreOn", on);
    window.addEventListener("cursorExploreOff", off);

    return () => {
      window.removeEventListener("cursorExploreOn", on);
      window.removeEventListener("cursorExploreOff", off);
    };
  }, []);

  return (
    <motion.div
      style={{ translateX: smoothX, translateY: smoothY }}
      animate={{
        scale: explore ? 1 : hover ? 2.6 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`pointer-events-none fixed top-0 left-0 z-9999
    ${explore ? "w-32 h-32 bg-black text-white" : "w-6 h-6"}
    rounded-full flex items-center justify-center
    ${!explore && hover ? "mix-blend-difference bg-white" : "bg-black"}
  `}
    >
      {explore && <span className="text-sm font-medium">Explore</span>}
    </motion.div>
  );
}
