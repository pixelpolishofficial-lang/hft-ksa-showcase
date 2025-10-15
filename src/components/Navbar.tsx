"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Front-end Development", href: "#frontend" },
      { label: "Back-end Development", href: "#backend" },
      { label: "Responsive Design", href: "#responsive" },
    ],
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    dropdown: [
      { label: "Web Applications", href: "#web-apps" },
      { label: "E-commerce", href: "#ecommerce" },
      { label: "Landing Pages", href: "#landing" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 12]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string, hasDropdown: boolean) => {
    setHoveredItem(label);
    if (hasDropdown) {
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      ref={navRef}
      style={{ opacity: navOpacity }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]"
    >
      <div className="glass-effect rounded-full px-8 py-4 border border-gray-200 dark:border-gray-600 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HFT<span className="text-[var(--color-mint)]">-</span>KSA
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label, !!item.dropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.a
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-mint transition-colors flex items-center gap-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {hoveredItem === item.label && (
                    <motion.div
                      layoutId="navHighlight"
                      className="absolute inset-0 bg-mint/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 min-w-[220px] glass-effect rounded-2xl border border-gray-200 dark:border-gray-600 shadow-xl overflow-hidden"
                  >
                    {item.dropdown.map((subItem, index) => (
                      <motion.a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={closeDropdown}
                        className="block px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-mint/10 hover:text-mint transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        {subItem.label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" className="hidden md:flex">
              Get Started
            </Button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-mint/10 rounded-full transition-colors text-gray-900 dark:text-gray-100"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-600"
          >
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium hover:bg-mint/10 rounded-lg transition-colors text-gray-900 dark:text-gray-100"
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-xs hover:bg-mint/10 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}