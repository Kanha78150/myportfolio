"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);

  return (
    <section
      id="about"
      ref={ref}
      className="w-full px-4 sm:px-8 md:px-12 py-16 md:py-24"
    >
      {/* Header */}
      <div className="w-full border-b-2 border-[#151515] pb-4 md:pb-6 mb-10 md:mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold">About</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* TEXT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="text-[clamp(20px,2.6vw,36px)] leading-[1.45] font-medium text-[#151515]"
        >
          {[
            "Hi, I’m Bholasankar Nanda, a full-stack developer passionate about building scalable and user-centric digital products.",
            "With a strong background in modern web technologies, I focus on creating seamless experiences that merge performance, functionality, and elegant design.",
            "I enjoy solving complex engineering challenges and collaborating on impactful products that deliver real-world value.",
          ].map((line, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mb-5 md:mb-6"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <div className="overflow-hidden rounded-2xl w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px]">
            <Image
              src="/assets/profilephoto.png"
              alt="profile"
              width={520}
              height={720}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
