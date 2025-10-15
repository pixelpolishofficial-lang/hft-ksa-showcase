import { Variants } from "framer-motion";

// Framer Motion Animation Presets
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  },
};

export const tiltEffect = {
  rotateX: 10,
  rotateY: 10,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

// Text split animation (for use with split-text libraries)
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Card animations
export const cardHover = {
  scale: 1.02,
  y: -4,
  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

// Button animations
export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
  },
};

// Glitch effect keyframes
export const glitchAnimation = {
  animate: {
    x: [-2, 2, -2, 2, 0],
    opacity: [1, 0.8, 1, 0.8, 1],
  },
  transition: {
    duration: 0.3,
    repeat: Infinity,
    repeatDelay: 3,
  },
};

// Parallax effect
export const parallaxEffect = (speed: number = 0.5) => ({
  y: speed * 100,
  transition: {
    duration: 0,
  },
});

// GSAP Animation Utilities
export const gsapDefaults = {
  ease: "power3.out",
  duration: 0.8,
};

export const gsapScrollTriggerDefaults = {
  start: "top 80%",
  end: "top 50%",
  toggleActions: "play none none none",
};

export const gsapStaggerConfig = {
  amount: 0.5,
  from: "start",
  ease: "power2.out",
};

// Easing functions
export const easings = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  spring: { type: "spring", stiffness: 300, damping: 30 },
  smoothSpring: { type: "spring", stiffness: 100, damping: 20 },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Utility function to create scroll-based animations
export const createScrollAnimation = (triggerElement: string, animatedElement: string) => ({
  trigger: triggerElement,
  element: animatedElement,
  ...gsapScrollTriggerDefaults,
});

// Utility for reduced motion
export const getReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const withReducedMotion = (animation: any) => {
  return getReducedMotion() ? { opacity: 1 } : animation;
};