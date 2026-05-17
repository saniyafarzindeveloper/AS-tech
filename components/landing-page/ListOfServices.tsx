"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  ["UI/UX", "Development", "Deployment"],
  ["SEO", "Performance", "Scalability"],
  ["Databases", "Automation", "Security"],
  ["Branding", "AI Integration", "Custom CMS"],
];

export default function ListOfServices() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // alternating transforms
  const x1 = useTransform(scrollYProgress, [0, 1], [-180, 180]);
  const x2 = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const x3 = useTransform(scrollYProgress, [0, 1], [-180, 180]);
  const x4 = useTransform(scrollYProgress, [0, 1], [180, -180]);

  const transforms = [x1, x2, x3, x4];

  return (
    <section
      ref={containerRef}
      className="
        relative
        overflow-hidden
        bg-[#020817]
        py-32
      "
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_60%)]" />

      <div className="relative z-10 space-y-14">
        {services.map((row, index) => (
          <motion.div
            key={index}
            style={{ x: transforms[index] }}
            className="
              flex
              items-center
              gap-8
              whitespace-nowrap
              px-8
              md:px-16
            "
          >
            {row.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-center gap-8"
              >
                {/* service text */}
                <span
                  className={`
                    ${
                      item === "Performance" ||
                      item === "Development" ||
                      item === "AI Integration"
                        ? `
                          bg-gradient-to-r
                          from-[#8B5CF6]
                          via-[#C026D3]
                          to-[#38BDF8]
                          bg-clip-text
                          text-transparent
                          font-black
                        `
                        : `
                          text-white/90
                          font-extralight
                        `
                    }

                    text-4xl
                    tracking-[-0.05em]
                    md:text-6xl
                    lg:text-8xl
                  `}
                >
                  {item}
                </span>

                {/* connector line */}
                {itemIndex !== row.length - 1 && (
                  <div
                    className="
                      h-[2px]
                      w-20
                      bg-gradient-to-r
                      from-[#8B5CF6]
                      to-[#38BDF8]
                      opacity-70
                    "
                  />
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}