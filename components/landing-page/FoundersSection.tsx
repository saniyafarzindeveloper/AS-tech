"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const founders = [
  {
    initials: "SF",
    name: "Saniya Farzin",
    role: "CTO & Co-Founder",
    domain: [
      "Web Apps",
      "SaaS Architecture",
      "FullStack Engineering",
      "System Design",
    ],
    qualification: "B.E. Information Technology",
    experience: "3+ Years",
    statement:
      "Passionate about building scalable web applications, SaaS products, modern user experiences and future-ready digital ecosystems.",
    linkedin: "https://www.linkedin.com/in/saniya-farzin/",
    cardUrl: "https://blinq.me/cmp9isqvf01ip0bs636yz7rsr?bs=db",
  },
  {
    initials: "AA",
    name: "Aves Ahmed",
    role: "Business Development Manager",
    domain: [ "Management", "Finance", "Leadership", "Business growth"],
    qualification: "MTech, MBA",
    experience: "7+ Years",
    statement:
      "Focused on client success, partnerships, business growth and transforming ideas into sustainable digital ventures.",
    linkedin: "https://www.linkedin.com/in/aves-shaikh-project-management/",
    cardUrl: "https://blinq.me/STao0bTfXfbL?bs=db",
  },
];

export default function FoundersSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#020817]
        py-32
      "
    >
      {/* background glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_50%)]
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
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p
            className="
              mb-5
              text-sm
              uppercase
              tracking-[0.35em]
              text-[#A855F7]
            "
          >
            Leadership
          </p>

          <h2
            className="
              text-5xl
              font-extralight
              tracking-[-0.06em]
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            Meet the
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
              founders
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-white/55
            "
          >
            The minds behind A S Tech Studio, combining technology, innovation
            and business strategy to deliver complete digital solutions.
          </p>
        </motion.div>

        {/* founder cards */}
        <div
          className="
            grid
            gap-8
            lg:grid-cols-2
          "
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
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

              <div className="relative z-10">
                {/* top section */}
                <div className="flex items-start justify-between">
                  {/* initials */}
                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-gradient-to-br
                      from-[#8B5CF6]/20
                      via-[#C026D3]/10
                      to-[#38BDF8]/20
                    "
                  >
                    <span
                      className="
                        bg-gradient-to-r
                        from-[#8B5CF6]
                        via-[#C026D3]
                        to-[#38BDF8]
                        bg-clip-text
                        text-3xl
                        font-black
                        text-transparent
                      "
                    >
                      {founder.initials}
                    </span>
                  </div>

                  <span
                    className="
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      text-white/20
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* content */}
                <div className="mt-8">
                  <h3
                    className="
                      text-3xl
                      font-light
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    {founder.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-[#A855F7]
                    "
                  >
                    {founder.role}
                  </p>

                  {/* details */}

                  <div
                    className="
    mt-8
    grid
    gap-8
    md:grid-cols-3
  "
                  >
                    {/* DOMAIN */}
                    <div>
                      <p
                        className="
        text-xs
        uppercase
        tracking-[0.2em]
        text-white/30
      "
                      >
                        Domain
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {founder.domain.map((item) => (
                          <span
                            key={item}
                            className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-3
            py-1
            text-xs
            text-white/70
          "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div>
                      <p
                        className="
        text-xs
        uppercase
        tracking-[0.2em]
        text-white/30
      "
                      >
                        Experience
                      </p>

                      <p
                        className="
        mt-3
        text-white/70
      "
                      >
                        {founder.experience}
                      </p>
                    </div>

                    {/* QUALIFICATION */}
                    <div>
                      <p
                        className="
        text-xs
        uppercase
        tracking-[0.2em]
        text-white/30
      "
                      >
                        Qualification
                      </p>

                      <p
                        className="
        mt-3
        text-white/70
      "
                      >
                        {founder.qualification}
                      </p>
                    </div>
                  </div>

                  {/* statement */}
                  <p
                    className="
                      mt-8
                      leading-relaxed
                      text-white/55
                    "
                  >
                    {founder.statement}
                  </p>

                  {/* actions */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {/* LinkedIn */}
                    <Link
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-white/10
      bg-white/[0.03]
      px-5
      py-3
      text-sm
      uppercase
      tracking-[0.15em]
      text-white
      transition-all
      duration-300
      hover:border-[#8B5CF6]/40
      hover:bg-white/[0.06]
    "
                    >
                      Connect with me
                      <ArrowUpRight
                        size={16}
                        className="
        transition-transform
        duration-300
        hover:translate-x-1
        hover:-translate-y-1
      "
                      />
                    </Link>

                    {/* Digital Card */}
                    <Link
                    target="_blank"
                      rel="noopener noreferrer"
                      href={founder.cardUrl}
                      className="
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-[#8B5CF6]/20
      bg-gradient-to-r
      from-[#8B5CF6]/10
      via-[#C026D3]/10
      to-[#38BDF8]/10
      px-5
      py-3
      text-sm
      uppercase
      tracking-[0.15em]
      text-white
      transition-all
      duration-300
      hover:border-[#8B5CF6]/50
      hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
    "
                    >
                      Digital Card
                      <ArrowUpRight
                        size={16}
                        className="
        transition-transform
        duration-300
        hover:translate-x-1
        hover:-translate-y-1
      "
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* bottom gradient line */}
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
          ))}
        </div>
      </div>
    </section>
  );
}
