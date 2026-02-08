"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-8 md:px-12 py-16 md:py-24"
    >
      {/* Header */}
      <div className="border-b-2 border-[#151515] pb-4 md:pb-6 mb-10 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[clamp(18px,2.4vw,28px)] leading-relaxed"
        >
          <p>
            I’m looking forward to hearing from you. If you prefer not to fill
            out forms, feel free to email me directly and let’s talk about your
            next big idea.
          </p>

          <p className="mt-6 font-semibold text-base md:text-lg">
            bholasankar@email.com
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 md:gap-6 w-full"
        >
          <input
            placeholder="Your Name"
            className="border-b border-gray-400 py-3 md:py-4 outline-none bg-transparent text-sm md:text-base"
          />

          <input
            placeholder="Email"
            className="border-b border-gray-400 py-3 md:py-4 outline-none bg-transparent text-sm md:text-base"
          />

          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            className="border-b border-gray-400 py-3 md:py-4 outline-none bg-transparent resize-none text-sm md:text-base"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="
              bg-black text-white
              px-6 md:px-8
              py-3 md:py-4
              w-full sm:w-fit
              mt-4
              text-sm md:text-base
            "
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
