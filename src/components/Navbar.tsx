"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex items-center gap-6 px-6 py-3 rounded-full border border-black/5 dark:border-white/10",
          "bg-white/70 dark:bg-black/70 backdrop-blur-xl",
          "shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)] transition-all duration-300",
          scrolled ? "shadow-lg" : ""
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}
