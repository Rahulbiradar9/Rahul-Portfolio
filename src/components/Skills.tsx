"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Globe, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: <BrainCircuit className="w-5 h-5 text-foreground" />,
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "NLP", "Computer Vision"],
  },
  {
    title: "Frontend Development",
    icon: <Globe className="w-5 h-5 text-foreground" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Development",
    icon: <Database className="w-5 h-5 text-foreground" />,
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools & Infrastructure",
    icon: <Cpu className="w-5 h-5 text-foreground" />,
    skills: ["Git", "Docker", "AWS", "Vercel", "Linux"],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 space-y-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Here are the languages, frameworks, and tools I work with.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, boxShadow: "var(--shadow-apple-hover)" }}
              className="p-8 rounded-3xl bg-card border border-black/5 dark:border-white/10 shadow-[var(--shadow-apple)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-muted border border-black/5 dark:border-white/5">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-medium text-foreground tracking-tight">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-muted-foreground bg-muted/50 rounded-lg border border-black/5 dark:border-white/5 hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
