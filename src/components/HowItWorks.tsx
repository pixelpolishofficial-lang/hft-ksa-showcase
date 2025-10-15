"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { GlareCard } from "@/components/ui/glare-card";
import { Timeline } from "@/components/ui/timeline";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start by understanding your vision, goals, and requirements. A comprehensive discovery phase ensures we're aligned on every detail.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our designers create beautiful mockups and prototypes. We iterate based on your feedback until the design is perfect.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development begins with clean, maintainable code. We follow best practices and keep you updated on progress throughout.",
    color: "from-green-500 to-teal-500",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Launch day! We deploy your website, provide training, and offer ongoing support to ensure your success.",
    color: "from-orange-500 to-red-500",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Transform steps data for Timeline component
  const timelineData = steps.map((step) => ({
    title: step.title,
    content: (
      <GlareCard className="flex flex-col items-start justify-start p-8 h-auto min-h-[400px] shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transition-shadow duration-300">
        {/* Step number */}
        <div
          className={`inline-block text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-6 opacity-30`}
        >
          {step.number}
        </div>

        {/* Content */}
        <h3 className="text-3xl font-bold mb-6 text-white">
          {step.title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          {step.description}
        </p>
      </GlareCard>
    ),
  }));

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-24 lg:py-32 px-6 lg:px-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block bg-mint/20 text-gray-900 dark:text-mint text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-mint/30"
          >
            Our Process
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight mb-6 text-gray-900 dark:text-gray-100"
          >
            How It{" "}
            <span className="font-playfair italic font-normal text-[var(--color-mint)]">
              Works
            </span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A streamlined 4-step process from concept to launch. We make building your
            dream website simple and transparent.
          </motion.p>
        </motion.div>

        {/* Custom Timeline with preserved styling */}
        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
}