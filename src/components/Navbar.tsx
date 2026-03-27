"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Contact", href: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "";
      for (const link of navLinks) {
        const element = document.getElementById(link.href);
        if (element && window.scrollY >= element.offsetTop - 300) {
          current = link.href;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 transition-all duration-300",
        scrolled ? "pt-4" : "pt-6"
      )}
    >
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex items-center gap-1 md:gap-2 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 relative",
          "bg-white/70 dark:bg-black/70 backdrop-blur-xl",
          "shadow-sm transition-all duration-300",
          scrolled ? "shadow-md dark:shadow-white/5" : ""
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={`#${link.href}`}
            className="relative px-4 py-2 text-xs md:text-sm font-medium transition-colors duration-200"
          >
            {activeSection === link.href && (
              <motion.div
                layoutId="navBlobApple"
                className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 transition-colors",
                activeSection === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}
