"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Play } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import TypewriterTitle from "@/components/ui/TypewriterTitle";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 lg:px-20 overflow-hidden"
    >
      {/* Mirrored background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/bgwb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
        }}
      ></div>
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 pointer-events-none"></div>
      
      {/* Subtle gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >

            <div className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-tight mb-8 text-white">
              <motion.span variants={staggerItem}>
                We build{" "}
              </motion.span>
              <span className="playfair text-mint">
                <TypewriterTitle
                  sequences={[
                    { text: "high performing", deleteAfter: true },
                    { text: "lightning fast", deleteAfter: true },
                    { text: "beautiful", deleteAfter: true },
                    { text: "responsive", deleteAfter: true },
                    { text: "high performing", deleteAfter: false }
                  ]}
                  typingSpeed={80}
                  startDelay={1000}
                  autoLoop={true}
                  loopDelay={3000}
                  className="playfair text-mint"
                  inline={true}
                />
              </span>
              <motion.span variants={staggerItem}>
                {" "}websites for you
              </motion.span>
            </div>

            <motion.p
              variants={staggerItem}
              className="text-[clamp(1.125rem,2vw,1.375rem)] text-gray-200 max-w-xl mb-12 leading-relaxed"
            >
              <span className="font-semibold text-white">
                HFT-KSA
              </span>{" "}
              creates stunning, high-performing websites for ambitious businesses. We
              combine cutting-edge technology with beautiful design to deliver
              exceptional digital experiences.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7FFFD4_0%,#00FF7F_25%,#7FFFD4_50%,#00FF7F_75%,#7FFFD4_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-4 text-base font-medium text-white backdrop-blur-3xl">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="shadow-[0_0_0_3px_#ffffff_inset] h-14 px-10 py-4 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 group flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  View Portfolio
                </button>
              </motion.div>
            </motion.div>

            {/* Stats */}
              <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-300"
            >
              <div>
                <div className="text-4xl font-bold mb-2 text-mint">
                  150+
                </div>
                <div className="text-sm text-gray-200 uppercase tracking-wide">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-mint">
                  98%
                </div>
                <div className="text-sm text-gray-200 uppercase tracking-wide">
                  Satisfaction
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-mint">
                  5+
                </div>
                <div className="text-sm text-gray-200 uppercase tracking-wide">
                  Years Exp
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Empty space for layout balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}