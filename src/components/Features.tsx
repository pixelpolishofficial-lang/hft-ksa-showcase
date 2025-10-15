"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ServiceCards from "@/components/ui/ServiceCards";

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 lg:py-32 px-6 lg:px-20 bg-neutral-950 dark:bg-neutral-900 overflow-hidden relative"
    >
      {/* Background Beams */}
      <BackgroundBeams className="opacity-40 dark:opacity-30" />
      
      {/* Black fade transition from navbar */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-20">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2
            variants={staggerItem}
            className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight mb-6 text-white"
          >
            What We{" "}
            <span className="font-playfair italic font-normal text-[var(--color-mint)]">
              Deliver
            </span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            End-to-end web solutions that combine beautiful design with powerful
            functionality. We handle everything from concept to deployment.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <ServiceCards />
      </div>
    </section>
  );
}