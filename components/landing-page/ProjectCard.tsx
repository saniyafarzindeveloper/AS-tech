"use client";

import { useEffect, useState } from "react";
import ProjectCarousel from "./ProjectCarousel";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;

  images: string[];

  liveUrl: string;
  caseStudyUrl: string;

  timeline: string;
  services: string[];
  techStack: string[];
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
    group
    relative
    overflow-hidden
    rounded-[40px]
    border
    border-[#8B5CF6]/20
    bg-[#030617]
    p-8
    md:p-12
  "
    >
      {/* glow */}
      <div
        className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_40%)]
      pointer-events-none
    "
      />

      {/* HEADER */}
      <div
        className="
      flex
      flex-col
      gap-8
      lg:flex-row
      lg:items-center
    "
      >
        <div
          className="
        text-[90px]
        md:text-[120px]
        font-black
        leading-none
        text-white/[0.05]
      "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="flex-1">
          <p
            className="
          text-sm
          uppercase
          tracking-[0.35em]
          text-[#A855F7]
        "
          >
            {project.category}
          </p>

          <h3
            className="
          mt-3
          text-4xl
          md:text-6xl
          font-extralight
          leading-[0.95]
          tracking-[-0.06em]
          text-white
        "
          >
            {project.title}
          </h3>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div
        className="
      mt-12
      grid
      gap-10
      lg:grid-cols-[1.35fr_0.65fr]
    "
      >
        {/* BROWSER MOCKUP */}
        <div>
          <div
            className="
          overflow-hidden
          rounded-[28px]
          border
          border-[#8B5CF6]/20
          bg-[#050816]
        "
          >
            {/* browser bar */}
            <div
              className="
            flex
            items-center
            gap-2
            border-b
            border-white/10
            px-5
            py-4
          "
            >
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <div
                className="
              ml-4
              flex-1
              rounded-full
              bg-white/5
              px-4
              py-2
              text-center
              text-sm
              text-white/40
            "
              >
                {project.liveUrl}
              </div>
            </div>

            <div className="relative aspect-[16/10]">
              <ProjectCarousel images={project.images} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col">
          <p
            className="
          text-lg
          leading-relaxed
          text-white/70
        "
          >
            {project.description}
          </p>

          <div
            className="
          mt-8
          h-px
          w-20
          bg-gradient-to-r
          from-[#A855F7]
          to-transparent
        "
          />

          <div className="mt-8">
            <p
              className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-[#A855F7]
          "
            >
              Services
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="
                rounded-full
                border
                border-[#8B5CF6]/20
                px-4
                py-2
                text-sm
                text-white/80
              "
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p
              className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-[#A855F7]
          "
            >
              Technology
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                rounded-full
                border
                border-white/10
                px-4
                py-2
                text-sm
                text-white/70
              "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p
              className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-[#A855F7]
          "
            >
              Timeline
            </p>

            <div className="mt-4 flex">
              <span
                className="
                rounded-full
                border
                border-white/10
                px-4
                py-2
                text-sm
                text-white/70
              "
              >
                {project.timeline}
              </span>
            </div>
          </div>

          <div className="mt-auto pt-12 flex gap-4">
            <Link
              href={project.liveUrl}
              target="_blank"
              className="
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-[#8B5CF6]
            via-[#C026D3]
            to-[#38BDF8]
            px-6
            py-4
            font-medium
            text-white
            shadow-[0_10px_50px_rgba(168,85,247,0.35)]
          "
            >
              Live Preview
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
