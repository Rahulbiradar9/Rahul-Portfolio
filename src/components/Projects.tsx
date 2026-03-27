"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Code } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "EcoSpace Connect",
    description: "A centralized platform for sustainable building materials. Includes live inventory tracking, carbon footprint calculator, and a real-time vendor chat system built on WebSockets.",
    tech: ["Next.js", "Trpc", "Tailwind CSS", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "Neuroflow Analytics",
    description: "Predictive backend analytics engine for healthcare providers. Ingests massive JSON records, normalizes patient data securely, and uses statistical models to flag anomalies.",
    tech: ["Python", "FastAPI", "React", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Aura UI Library",
    description: "An open-source, highly customizable React component library featuring headless accessible components and beautiful floating animations using framer-motion.",
    tech: ["React", "TypeScript", "Framer Motion"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)]"
          >
            <FolderGit2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium tracking-wide">Selected Works</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between p-8 rounded-3xl bg-card border border-black/5 dark:border-white/10 shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)] hover:-translate-y-2 hover:shadow-[var(--shadow-float-hover)] dark:hover:shadow-[var(--shadow-float-hover-dark)] transition-all duration-500"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-black dark:group-hover:from-gray-300 dark:group-hover:to-white transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <Link
                  href={project.github}
                  className="p-2 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors duration-300"
                  aria-label="GitHub Repository"
                >
                  <Code className="w-5 h-5" />
                </Link>
                <Link
                  href={project.live}
                  className="p-2 rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors duration-300"
                  aria-label="Live Project"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
