"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black/25">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/right-position-bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/35" />

        {/* extra left fade for text visibility */}
        <div className="absolute inset-0 bbg-linear-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          px-6
          md:px-12
          lg:px-20
        "
      >
        <div className="max-w-2xl">
          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-5xl
              font-black
              leading-[0.95]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Building
            <br />
            <span
              className="
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#C026D3]
                to-[#38BDF8]
                bg-clip-text
                text-transparent
              "
            >
              Future Ready
            </span>
            <br />
            Digital Experiences
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
