"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "NLP", "Computer Vision"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "Docker", "AWS", "Vercel", "Linux"],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
        >
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight sticky top-24">
              Skills
            </h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9 flex flex-col">
            {skillCategories.map((cat, i) => (
              <div 
                key={cat.title} 
                className="py-8 border-b border-black/5 dark:border-white/5 last:border-0 grid grid-cols-1 sm:grid-cols-4 gap-4 items-start"
              >
                <div className="sm:col-span-1">
                  <h3 className="text-sm font-medium text-foreground">{cat.title}</h3>
                </div>
                <div className="sm:col-span-3 flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-muted-foreground bg-muted/50 rounded-lg border border-black/5 dark:border-white/5 hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
