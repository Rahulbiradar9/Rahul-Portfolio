"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)]">
            <User className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium tracking-wide">About Me</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Crafting Digital <br className="hidden md:block" /> Experiences
          </h2>

          <div className="relative p-8 md:p-12 mt-12 w-full rounded-3xl bg-card border border-black/5 dark:border-white/10 shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)] text-left hover:shadow-[var(--shadow-float-hover)] dark:hover:shadow-[var(--shadow-float-hover-dark)] transition-shadow duration-500">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              I'm a passionate software engineer focused on building clean, modern, and highly interactive web experiences. 
              My approach blends technical precision with a strong eye for design, ensuring that every project not only functions flawlessly but feels incredibly intuitive and responsive to the user.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-4">
              With a background in both frontend and backend technologies, I bridge the gap between aesthetics and performance—creating resilient architectures under the hood while maintaining pixel-perfect, completely frictionless user interfaces on the surface.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
