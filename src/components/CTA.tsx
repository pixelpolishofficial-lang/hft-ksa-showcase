"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-20 bg-gray-900 dark:bg-gray-800 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-mint rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 bg-navy rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-mint/20 text-mint text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-8 border border-mint/30"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(127, 255, 212, 0.4)",
                "0 0 0 10px rgba(127, 255, 212, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-4 h-4" />
            Start Your Project Today
          </motion.div>

          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight mb-8 text-white">
            Ready to build something{" "}
            <span className="font-playfair italic font-normal text-[var(--color-mint)]">
              amazing
            </span>
            ?
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's discuss your project and create a website that exceeds your
            expectations. Get in touch for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-lg group">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg border-2 border-white text-white hover:bg-white hover:text-gray-900"
              >
                View Portfolio
              </Button>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-12 border-t border-white/20"
          >
            <p className="text-sm text-gray-400 uppercase tracking-wide mb-6">
              Trusted by businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Framer"].map(
                (tech) => (
                  <div
                    key={tech}
                    className="text-white/60 hover:text-white transition-colors font-semibold"
                  >
                    {tech}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}