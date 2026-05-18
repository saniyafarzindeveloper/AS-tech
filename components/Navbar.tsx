"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative mx-auto flex h-[92px] w-full items-center justify-between px-6 md:px-12">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* logo */}
          <div className="relative h-20 w-20 overflow-hidden rounded-xl">
            <Image
              src="/bg.png"
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* text */}
          <div className="flex flex-col leading-none">
            <span
              className="
                text-[25px]
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
                text-[14px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-white
              "
            >
              Studio
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.03,
              borderColor: "rgba(139,92,246,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="
              hidden
              md:block
              group
              relative
              overflow-hidden
              rounded-full
              border
              border-white/15
              bg-white/[0.03]
              px-8
              py-4
              backdrop-blur-md
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#8B5CF6]/10
                via-[#06B6D4]/10
                to-[#EC4899]/10
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <span
              className="
                relative
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Say Hello
            </span>
          </motion.button>

          {/* SHEET MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <motion.button
                whileHover={{
                  rotate: 90,
                  borderColor: "rgba(139,92,246,0.5)",
                }}
                transition={{ duration: 0.25 }}
                className="
                  flex
                  h-[68px]
                  w-[68px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.03]
                  text-white
                  backdrop-blur-md
                "
              >
                <Menu size={26} strokeWidth={1.5} />
              </motion.button>
            </SheetTrigger>

            <SheetContent
  side="right"
  className="
    w-full
    border-l
    border-white/10
    bg-[#020817]/95
    p-0
    text-white
    backdrop-blur-2xl
    sm:w-[520px]

    [&>button]:hidden
  "
>
  {/* background glow */}
  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.22),transparent_45%)]
    "
  />

  {/* gradient line */}
  <div
    className="
      absolute
      left-0
      top-0
      h-full
      w-px
      bg-gradient-to-b
      from-[#8B5CF6]
      via-[#C026D3]
      to-transparent
      opacity-60
    "
  />

  <div
    className="
      relative
      z-10
      flex
      h-full
      flex-col
      justify-between
      px-8
      py-24
      sm:px-14
    "
  >
    {/* TOP */}
    <div>
      {/* small label */}
      <p
        className="
          mb-10
          text-xs
          uppercase
          tracking-[0.35em]
          text-white/35
        "
      >
        Navigation
      </p>

      {/* nav items */}
      <div className="space-y-7">
        {navItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.08,
            }}
          >
            <Link
              href="/"
              className="
                group
                flex
                items-center
                justify-between
                overflow-hidden
              "
            >
              <span
                className="
                  text-4xl
                  font-extralight
                  tracking-[-0.05em]
                  text-white/80
                  transition-all
                  duration-300
                  group-hover:translate-x-2
                  group-hover:text-white
                  md:text-5xl
                "
              >
                {item}
              </span>

              <span
                className="
                  translate-x-[-20px]
                  opacity-0
                  text-xl
                  transition-all
                  duration-300
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              >
                →
              </span>
            </Link>

            {/* animated divider */}
            <div
              className="
                mt-4
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

    {/* BOTTOM */}
    <div className="space-y-8">
     

      {/* contact */}
      <div className="space-y-2">
       

        <p className="text-lg text-white/80">
          hello@astech.com
        </p>
      </div>

      {/* glow line */}
      <div
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-[#8B5CF6]
          via-[#C026D3]
          to-transparent
        "
      />
    </div>
  </div>
</SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}