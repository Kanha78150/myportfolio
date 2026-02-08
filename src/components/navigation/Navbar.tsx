"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setLocation,
  setLocationError,
  setLocationLoading,
} from "@/lib/features/locationSlice";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [startAnim, setStartAnim] = useState(false);
  const dispatch = useAppDispatch();
  const locationName = useAppSelector((state) => state.location.name);

  useEffect(() => {
    const handler = () => setStartAnim(true);
    window.addEventListener("appLoaded", handler);
    return () => window.removeEventListener("appLoaded", handler);
  }, []);

  // nav timing
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // nav location fetch
  useEffect(() => {
    if (navigator.geolocation) {
      dispatch(setLocationLoading(true));
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            );
            const data = await res.json();
            const location =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.state ||
              "Unknown location";

            dispatch(setLocation(location));
            localStorage.setItem("User Location", location);
          } catch (error) {
            dispatch(setLocationError("Unable to get location"));
          }
        },
        () => {
          dispatch(setLocationError("Permission denied"));
        },
      );
    } else {
      dispatch(setLocationError("Geolocation not supported"));
    }
  }, [dispatch]);

  // Animation variants
  const navContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:pb-0 md:pb-0 py-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex justify-between items-center"
      >
        {/* Left Logo */}
        <a href="#home">
          <p className="text-[18px] sm:text-[20px] text-[#151515] font-bold">
            Bholasankar
          </p>
        </a>

        <motion.nav
          variants={navContainer}
          initial="hidden"
          animate={startAnim ? "show" : "hidden"}
          className="flex justify-center items-center gap-4 md:gap-8"
        >
          <motion.div variants={navItem}>
            <a
              href="#about"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:h-0.5 after:w-full after:bg-black after:origin-right after:scale-x-0 
            after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            >
              <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
                About
              </p>
            </a>
          </motion.div>
          <motion.div variants={navItem}>
            <a
              href="#projects"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:h-0.5 after:w-full after:bg-black after:origin-right after:scale-x-0 
            after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            >
              <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
                Projects
              </p>
            </a>
          </motion.div>
          <motion.div variants={navItem}>
            <a
              href="#experience"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:h-0.5 after:w-full after:bg-black after:origin-right after:scale-x-0 
            after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            >
              <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
                Experience
              </p>
            </a>
          </motion.div>

          <motion.div variants={navItem}>
            <a
              href="#services"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:h-0.5 after:w-full after:bg-black after:origin-right after:scale-x-0 
            after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            >
              <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
                Services
              </p>
            </a>
          </motion.div>

          <motion.div variants={navItem}>
            <a
              href="#contact"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:h-0.5 after:w-full after:bg-black after:origin-right after:scale-x-0 
            after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            >
              <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
                Contact
              </p>
            </a>
          </motion.div>
        </motion.nav>

        <div className="hidden md:flex justify-center items-center gap-2">
          <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
            {locationName}
          </p>
          <span className="text-[16px] md:text-[18px] text-[#151515] font-medium">
            *
          </span>
          <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </motion.div>

      {/* Underline animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={startAnim ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full border-b-2 border-[#151515] mt-4 origin-left"
      />
    </section>
  );
};

export default Navbar;
