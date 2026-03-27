"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Code } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "ecospace",
    title: "EcoSpace Connect",
    description: "A platform for sustainable building materials. Built with a responsive Next.js frontend and Trpc for type-safe API communication.",
    tech: ["Next.js", "Trpc", "Tailwind CSS", "Prisma"],
    github: "#",
    live: "#",
    category: "Full Stack",
  },
  {
    id: "neuroflow",
    title: "Neuroflow Analytics",
    description: "A data analytics dashboard for healthcare providers. Processes JSON records and provides statistical summaries using a Python backend.",
    tech: ["Python", "FastAPI", "React", "Docker", "PostgreSQL"],
    github: "#",
    live: "#",
    category: "Data Science",
  },
  {
    id: "aura",
    title: "Aura UI Library",
    description: "An open-source React component library focused on accessibility and modern design. Features smooth framer-motion animations.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
    category: "Open Source",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-muted/80 backdrop-blur-sm shadow-sm"
          >
            <FolderGit2 className="w-4 h-4 text-foreground text-opacity-70" />
            <span className="text-xs font-semibold tracking-wide text-foreground uppercase opacity-80">Portfolio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: "var(--shadow-apple-hover)" }}
              className="group h-full flex flex-col justify-between p-8 rounded-[2rem] bg-card border border-black/5 dark:border-white/10 shadow-[var(--shadow-apple)] transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-3 text-muted-foreground">
                    <Link href={project.github} className="hover:text-foreground transition-colors">
                      <Code className="w-5 h-5" />
                    </Link>
                    <Link href={project.live} className="hover:text-foreground transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-foreground tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 text-foreground/80 rounded-md border border-black/5 dark:border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
