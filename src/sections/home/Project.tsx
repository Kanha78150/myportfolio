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
    <section
      id="projects"
      className="w-full px-4 sm:px-8 md:px-12 py-12 overflow-x-hidden"
    >
      <div className="w-full border-b-2 border-[#151515] mb-10"></div>

      <div className="flex flex-col gap-20">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full flex flex-col-reverse lg:flex-row gap-10 items-center"
          >
            {/* LEFT */}
            <div className="lg:w-2/5 w-full flex flex-col gap-6">
              <motion.h2
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-3xl font-semibold"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                {item.description}
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                viewport={{ once: true }}
                className="flex gap-4 mt-4"
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

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              onMouseEnter={enterExplore}
              onMouseLeave={leaveExplore}
              className="lg:w-3/5 w-full relative"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
