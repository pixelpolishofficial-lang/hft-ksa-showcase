"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Code2, 
  Palette, 
  Zap, 
  ShoppingCart, 
  Smartphone, 
  Shield 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites built with React, Next.js, and modern technologies for maximum performance and scalability",
    label: "Development",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered design solutions that drive engagement and conversion rates",
    label: "Design",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast websites with optimized loading times and seamless user experience",
    label: "Performance",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payment integration, inventory management, and analytics",
    label: "E-commerce",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile applications for iOS, Android, and web platforms",
    label: "Mobile",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, security patches, and maintenance for your digital presence",
    label: "Support",
    gradient: "from-gray-500 to-slate-600"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      variants={staggerItem}
      className="group relative"
    >
      <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-mint/10">
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
        
        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-3">
            <span className="text-sm font-medium text-mint uppercase tracking-wide">
              {service.label}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-mint transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {service.description}
          </p>
        </div>
        
        {/* Hover effect line */}
        <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-mint to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};

export default function ServiceCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </motion.div>
  );
}