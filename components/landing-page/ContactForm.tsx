"use client";

import { useForm } from "react-hook-form";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  query: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(values: FormValues) {
    console.log(values);
  }

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
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_45%)]
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
        <div
          className="
            grid
            gap-20
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                mb-5
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#A855F7]
              "
            >
              Contact Us
            </p>

            <h2
              className="
                text-5xl
                font-extralight
                leading-[0.95]
                tracking-[-0.06em]
                text-white
                sm:text-6xl
                md:text-7xl
              "
            >
              Let’s build
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
                something futuristic
              </span>

              <br />
              together.
            </h2>

            <p
              className="
                mt-10
                max-w-lg
                text-lg
                leading-relaxed
                text-white/55
              "
            >
              Whether it’s a modern website, SaaS product, branding system or a
              scalable digital experience — we’d love to hear your vision.
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
              md:p-10
            "
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FieldGroup>
                {/* NAME + EMAIL */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* NAME */}
                  <Field>
                    <FieldLabel
                      className="
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        text-white/45
                      "
                    >
                      Full Name
                    </FieldLabel>

                    <Input
                      placeholder="John Doe"
                      {...register("name", {
                        required: "Name is required",
                      })}
                      className="
                        mt-3
                        h-14
                        rounded-2xl
                        border-white/10
                        bg-white/[0.03]
                        text-white
                        placeholder:text-white/25
                        focus-visible:ring-1
                        focus-visible:ring-[#8B5CF6]
                      "
                    />

                    <FieldError>
                      {errors.name?.message}
                    </FieldError>
                  </Field>

                  {/* EMAIL */}
                  <Field>
                    <FieldLabel
                      className="
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        text-white/45
                      "
                    >
                      Email Address
                    </FieldLabel>

                    <Input
                      type="email"
                      placeholder="hello@example.com"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      className="
                        mt-3
                        h-14
                        rounded-2xl
                        border-white/10
                        bg-white/[0.03]
                        text-white
                        placeholder:text-white/25
                        focus-visible:ring-1
                        focus-visible:ring-[#8B5CF6]
                      "
                    />

                    <FieldError>
                      {errors.email?.message}
                    </FieldError>
                  </Field>
                </div>

                {/* PHONE + QUERY */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* PHONE */}
                  <Field>
                    <FieldLabel
                      className="
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        text-white/45
                      "
                    >
                      Phone Number
                    </FieldLabel>

                    <Input
                      placeholder="+91 9876543210"
                      {...register("phone")}
                      className="
                        mt-3
                        h-14
                        rounded-2xl
                        border-white/10
                        bg-white/[0.03]
                        text-white
                        placeholder:text-white/25
                        focus-visible:ring-1
                        focus-visible:ring-[#8B5CF6]
                      "
                    />

                    <FieldDescription className="mt-2 text-white/30">
                      Optional
                    </FieldDescription>
                  </Field>

                  {/* QUERY */}
                  <Field>
                    <FieldLabel
                      className="
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        text-white/45
                      "
                    >
                      Query Type
                    </FieldLabel>

                    <Input
                      placeholder="Web App / Branding / SaaS"
                      {...register("query")}
                      className="
                        mt-3
                        h-14
                        rounded-2xl
                        border-white/10
                        bg-white/[0.03]
                        text-white
                        placeholder:text-white/25
                        focus-visible:ring-1
                        focus-visible:ring-[#8B5CF6]
                      "
                    />
                  </Field>
                </div>

                {/* MESSAGE */}
                <Field>
                  <FieldLabel
                    className="
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-white/45
                    "
                  >
                    Your Message
                  </FieldLabel>

                  <Textarea
                    placeholder="Tell us about your project..."
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="
                      mt-3
                      min-h-[180px]
                      rounded-3xl
                      border-white/10
                      bg-white/[0.03]
                      p-5
                      text-white
                      placeholder:text-white/25
                      focus-visible:ring-1
                      focus-visible:ring-[#8B5CF6]
                    "
                  />

                  <FieldError>
                    {errors.message?.message}
                  </FieldError>
                </Field>
              </FieldGroup>

              {/* BUTTON */}
              <Button
                type="submit"
                className="
                  group
                  h-14
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-8
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#8B5CF6]/40
                  hover:bg-white/[0.06]
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  Send Message

                  <ArrowUpRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}