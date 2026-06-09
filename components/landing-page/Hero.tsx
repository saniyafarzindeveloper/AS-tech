"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020817]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* purple glow */}
        <div
          className="
            absolute
            left-[65%]
            top-1/2
            h-[700px]
            w-[700px]
            -translate-y-1/2
            rounded-full
            bg-[#8B5CF6]/20
            blur-[180px]
          "
        />

        {/* pink glow */}
        <div
          className="
            absolute
            right-20
            top-[40%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#EC4899]/15
            blur-[140px]
          "
        />

        {/* blue glow */}
        <div
          className="
            absolute
            right-[10%]
            top-[30%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#38BDF8]/10
            blur-[120px]
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
          items-center
          px-6
          pt-28
          md:px-12
          lg:px-20
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* LEFT CONTENT */}
          <div>
           

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                mt-8
                text-5xl
                font-extralight
                leading-[0.9]
                tracking-[-0.06em]
                text-white

                sm:text-6xl
                md:text-7xl
                lg:text-[6.5rem]
              "
            >
              Building

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  via-[#C026D3]
                  to-[#38BDF8]
                  bg-clip-text
                  font-black
                  text-transparent
                "
              >
                Future Ready
              </span>

              <span className="block">
                Experiences
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="
                mt-8
                max-w-md
                text-lg
                leading-relaxed
                text-white/60
                md:text-xl
              "
            >
              We craft modern websites, SaaS platforms,
              digital products and brand experiences that help
              ambitious businesses establish, scale and grow
              online.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
                mt-10
                flex
                flex-wrap
                gap-4
                mb-10
              "
            >
              <Link
                href="/contact"
                className="
                  group
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
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >
                Start A Project

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
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
                  transition-all
                  duration-300
                  hover:bg-white/[0.06]
                "
              >
                View Work
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              relative
              hidden
              lg:flex
              items-center
              justify-center
              overflow-visible
            "
          >
            {/* floating animation */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/bg-removed.png"
                alt="A S Tech Studio"
                width={1400}
                height={1400}
                priority
                className="
                  relative
                  z-10

                  w-[900px]
                  max-w-none

                  object-contain

                  translate-x-24

                  drop-shadow-[0_0_120px_rgba(168,85,247,0.4)]
                "
              />
            </motion.div>

            {/* floating glass card */}
            <div
              className="
                absolute
                bottom-20
                left-0
                z-20

                rounded-[28px]
                border
                border-white/10

                bg-white/[0.04]

                px-6
                py-5

                backdrop-blur-2xl
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                ALL SOLUTIONS
              </p>

              <h3
                className="
                  mt-3
                  text-xl
                  font-semibold
                  text-white
                "
              >
                Web • SaaS • Branding
              </h3>

              <p className="mt-2 text-sm text-white/50">
                Design • Development • Growth
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}