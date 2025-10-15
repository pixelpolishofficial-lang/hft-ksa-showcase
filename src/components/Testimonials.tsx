"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "Working with HFT-KSA was an absolute pleasure. They transformed our vision into a stunning website that exceeded all expectations. The attention to detail and technical expertise is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, Digital Ventures",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content:
      "The team delivered a high-performing e-commerce platform that has significantly boosted our conversion rates. Their professionalism and commitment to quality are outstanding.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content:
      "From initial consultation to final launch, the process was seamless. They truly understand modern web design and created a site that perfectly represents our brand.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Product Manager, InnovateLabs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    content:
      "Exceptional work! The website is not only beautiful but also incredibly fast and user-friendly. Our users love the new experience, and we've seen engagement skyrocket.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 px-6 lg:px-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-mint/20 text-gray-900 dark:text-mint text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-mint/30">
            Client Love
          </span>
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight mb-6 text-gray-900 dark:text-gray-100">
            What Our{" "}
            <span className="font-playfair italic font-normal text-[var(--color-mint)]">
              Clients
            </span>{" "}
            Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to
            say about working with us.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full max-w-3xl"
              >
                <div className="bg-white dark:bg-gray-700 rounded-3xl p-12 shadow-2xl border border-gray-200 dark:border-gray-600 relative">
                  {/* Quote icon */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-mint/10 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-mint" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[currentIndex].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-mint text-mint"
                        />
                      )
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-xl leading-relaxed text-gray-900 dark:text-gray-100 mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full border-2 border-mint"
                    />
                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full glass-effect border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:border-mint transition-colors text-gray-900 dark:text-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-mint"
                      : "bg-gray-200 dark:bg-gray-600 hover:bg-mint/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full glass-effect border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:border-mint transition-colors text-gray-900 dark:text-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}