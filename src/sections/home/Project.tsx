"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Rejuvenate",
    description: "Making a barber business more convenient and visible",
    image: "/assets/project1.avif",
    live: "#",
    github: "#",
  },
  {
    title: "Plant Store",
    description:
      "Online plant selling platform with product filtering and cart system",
    image: "/assets/project2.jpg",
    live: "#",
    github: "#",
  },
];

const Project = () => {
  const enterExplore = () => window.dispatchEvent(new Event("cursorExploreOn"));
  const leaveExplore = () =>
    window.dispatchEvent(new Event("cursorExploreOff"));

  return (
    <section id="projects" className="w-full px-4 sm:px-8 md:px-12 py-20">
      <div className="w-full border-b-2 border-[#151515] mb-16"></div>

      <div className="flex flex-col gap-24">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* TEXT */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <motion.h2
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-[clamp(28px,3vw,42px)] font-semibold"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg max-w-xl leading-relaxed"
              >
                {item.description}
              </motion.p>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 mt-2"
              >
                <a
                  href={item.live}
                  className="px-6 py-3 border border-[#151515] rounded-md hover:bg-[#151515] hover:text-white transition"
                >
                  View Live
                </a>

                <a
                  href={item.github}
                  className="px-6 py-3 border border-[#151515] rounded-md hover:bg-[#151515] hover:text-white transition"
                >
                  GitHub
                </a>
              </motion.div>
            </div>

            {/* IMAGE */}
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={enterExplore}
              onMouseLeave={leaveExplore}
              className="relative w-full order-1 lg:order-2"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
