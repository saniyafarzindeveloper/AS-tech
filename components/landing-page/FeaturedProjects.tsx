"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  caseStudyUrl: string;

  industry: string;
  timeline: string;
  role: string;

  services: string[];
  techStack: string[];
};

type FeaturedProjectsProps = {
  projects: Project[];
};

export default function FeaturedProjects({
  projects,
}: FeaturedProjectsProps) {
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
          right-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#8B5CF6]/10
          blur-[140px]
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
          lg:px-20
        "
      >
        {/* heading */}
        <div>
          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#8B5CF6]
            "
          >
            Featured Work
          </p>

          <h2
            className="
              mt-4
              text-5xl
              font-extralight
              tracking-[-0.05em]
              text-white
              md:text-7xl
            "
          >
            Selected
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
              Projects
            </span>
          </h2>
        </div>

        <div className="mt-20 space-y-16">
          {projects.map((project, index) => (
  <motion.article
    key={project.id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative"
  >
    {/* gradient border */}
    <div
      className="
        rounded-[48px]
        bg-gradient-to-br
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
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          {/* IMAGE */}
          <div className="relative min-h-[650px] overflow-hidden">
            {/* watermark number */}
            <div
              className="
                absolute
                right-8
                top-4
                z-20

                text-[12rem]
                font-black
                leading-none

                text-white/[0.03]
              "
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2

                h-[400px]
                w-[400px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-[#C026D3]/20

                blur-[180px]
              "
            />

            <Image
              src={project.image}
              alt={project.title}
              fill
              className="
                object-cover
                transition-all
                duration-700
                group-hover:scale-[1.03]
              "
            />

            {/* overlays */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-[#020817]
                via-[#020817]/20
                to-transparent
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-r
                from-transparent
                via-transparent
                to-[#8B5CF6]/10
              "
            />

            {/* bottom content */}
            <div className="absolute bottom-12 left-12 z-20">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  text-white/40
                "
              >
                Selected Work
              </p>

              <h3
                className="
                  mt-4

                  max-w-2xl

                  text-5xl
                  md:text-6xl

                  font-extralight

                  leading-[0.92]
                  tracking-[-0.07em]

                  text-white
                "
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center p-10 md:p-14">
            {/* category */}
            <div
              className="
                inline-flex
                w-fit

                rounded-full

                border
                border-[#8B5CF6]/20

                bg-[#8B5CF6]/10

                px-5
                py-2

                text-sm
                font-medium

                text-[#D8B4FE]
              "
            >
              {project.category}
            </div>

            {/* description */}
            <p
              className="
                mt-10

                text-xl
                leading-relaxed

                text-white/70
              "
            >
              {project.description}
            </p>

            {/* divider */}
            <div
              className="
                my-10

                h-px
                w-24

                bg-gradient-to-r
                from-[#8B5CF6]
                to-transparent
              "
            />

            {/* services */}
            <div>
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

              <p
                className="
                  mt-4

                  text-sm
                  uppercase

                  tracking-[0.18em]

                  text-white/60
                "
              >
                {project.services.join(" • ")}
              </p>
            </div>

            {/* stack */}
            <div className="mt-10">
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

              <p
                className="
                  mt-4

                  text-sm
                  uppercase

                  tracking-[0.18em]

                  text-white/60
                "
              >
                {project.techStack.join(" • ")}
              </p>
            </div>

            {/* actions */}
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

                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-white

                  px-7
                  py-4

                  font-medium

                  text-black

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                "
              >
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
    </div>
  </motion.article>
))}
        </div>
      </div>
    </section>
  );
}