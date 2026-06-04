"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const navLinks = [
    { label: "SERVICES", href: "/" },
    { label: "PROJECTS", href: "/" },
    { label: "ABOUT", href: "/" },
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
    left-0
    right-0
    z-50
    px-4
    pt-4

        ${
          scrolled
            ? `
      rounded-full
      border
      border-white/10
      bg-[#050816]/40
      backdrop-blur-2xl
      shadow-[0_0_30px_rgba(168,85,247,0.08)]
    `
            : `
              bg-transparent
            `
        }
      `}
    >
      <div
        className={`
    mx-auto
    flex
    h-[84px]
    max-w-6xl
    items-center
    justify-between
    px-6
    md:px-8

    transition-all
    duration-500

   
  `}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
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
            </div>

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
    gap-4
    lg:flex
  "
        >
          <div
            className="
      flex
      items-center
      gap-8
      rounded-full
      border
      border-white/10
      bg-white/[0.03]
      px-8
      py-3
      backdrop-blur-md
    "
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
  relative
  text-sm
  tracking-[0.2em]
  text-white/65
  transition-all
  duration-300

  after:absolute
  after:left-0
  after:-bottom-2
  after:h-px
  after:w-0
  after:bg-gradient-to-r
  after:from-[#8B5CF6]
  after:to-[#38BDF8]
  after:transition-all
  after:duration-300

  hover:text-white
  hover:after:w-full
"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* CTA */}
          <Button
            asChild
            className="
  group
  rounded-full
  border
  border-[#8B5CF6]/20

  bg-gradient-to-r
  from-[#8B5CF6]/10
  via-[#C026D3]/10
  to-[#38BDF8]/10

  px-6
  py-6

  text-white

  backdrop-blur-xl

  transition-all
  duration-300

  hover:border-[#8B5CF6]/50
  hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
"
          >
            <Link href="/" className="flex items-center gap-2">
              Lets Talk
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
  h-14
  w-14
  items-center
  justify-center

  rounded-full

  border
  border-white/10

  bg-gradient-to-br
  from-[#8B5CF6]/20
  via-[#C026D3]/10
  to-[#38BDF8]/20

  text-white

  backdrop-blur-xl

  transition-all
  duration-300

  hover:scale-105
"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
    w-full
    max-w-[420px]

    border-l
    border-white/10

    bg-[linear-gradient(180deg,#020817_0%,#030B28_100%)]

    text-white
    backdrop-blur-2xl
    p-0
  "
            >
              {/* glow */}
              <div
                className="
      pointer-events-none
      absolute
      top-0
      right-0
      h-[350px]
      w-[350px]
      rounded-full
      bg-[#8B5CF6]/20
      blur-[120px]
    "
              />

              <div
                className="
      relative
      flex
      h-full
      flex-col
      px-8
      pt-20
      pb-8
    "
              >
                {/* Brand */}
                <div className="mb-16">
                  <h2
                    className="
         text-3xl
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
                    A S TECH STUDIO
                  </h2>
                </div>

                {/* Nav Links */}
                <div className="space-y-6">
                  {navLinks.map((item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="
            group
            flex
            items-center
            gap-5
          "
                    >
                      <span
                        className="
              min-w-[30px]
              text-sm
              text-white/25
            "
                      >
                        0{index + 1}
                      </span>

                      <span
                        className="
              text-2xl
              font-extralight
              tracking-[-0.05em]
              text-white

              transition-all
              duration-300

              group-hover:translate-x-3
              group-hover:text-[#C084FC]
            "
                      >
                        {item.label.charAt(0) +
                          item.label.slice(1).toLowerCase()}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-auto">
                  <div
                    className="
          mb-8
          h-px
          w-full
          bg-gradient-to-r
          from-[#8B5CF6]
          via-[#C026D3]
          to-transparent
        "
                  />

                  <div
                    className="
          mb-6
          flex
          items-center
          gap-2
        "
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                    <span
                      className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-white/40
          "
                    >
                      Available For Projects
                    </span>
                  </div>

                  <Button
                    asChild
                    className="
          h-14
          w-full
          rounded-full

          bg-gradient-to-r
          from-[#8B5CF6]
          via-[#C026D3]
          to-[#38BDF8]

          text-white

          hover:opacity-90
        "
                  >
                    <Link href="/" className="flex items-center gap-2">
                      Lets Talk
                      <ArrowUpRight size={18} />
                    </Link>
                  </Button>

                  <div
                    className="
          mt-8
          flex
          items-center
          gap-6
          text-sm
          text-white/40
        "
                  >
                    <Link href="#">LinkedIn</Link>
                    <Link href="#">Instagram</Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div
          className="
    hidden
    xl:flex
    items-center
    gap-2
    ml-4
  "
        >
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

          <span
            className="
      text-xs
      uppercase
      tracking-[0.2em]
      text-white/40
    "
          >
            Available for Projects
          </span>
        </div>
      </div>
    </header>
  );
}
