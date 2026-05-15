"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Web Apps",
  "SaaS Apps",
  "Online Presence",
  "Personal Brand",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentText = words[wordIndex];
    let currentChar = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(currentText.slice(0, currentChar + 1));
      currentChar++;

      if (currentChar === currentText.length) {
        clearInterval(typingInterval);

        // wait before switching to next word
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1800);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [wordIndex]);

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

        {/* overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* left fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
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
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-5xl
              leading-[0.92]
              tracking-tight
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            {/* thin */}
            <span
              className="
                block
                font-extralight
                text-white/90
              "
            >
              Building
            </span>

            {/* animated typing text */}
            <span
              className="
                flex
                items-center
                gap-2
                font-black
                tracking-[-0.04em]
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  via-[#C026D3]
                  to-[#38BDF8]
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_25px_rgba(168,85,247,0.25)]
                "
              >
                {displayText}
              </span>

              {/* blinking cursor */}
              <span className="animate-pulse text-white">|</span>
            </span>

            {/* thin */}
            <span
              className="
                block
                font-extralight
                tracking-normal
                text-white
              "
            >
              For You
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}