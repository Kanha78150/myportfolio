"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setLocation,
  setLocationError,
  setLocationLoading,
} from "@/lib/features/locationSlice";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [startAnim, setStartAnim] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const locationName = useAppSelector((state) => state.location.name);

  useEffect(() => {
    const handler = () => setStartAnim(true);
    window.addEventListener("appLoaded", handler);
    return () => window.removeEventListener("appLoaded", handler);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // location fetch (same as yours)
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
          } catch {
            dispatch(setLocationError("Unable to get location"));
          }
        },
        () => dispatch(setLocationError("Permission denied")),
      );
    }
  }, [dispatch]);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 py-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={startAnim ? { opacity: 1, y: 0 } : {}}
        className="flex justify-between items-center"
      >
        <a href="#home" className="font-bold text-lg">
          Bholasankar
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline">
              {l.name}
            </a>
          ))}
        </nav>

        {/* Right info (desktop only) */}
        <div className="hidden md:flex gap-2">
          <span>{locationName}</span>
          <span>*</span>
          <span>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden flex flex-col gap-6 mt-6 border-t pt-6"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              {l.name}
            </a>
          ))}
        </motion.div>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={startAnim ? { scaleX: 1 } : {}}
        className="w-full border-b-2 mt-4 origin-left"
      />
    </section>
  );
};

export default Navbar;
