"use client";

import Link from "next/link";
import { Lock, ArrowLeft } from "lucide-react";

export default function Closed() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#020817]
        px-6
      "
    >
      {/* glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-500/10
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-3xl
          text-center
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
          "
        >
          <Lock
            size={36}
            className="text-red-400"
          />
        </div>

        <p
          className="
            mt-8
            text-sm
            uppercase
            tracking-[0.4em]
            text-red-400
          "
        >
          Permanently Closed
        </p>

        <h1
          className="
            mt-6
            text-5xl
            font-extralight
            tracking-[-0.06em]
            text-white
            md:text-7xl
          "
        >
          This Company
          <br />

          <span className="font-semibold">
            Has Shut Down
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-white/60
          "
        >
          Operations have permanently ceased and the company is
          no longer accepting projects, inquiries, partnerships,
          or providing services.
        </p>

        <div
          className="
            mx-auto
            mt-12
            h-px
            max-w-md
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
          "
        />

        <p
          className="
            mt-8
            text-sm
            text-white/40
          "
        >
          Thank you to every client, partner and supporter who
          was part of this journey.
        </p>

        <Link
          href="/"
          className="
            mt-10
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-6
            py-3
            text-white/80
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-white/[0.06]
            hover:text-white
          "
        >
          <ArrowLeft size={18} />
          Return Home
        </Link>
      </div>
    </section>
  );
}