"use client";

import Link from "next/link";
import {
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020817]">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_55%)]" />

      {/* top gradient line */}
      <div className="absolute top-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8B5CF6]/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        {/* TOP */}
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          {/* LEFT */}
          <div className="max-w-xl">
            {/* logo / brand */}
            <div className="mb-6 flex items-center gap-3">
              

              <h2
                className="
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  via-[#C026D3]
                  to-[#38BDF8]
                  bg-clip-text
                  text-3xl
                  font-black
                  tracking-tight
                  text-transparent
                "
              >
                A S TECH
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-base
                leading-relaxed
                text-white/60
              "
            >
              Crafting premium digital experiences with futuristic design,
              scalable development, and modern technology for ambitious brands
              and startups.
            </p>

            {/* CTA */}
            <button
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#8B5CF6]/40
                hover:bg-white/[0.05]
              "
            >
              Let&apos;s Build Together
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-16 sm:grid-cols-3">
            {/* navigation */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                Navigation
              </h3>

              <div className="space-y-4">
                {["Home", "About", "Services", "Projects"].map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="
                      block
                      text-white/70
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* services */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                Services
              </h3>

              <div className="space-y-4">
                {["UI/UX Design", "Development", "SEO", "Branding"].map(
                  (item) => (
                    <p key={item} className="text-white/70">
                      {item}
                    </p>
                  ),
                )}
              </div>
            </div>

            {/* socials */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                Socials
              </h3>

              <div className="flex gap-4">
                {[
                  {
                    icon: FiInstagram,
                  },
                  {
                    icon: FiTwitter,
                  },
                  {
                    icon: FiLinkedin,
                  },
                ].map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <button
                      key={index}
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        text-white/70
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:border-[#8B5CF6]/40
                        hover:text-white
                        hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                      "
                    >
                      <Icon size={18} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
          <p>© 2026 A S TECH. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-white/80"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="transition-colors duration-300 hover:text-white/80"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
