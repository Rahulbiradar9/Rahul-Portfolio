"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background px-6 pt-20">
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-black/[0.02] dark:from-white/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            className="flex-1 space-y-8 text-center md:text-left w-full"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground bg-muted rounded-full border border-black/5 dark:border-white/5">
                Software Engineer
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground"
            >
              Hi, I'm Rahul.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground font-light tracking-wide max-w-2xl mx-auto md:mx-0">
              Building robust web applications and <span className="font-medium text-foreground">digital products</span>.
            </motion.p>

            <motion.p variants={itemVariants} className="max-w-xl mx-auto md:mx-0 text-muted-foreground leading-relaxed">
              I am a full-stack developer specializing in creating high-performance, scalable web applications with a strong focus on clean code and exceptional user experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Link href="#projects">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium transition-colors hover:opacity-90 shadow-md"
                >
                  View Selected Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              
              <Link href="#contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 bg-card border border-black/5 dark:border-white/10 text-foreground rounded-full text-sm font-medium transition-colors hover:bg-muted shadow-[var(--shadow-apple)]"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Photo Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-80 md:h-80 group rounded-full overflow-hidden border border-black/5 dark:border-white/10 shadow-[var(--shadow-apple)] bg-muted/50 flex items-center justify-center">
              {/* Photo Image Tag */}
              <img 
                src="/profile.png" 
                alt="Profile photo of Rahul" 
                className="w-full h-full object-cover text-transparent"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback internal structure when photo is missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground hidden p-6 text-center">
                <span className="text-sm font-semibold tracking-widest uppercase opacity-60">Replace w/ Photo</span>
              </div>
              {/* Subtle hover overlay effect */}
              <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-foreground/0 group-hover:ring-foreground/10 transition-all duration-500 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
