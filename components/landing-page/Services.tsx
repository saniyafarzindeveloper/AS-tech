"use client";

import { motion } from "framer-motion";
import {
  FiLayout,
  FiCode,
  FiZap,
  FiTrendingUp,
} from "react-icons/fi";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Immersive interfaces crafted with modern aesthetics, clarity & user psychology.",
    icon: FiLayout,
  },
  {
    title: "Web Development",
    description:
      "High-performance scalable websites built with modern frontend architecture.",
    icon: FiCode,
  },
  {
    title: "Automation",
    description:
      "Streamline workflows, improve efficiency & automate repetitive business processes.",
    icon: FiZap,
  },
  {
    title: "SEO & Growth",
    description:
      "Performance-focused optimization strategies to increase visibility & conversions.",
    icon: FiTrendingUp,
  },
];

export default function Services() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#020817]
        py-32
      "
    >
      {/* glow bg */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_55%)]
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
        {/* TOP */}
        <div className="mb-20 max-w-3xl">
          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.35em]
              text-[#A855F7]
            "
          >
            Services
          </p>

          <h2
            className="
              text-5xl
              font-extralight
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-7xl
            "
          >
            Designing
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
              {" "}
              futuristic{" "}
            </span>
            digital experiences
          </h2>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                "
              >
                {/* hover glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_45%)]
                  "
                />

                {/* top row */}
                <div className="relative z-10 flex items-start justify-between">
                  {/* icon */}
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-[#A855F7]
                      backdrop-blur-md
                    "
                  >
                    <Icon size={28} />
                  </div>

                  {/* number */}
                  <span
                    className="
                      text-sm
                      text-white/25
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* content */}
                <div className="relative z-10 mt-14">
                  <h3
                    className="
                      text-3xl
                      font-light
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-md
                      text-base
                      leading-relaxed
                      text-white/55
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* bottom line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-[#8B5CF6]
                    via-[#C026D3]
                    to-[#38BDF8]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}