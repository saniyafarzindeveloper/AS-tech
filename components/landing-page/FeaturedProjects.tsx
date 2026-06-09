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
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    group
    overflow-hidden
    rounded-[40px]
    border
    border-white/10
    bg-white/[0.02]
    backdrop-blur-xl
  "
>
  <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
    {/* IMAGE SIDE */}
    <div className="relative min-h-[600px] overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#020817]
          via-[#020817]/30
          to-transparent
        "
      />

      {/* project title on image */}
      <div className="absolute bottom-10 left-10 z-20">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-white/50
          "
        >
          Featured Project
        </p>

        <h3
          className="
            mt-3
            max-w-xl
            text-5xl
            font-extralight
            leading-[0.95]
            tracking-[-0.05em]
            text-white
          "
        >
          {project.title}
        </h3>
      </div>
    </div>

    {/* CONTENT SIDE */}
    <div className="flex flex-col p-10 lg:p-12">
      <div
        className="
          inline-flex
          w-fit
          rounded-full
          border
          border-[#8B5CF6]/30
          bg-[#8B5CF6]/10
          px-4
          py-2
          text-sm
          text-[#C084FC]
        "
      >
        {project.category}
      </div>

      <p
        className="
          mt-8
          leading-relaxed
          text-white/65
        "
      >
        {project.description}
      </p>

      {/* PROJECT INFO */}
      <div
        className="
          mt-10
          grid
          grid-cols-2
          gap-6
        "
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Industry
          </p>

          <p className="mt-2 text-white">
            {project.industry}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Timeline
          </p>

          <p className="mt-2 text-white">
            {project.timeline}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Role
          </p>

          <p className="mt-2 text-white">
            {project.role}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Stack
          </p>

          <p className="mt-2 text-white">
            {project.techStack.join(" • ")}
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="mt-10">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-white/35
          "
        >
          Services
        </p>

        <p
          className="
            mt-3
            text-white
          "
        >
          {project.services.join(" • ")}
        </p>
      </div>

      {/* CTA */}
      <div
        className="
          mt-auto
          pt-12
          flex
          flex-wrap
          gap-8
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
            text-white
            transition-colors
            hover:text-[#C084FC]
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
            text-white/70
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
</motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}