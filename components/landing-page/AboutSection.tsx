"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const features = [
  {
    title: "All-in-One Solutions",
    description:
      "From branding to SaaS platforms, we build digital systems tailored to your business goals.",
    icon: FiLayers,
  },
  {
    title: "Modern Development",
    description:
      "Fast, scalable & future-ready web applications built with modern technologies.",
    icon: FiCode,
  },
  {
    title: "Built for Growth",
    description:
      "Every product is designed to scale with your audience, business & long-term vision.",
    icon: FiTrendingUp,
  },
  {
    title: "Performance Focused",
    description:
      "Optimized experiences that combine speed, aesthetics & conversion-driven design.",
    icon: FiZap,
  },
];

export default function AboutSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#020817]
        py-32
      "
    >
      {/* glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_45%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          md:px-12
        "
      >
        <div
          className="
            grid
            gap-24
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col">
            {/* heading */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="
                  max-w-xl
                  text-5xl
                  font-extralight
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-white
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Digital solutions
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#C026D3]
                    to-[#38BDF8]
                    bg-clip-text
                    font-black
                    text-transparent
                  "
                >
                  built for brands
                </span>

                <br />
                that want to grow.
              </motion.h2>
            </div>

            {/* content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 max-w-xl"
            >
              <p
                className="
                  text-lg
                  leading-relaxed
                  text-white/65
                  md:text-xl
                "
              >
                <span
                  className="
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#C026D3]
                    to-[#38BDF8]
                    bg-clip-text
                    font-bold
                    text-transparent
                  "
                >
                  A S
                </span>{" "}
                stands for{" "}
                <span className="font-semibold text-white">
                  All Solutions
                </span>
                — a creative technology studio focused on building modern web
                experiences, SaaS products, branding systems & scalable digital
                ecosystems.
              </p>

              
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    border-b
                    border-white/10
                    pb-10
                  "
                >
                  <div className="flex gap-6">
                    {/* icon */}
                    <div
                      className="
                        flex
                        h-20
                        w-20
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        text-[#A855F7]
                        backdrop-blur-md
                      "
                    >
                      <Icon size={30} />
                    </div>

                    {/* text */}
                    <div>
                      <h3
                        className="
                          text-3xl
                          font-light
                          tracking-[-0.04em]
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#C084FC]
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-xl
                          text-lg
                          leading-relaxed
                          text-white/55
                        "
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}