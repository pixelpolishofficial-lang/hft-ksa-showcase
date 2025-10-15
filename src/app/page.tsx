"use client";

import CardNav from "@/components/CardNav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
// Logo will be passed as a string path

const navItems = [
  {
    label: "Services",
    bgColor: "#2B2B2B",
    textColor: "#fff",
    links: [
      { label: "Web Development", href: "#services", ariaLabel: "Web Development Services" },
      { label: "UI/UX Design", href: "#services", ariaLabel: "UI/UX Design Services" },
      { label: "Performance Optimization", href: "#services", ariaLabel: "Performance Optimization" },
      { label: "E-commerce Solutions", href: "#services", ariaLabel: "E-commerce Solutions" }
    ]
  },
  {
    label: "Portfolio", 
    bgColor: "#1A1A1A",
    textColor: "#fff",
    links: [
      { label: "Web Applications", href: "#portfolio", ariaLabel: "Web Applications Portfolio" },
      { label: "E-commerce Sites", href: "#portfolio", ariaLabel: "E-commerce Portfolio" },
      { label: "Landing Pages", href: "#portfolio", ariaLabel: "Landing Pages Portfolio" },
      { label: "Mobile Apps", href: "#portfolio", ariaLabel: "Mobile Applications" }
    ]
  },
  {
    label: "About",
    bgColor: "#0F0F0F", 
    textColor: "#fff",
    links: [
      { label: "Our Story", href: "#about", ariaLabel: "About Our Company" },
      { label: "Team", href: "#about", ariaLabel: "Meet Our Team" },
      { label: "Process", href: "#about", ariaLabel: "Our Development Process" },
      { label: "Contact", href: "#contact", ariaLabel: "Contact Us" }
    ]
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden"
    >
      <CardNav
        logo="/logo.svg"
        logoAlt="HFT-KSA Logo"
        items={navItems}
        baseColor="rgba(255, 255, 255, 0.9)"
        menuColor="#2B2B2B"
        buttonBgColor="#7FFFD4"
        buttonTextColor="#2B2B2B"
        ease="power3.out"
      />
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </motion.div>
  );
}