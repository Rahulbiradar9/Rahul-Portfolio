"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
        >
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight sticky top-24">
              Projects
            </h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9 flex flex-col">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="py-12 border-b border-black/5 dark:border-white/5 last:border-0 group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-foreground tracking-tight group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground mt-1 block">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-4 text-muted-foreground">
                    <Link href={project.github} className="hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium">
                      Code <Code className="w-4 h-4" />
                    </Link>
                    <Link href={project.live} className="hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium">
                      Live <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-muted-foreground font-light mb-6 md:max-w-3xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground border border-black/5 dark:border-white/5 rounded-full"
                    >
                      {t}
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
