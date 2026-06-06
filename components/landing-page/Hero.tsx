"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Web Apps",
  "SaaS Platforms",
  "Branding",
  "SEO",
  "Marketing",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* background */}
      <div className="absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#8B5CF6]/20
            blur-[180px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-6
          pt-32
          text-center
          md:px-12
        "
      >
        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            max-w-6xl
            text-5xl
            font-extralight
            leading-[0.9]
            tracking-[-0.06em]
            text-white

            sm:text-6xl
            md:text-7xl
            lg:text-[7rem]
          "
        >
          Building

          <span
            className="
              block
              bg-linear-to-r
              from-[#8B5CF6]
              via-[#C026D3]
              to-[#38BDF8]
              bg-clip-text
              font-black
              text-transparent
            "
          >
            Digital Solutions
          </span>

          <span className="block">
            That Actually Scale
          </span>
        </motion.h1>

        {/* description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-relaxed
            text-white/60
            md:text-xl
          "
        >
          A S Tech Studio helps businesses establish a powerful
          digital presence through modern websites, SaaS products,
          branding and scalable digital systems.
        </motion.p>

        {/* services */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {services.map((service) => (
            <div
              key={service}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-sm
                text-white/60
                backdrop-blur-xl
              "
            >
              {service}
            </div>
          ))}
        </div>

        {/* buttons */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <Link
            href="/contact"
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-[#8B5CF6]
              via-[#C026D3]
              to-[#38BDF8]
              px-8
              py-4
              font-medium
              text-white
            "
          >
            Start a Project
            <ArrowUpRight size={18} />
          </Link>

          <Link
            href="/projects"
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-8
              py-4
              text-white
              backdrop-blur-xl
            "
          >
            View Work
          </Link>
        </div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative mt-12"
        >
          <Image
            src="/right-position-bg.png"
            alt="A S Tech Studio"
            width={900}
            height={900}
            priority
            className="
              object-contain
              drop-shadow-[0_0_80px_rgba(168,85,247,0.25)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}