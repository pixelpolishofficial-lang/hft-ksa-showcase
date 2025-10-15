"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Target } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Happy Clients",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Target,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    color: "from-orange-500 to-red-500",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const valueRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(valueRef, { once: true });

  useEffect(() => {
    if (!valueRef.current || !isInView) return;

    const target = stat.value;
    gsap.from(valueRef.current, {
      innerText: 0,
      duration: 2,
      ease: "power2.out",
      snap: { innerText: 1 },
      onUpdate: function () {
        if (valueRef.current) {
          valueRef.current.innerText =
            Math.ceil(parseFloat(valueRef.current.innerText)).toString() +
            stat.suffix;
        }
      },
    });
  }, [isInView, stat.value, stat.suffix]);

  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-600"
    >
      <div
        className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div
        ref={valueRef}
        className="text-5xl font-bold mb-2 text-[var(--color-mint)]"
      >
        {stat.value}
        {stat.suffix}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 px-6 lg:px-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span
              variants={staggerItem}
              className="inline-block bg-mint/20 text-gray-900 dark:text-mint text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-mint/30"
            >
              About HFT-KSA
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight mb-8 text-gray-900 dark:text-gray-100"
            >
              We build{" "}
              <span className="font-playfair italic font-normal text-[var(--color-mint)]">
                experiences
              </span>
              , not just websites
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
            >
              In today's digital landscape, your website is often the first impression
              potential clients have of your business. We ensure it's a lasting one.
            </motion.p>
            <motion.p
              variants={staggerItem}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
            >
              Every project we undertake combines strategic thinking, creative design,
              and technical excellence to deliver solutions that don't just look
              good—they perform. We're passionate about crafting digital experiences
              that drive real business results.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Button size="lg">Start Your Project</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-mint/20">
              <div className="absolute inset-0 bg-gradient-to-br from-mint/20 via-navy/40 to-mint/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-4 text-mint">
                    HFT-KSA
                  </div>
                  <div className="text-xl opacity-90">
                    Building Digital Excellence
                  </div>
                </div>
              </div>
              {/* Animated circles */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-mint/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-mint/30 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}