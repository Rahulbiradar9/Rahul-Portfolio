"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Database, Layout, Smartphone } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5" />,
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "Tools & DevOps",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
  },
];

export function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)]"
          >
            <Code2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium tracking-wide">Technical Arsenal</span>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="p-8 rounded-3xl bg-card border border-black/5 dark:border-white/10 shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)] hover:-translate-y-2 hover:shadow-[var(--shadow-float-hover)] dark:hover:shadow-[var(--shadow-float-hover-dark)] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 text-foreground">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center text-muted-foreground font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
