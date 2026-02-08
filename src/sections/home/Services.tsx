"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Building modern responsive interfaces using React, Next.js, Tailwind CSS, and Framer Motion with clean UX-focused design.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Developing secure and scalable backend systems using Node.js, Express, REST APIs, authentication, and production-ready architecture.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Designing optimized database structures using MongoDB and MySQL with efficient querying, indexing, and scalable data modeling.",
  },
  {
    icon: Code,
    title: "Full-Stack Solutions",
    desc: "Delivering complete end-to-end web applications including dashboards, admin systems, task management platforms, and real-time features.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-4 sm:px-8 md:px-12 py-16 md:py-24"
    >
      {/* Header */}
      <div className="w-full border-b-2 border-[#151515] pb-4 md:pb-6 mb-10 md:mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold">Services</h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 md:gap-16">
        {/* LEFT TEXT */}
        <motion.h5
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            lg:col-span-2
            text-[clamp(18px,2.4vw,28px)]
            leading-relaxed
          "
        >
          I am dedicated to expanding my knowledge and expertise in my field.
          Throughout my career, I’ve acquired various skills which I continue to
          refine to deliver impactful digital solutions.
        </motion.h5>

        {/* SERVICES GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18 } },
          }}
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="
                  p-6 md:p-8
                  border border-[#151515]/20
                  rounded-2xl
                  bg-white/40 backdrop-blur-sm
                  transition
                "
              >
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-5 md:mb-6"
                >
                  <Icon size={34} className="md:size-[38px]" />
                </motion.div>

                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                  {service.title}
                </h3>

                <p className="text-[14px] md:text-[15px] leading-[1.6] text-gray-700">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
