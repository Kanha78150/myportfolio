"use client";
import { TbAsterisk } from "react-icons/tb";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const Hero = () => {
  const [startAnim, setStartAnim] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const moveRight = useTransform(scrollYProgress, [0, 1], [0, 250], {
    clamp: true,
  });
  const moveLeft = useTransform(scrollYProgress, [0, 1], [0, -250], {
    clamp: true,
  });

  useEffect(() => {
    const handler = () => setStartAnim(true);
    window.addEventListener("appLoaded", handler);
    return () => window.removeEventListener("appLoaded", handler);
  }, []);
  return (
    <section
      id="home"
      ref={ref}
      className="w-full min-h-screen flex flex-col justify-between relative"
    >
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex justify-center items-center w-full mb-4"
      >
        <div className="flex justify-center items-center gap-1.5 text-center">
          <TbAsterisk className="text-3xl md:text-5xl lg:text-8xl font-normal text-[#151515]" />
          <motion.h1
            style={{ x: moveRight }}
            initial={{ opacity: 0, y: 80 }}
            animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-[80px] sm:text-center font-normal text-[#151515] w-full"
          >
            I’m Bholasankar Nanda
          </motion.h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-around items-center w-full"
      >
        <motion.h3
          initial={{ opacity: 0, y: 60 }}
          animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 0.8,
            delay: 1.0,
            ease: "easeOut",
          }}
          className="text-xl md:text-xl lg:text-2xl font-medium text-[#151515] lg:w-[50%] md:w-[50%] w-full leading-9.5 md:leading-8 lg:leading-[38.4px] lg:text-left text-left lg:pl-12 px-6 lg:mt-0 mt-5"
        >
          With over 3 years of experience and a passion for solving problems
          through code, I design and build full-stack solutions that balance
          creativity, functionality, and user-focused design
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="lg:w-[58%] md:w-[50%] w-full lg:text-8xl md:text-6xl text-5xl font-bold text-[#151515] text-center lg:text-center md:text-center"
        >
          A developer
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center items-center w-full flex-1"
      >
        <motion.h1
          style={{ x: moveLeft }}
          className="lg:text-[90px] md:text-[80px] text-[50px] font-normal text-[#151515] lg:text-center text-center"
        >
          lives by code.
        </motion.h1>
      </motion.div>
      <div className="w-full flex justify-between items-center font-medium text-[#151515] lg:px-11 px-3 lg:mt-0 mt-5">
        <h4 className="text-[24px]">Featured work</h4>
        <div>
          <h4 className="text-[18px] flex justify-center items-center">
            Scroll <FaArrowDownLong className="text-[18px]" />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
