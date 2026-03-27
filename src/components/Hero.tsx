"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Subtle floating background elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-3 py-1 text-xs font-medium bg-muted/50 rounded-full border border-black/5 dark:border-white/10 Backdrop-blur-md">
              Available for work
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white">Rahul</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Software Engineer & Designer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed"
        >
          I build premium, anti-gravity web experiences. Obsessed with clean code, 
          smooth animations, and pixel-perfect design interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="#projects"
            className={cn(
              "group flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-all duration-300",
              "hover:shadow-[var(--shadow-float-hover)] hover:-translate-y-1"
            )}
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className={cn(
              "flex items-center gap-2 px-6 py-3 bg-card border border-black/5 dark:border-white/10 text-foreground rounded-full font-medium transition-all duration-300",
              "hover:shadow-[var(--shadow-float)] dark:hover:shadow-[var(--shadow-float-dark)] hover:-translate-y-1"
            )}
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
