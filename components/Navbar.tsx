"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      {/* background blur */}
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative mx-auto flex h-[92px] w-full items-center justify-between px-6 md:px-12">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* logo image */}
          <div className="relative h-20 w-20 overflow-hidden rounded-xl">
            <Image
              src="/bg.png" // replace with your logo path
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* company text */}
          <div className="flex flex-col leading-none">
            <span
              className="
    text-[25px]
    tracking-tight
    bg-linear-to-r
    from-[#bf4078]
    via-[#A855F7]
    to-[#60A5FA]
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]
  "
            >
              A S TECH
            </span>

            <span className="mt-1 text-[14px] font-medium uppercase tracking-[0.35em] text-white">
              Studio
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.03,
              borderColor: "rgba(139,92,246,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 backdrop-blur-md"
          >
            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-[#06B6D4]/10 to-[#EC4899]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative text-sm font-bold uppercase tracking-[0.25em] text-white">
              Say Hello
            </span>
          </motion.button>

          {/* menu button */}
          <motion.button
            whileHover={{
              rotate: 90,
              borderColor: "rgba(139,92,246,0.5)",
            }}
            transition={{ duration: 0.25 }}
            className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white backdrop-blur-md"
          >
            <Menu size={26} strokeWidth={1.5} />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
