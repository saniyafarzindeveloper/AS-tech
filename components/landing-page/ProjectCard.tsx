"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];

  liveUrl: string;
  caseStudyUrl: string;

  services: string[];
  techStack: string[];
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage(
        (prev) => (prev + 1) % project.images.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group relative"
    >
      {/* floating glows */}
      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-20
          top-20

          h-72
          w-72

          rounded-full

          bg-[#8B5CF6]/15

          blur-[150px]
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-20
          bottom-0

          h-72
          w-72

          rounded-full

          bg-[#38BDF8]/10

          blur-[150px]
        "
      />

      <div
        className="
          rounded-[48px]
          bg-linear-to-br
          from-[#8B5CF6]/30
          via-white/10
          to-[#38BDF8]/20
          p-[1px]
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[48px]
            bg-[#020817]
          "
        >
          {/* number */}
          <div className="px-8 pt-8 md:px-12">
            <p
              className="
                text-[6rem]
                md:text-[10rem]

                font-black
                leading-none

                text-white/20
              "
            >
              {String(index + 1).padStart(2, "0")}
            </p>
          </div>

          <div className="px-8 pb-8 md:px-12 md:pb-12">

            {/* title */}
            <h3
              className="
                mt-5
                max-w-4xl
                text-5xl
                md:text-7xl
                font-extralight
                leading-[0.9]
                tracking-[-0.08em]
                text-white
              "
            >
              {project.title}
            </h3>

            {/* description */}
            <p
              className="
                mt-8

                max-w-2xl

                text-lg
                leading-relaxed

                text-white/60
              "
            >
              {project.description}
            </p>

            {/* image showcase */}
            <div className="mt-14">
              <div
                className="
                  relative

                  h-[450px]
                  md:h-[650px]

                  overflow-hidden

                  rounded-[32px]

                  border
                  border-white/10

                  bg-[#030B1C]
                "
              >
                {/* browser frame */}
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    z-20

                    flex
                    items-center
                    gap-2

                    border-b
                    border-white/10

                    bg-[#020817]/80

                    px-6
                    py-4

                    backdrop-blur-xl
                  "
                >
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />

                  <span className="ml-4 text-xs text-white/40">
                    Live Project Preview
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.images[activeImage]}
                      alt={project.title}
                      fill
                      className="
                        object-cover
                        transition-all
                        duration-1000
                        group-hover:scale-[1.04]
                      "
                    />
                  </motion.div>
                </AnimatePresence>

                {/* overlay */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#020817]
                    via-transparent
                    to-transparent
                  "
                />

                {/* indicators */}
                <div
                  className="
                    absolute
                    bottom-8
                    right-8
                    z-20

                    flex
                    gap-2
                  "
                >
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`
                        h-2
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          activeImage === i
                            ? "w-8 bg-white"
                            : "w-2 bg-white/30"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* services */}
            <div className="mt-12">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]

                  text-white/35
                "
              >
                Services
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="
                      rounded-full

                      border
                      border-white/10

                      bg-gradient-to-r
                      from-[#8B5CF6]/10
                      to-[#38BDF8]/10

                      px-5
                      py-3

                      text-sm
                      text-white/80
                    "
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* tech */}
            <div className="mt-8">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]

                  text-white/35
                "
              >
                Technology
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full

                      border
                      border-white/10

                      bg-white/[0.03]

                      px-5
                      py-3

                      text-sm
                      text-white/70
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="
                mt-14

                flex
                flex-wrap
                items-center

                gap-6
              "
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/link
                  relative

                  overflow-hidden

                  rounded-full

                  bg-gradient-to-r
                  from-[#8B5CF6]
                  via-[#C026D3]
                  to-[#38BDF8]

                  px-8
                  py-4

                  font-medium
                  text-white

                  shadow-[0_20px_60px_rgba(168,85,247,0.35)]

                  transition-all
                  duration-300

                  hover:scale-[1.03]
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Live Preview

                  <ArrowUpRight
                    size={18}
                    className="
                      transition-transform
                      duration-300

                      group-hover/link:translate-x-1
                      group-hover/link:-translate-y-1
                    "
                  />
                </span>
              </Link>

              <Link
                href={project.caseStudyUrl}
                className="
                  group/link

                  inline-flex
                  items-center
                  gap-2

                  text-white/60

                  transition-colors

                  hover:text-white
                "
              >
                Case Study

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover/link:translate-x-1
                    group-hover/link:-translate-y-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}