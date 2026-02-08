"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "QSource Group Inc.",
    role: "Full Stack Developer",
    period: "2025 – Now",
  },
  {
    company: "Sulopa Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "2024 – 2025",
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 – 2024",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full px-4 sm:px-8 md:px-12 py-16 md:py-24"
    >
      {/* Header */}
      <div className="w-full border-b-2 border-[#151515] pb-4 md:pb-6 mb-10 md:mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold">Experience</h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 md:gap-16">
        {/* LEFT TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 text-[clamp(18px,2.3vw,28px)] leading-relaxed font-medium"
        >
          I’ve worked with companies and clients, both in corporate environments
          and freelance roles, building scalable applications and delivering
          high-quality digital products.
        </motion.p>

        {/* RIGHT TABLE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="lg:col-span-3 flex flex-col"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="
                flex flex-col sm:grid sm:grid-cols-3
                gap-1 sm:gap-0
                py-5 md:py-6
                border-b-2 border-[#a9a7a6]
                font-semibold text-[15px] sm:text-[16px] md:text-[17px]
              "
            >
              <span>{exp.company}</span>
              <span className="sm:text-center">{exp.role}</span>
              <span className="sm:text-right text-gray-600 sm:text-black">
                {exp.period}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
