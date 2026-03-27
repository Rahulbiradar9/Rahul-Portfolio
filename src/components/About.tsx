"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
        >
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight sticky top-24">
              About
            </h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9 space-y-8 text-left">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground font-light tracking-tight">
              I am a software engineer focused on building high-quality, scalable web applications. My work spans across the full stack, from <span className="font-medium text-foreground">responsive front-end interfaces</span> to <span className="font-medium text-foreground">robust back-end systems</span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
              I believe in writing clean, maintainable code and building products that solve real problems. Whether I'm working on complex data integrations or intuitive user journeys, I focus on delivering practical, performant solutions that provide immediate value to users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
