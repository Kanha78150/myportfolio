"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 sm:px-8 md:px-12 py-24">
      {/* Header */}
      <div className="border-b-2 border-[#151515] pb-6 mb-16">
        <h2 className="text-3xl font-semibold">Contact</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT TEXT */}
        <motion.h5
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[22px] md:text-[28px] leading-[1.6]"
        >
          I’m looking forward to hearing from you. If you prefer not to fill out
          forms, feel free to email me directly and let’s talk about your next
          big idea.
          <p className="mt-6 font-semibold text-lg">bholasankar@email.com</p>
        </motion.h5>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <input
            placeholder="Your Name"
            className="border-b border-gray-400 py-4 outline-none bg-transparent"
          />

          <input
            placeholder="Email"
            className="border-b border-gray-400 py-4 outline-none bg-transparent"
          />

          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            className="border-b border-gray-400 py-4 outline-none bg-transparent resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-black text-white px-8 py-4 w-fit mt-4"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
