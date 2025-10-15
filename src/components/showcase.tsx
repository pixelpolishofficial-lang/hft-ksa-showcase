"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Sparkles, Zap, Users, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="service-card group bg-white rounded-2xl p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 bg-[#7FFFD4]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#7FFFD4] transition-colors">
        <div className="w-7 h-7 text-[#2B2B2B]">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-[#666666] leading-relaxed mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-sm font-semibold hover:text-[#7FFFD4] transition-colors">
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
}

export function StatCard({ value, label, className = "" }: { value: string; label: string; className?: string }) {
  const isNavy = value === "100%" || value === "Top";
  return (
    <div className={`${isNavy ? "bg-[#1A2B4A]" : "bg-[#2B2B2B]"} text-white rounded-2xl p-8 ${className}`}>
      <div className="text-5xl font-bold mb-3 text-[#7FFFD4]">{value}</div>
      <div className="text-sm uppercase tracking-wide opacity-90">{label}</div>
    </div>
  );
}

export function NavigationBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-[#2B2B2B]">
          HFT<span className="text-[#7FFFD4]">-</span>KSA
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm font-medium hover:text-[#7FFFD4] transition-colors">Work</a>
          <a href="#services" className="text-sm font-medium hover:text-[#7FFFD4] transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium hover:text-[#7FFFD4] transition-colors">About</a>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}

export function HeroSection({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) {
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="decorative-square absolute top-[20%] right-[15%] w-16 h-16 bg-[#7FFFD4] opacity-80" />
        <div className="decorative-square absolute top-[40%] right-[25%] w-12 h-12 bg-[#7FFFD4] opacity-60" />
        <div className="decorative-square absolute bottom-[30%] right-[10%] w-20 h-20 bg-[#7FFFD4] opacity-70" />
        <div className="decorative-square absolute top-[60%] left-[70%] w-8 h-8 bg-[#7FFFD4] opacity-90" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <div className="hero-text inline-block mb-6">
            <span className="inline-block bg-[#7FFFD4]/20 text-[#2B2B2B] text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded">
              Portfolio Showcase
            </span>
          </div>

          <h1 className="hero-text text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.95] tracking-tight mb-8">
            This is an{" "}
            <span className="font-playfair italic font-normal text-[#7FFFD4]">example</span>
            <br />
            of what we{" "}
            <span className="font-playfair italic font-normal">build</span>
          </h1>

          <p className="hero-text text-[clamp(1.125rem,2.5vw,1.5rem)] text-[#666666] max-w-2xl mb-12 leading-relaxed">
            <span className="bg-[#7FFFD4]/30 px-1">HFT-KSA</span> creates stunning, high-performing websites
            for ambitious businesses. This page itself demonstrates our expertise in modern web design,
            clean typography, and seamless user experiences.
          </p>

          <div className="hero-text flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              View Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">See Our Work</Button>
          </div>

          <div className="hero-text grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#E8E8E8]">
            <div>
              <div className="stat-number text-4xl font-bold mb-2" data-target="50" data-suffix="+">0+</div>
              <div className="text-sm text-[#666666] uppercase tracking-wide">Projects</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold mb-2" data-target="98" data-suffix="%">0%</div>
              <div className="text-sm text-[#666666] uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold mb-2" data-target="5" data-suffix="+">0+</div>
              <div className="text-sm text-[#666666] uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function useGSAPAnimations(heroRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".decorative-square", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      gsap.to(".decorative-square", {
        y: "-=20",
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, repeat: -1 },
      });

      gsap.utils.toArray(".animate-section").forEach((section: any) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray(".service-card").forEach((card: any) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray(".stat-number").forEach((stat: any) => {
        const target = parseInt(stat.getAttribute("data-target"));
        gsap.from(stat, {
          innerText: 0,
          duration: 2,
          ease: "power1.inOut",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            stat.innerText = Math.ceil(stat.innerText) + (stat.getAttribute("data-suffix") || "");
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, [heroRef]);
}