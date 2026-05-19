"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const navLinks = [
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT", href: "/about" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        z-50
        w-full
        transition-all
        duration-300

        ${
          scrolled
            ? `
              border-b
              border-white/10
              bg-[#020817]/80
              backdrop-blur-xl
            `
            : `
              bg-transparent
            `
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-[92px]
          max-w-7xl
          items-center
          justify-between
          px-6
          md:px-10
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          {/* logo image */}
          <div className="relative h-16 w-16 overflow-hidden rounded-xl">
            <Image
              src="/bg.png"
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* brand */}
          <div className="flex flex-col leading-none">
            <span
              className="
                text-[24px]
                tracking-tight
                bg-gradient-to-r
                from-[#bf4078]
                via-[#A855F7]
                to-[#60A5FA]
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]
              "
            >
              A S TECH
            </span>

            <span
              className="
                mt-1
                text-[13px]
                uppercase
                tracking-[0.35em]
                text-white
              "
            >
              Studio
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav
          className="
            hidden
            items-center
            gap-10
            lg:flex
          "
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                text-sm
                tracking-[0.2em]
                text-white/75
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Button
            asChild
            className="
              group
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              px-6
              py-6
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#8B5CF6]/40
              hover:bg-white/[0.08]
            "
          >
            <Link
              href="/contact"
              className="flex items-center gap-2"
            >
              CONTACT

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </Button>
        </nav>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white
                  backdrop-blur-md
                "
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                border-l
                border-white/10
                bg-[#020817]/95
                text-white
                backdrop-blur-2xl
              "
            >
              {/* glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_45%)]
                "
              />

              <div
                className="
                  relative
                  mt-20
                  flex
                  flex-col
                  gap-8
                "
              >
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      text-3xl
                      font-extralight
                      tracking-[-0.04em]
                      text-white/85
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    {item.label}
                  </Link>
                ))}

                {/* mobile CTA */}
                <Button
                  asChild
                  className="
                    mt-6
                    w-fit
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-6
                    py-6
                    text-white
                    backdrop-blur-md
                    hover:border-[#8B5CF6]/40
                    hover:bg-white/[0.08]
                  "
                >
                  <Link
                    href="/contact"
                    className="flex items-center gap-2"
                  >
                    CONTACT

                    <ArrowUpRight size={18} />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}