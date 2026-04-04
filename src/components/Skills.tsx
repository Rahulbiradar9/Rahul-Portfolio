"use client";

import { motion } from "framer-motion";
import { Code2, LayoutTemplate, Server, Database, BrainCircuit, Wrench } from "lucide-react";
import { 
  SiC, SiCplusplus, SiPython, 
  SiReact, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiFastapi,
  SiPostgresql, SiMongodb,
  SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiOpencv,
  SiGit, SiGithub, SiJupyter, SiLinux
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
    ],
  },
  {
    title: "Frontend Development",
    icon: LayoutTemplate,
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend Architecture",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "RESTful APIs", icon: TbApi },
    ],
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "OpenCV", icon: SiOpencv },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Linux", icon: SiLinux },
    ],
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
              Technical Skills
            </h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9 flex flex-col">
            {skillCategories.map((cat, i) => {
              const CategoryIcon = cat.icon;
              return (
                <div 
                  key={cat.title} 
                  className="py-14 border-b border-black/10 dark:border-white/10 last:border-0 grid grid-cols-1 sm:grid-cols-4 gap-8 items-start group"
                >
                  <div className="sm:col-span-1 flex items-center gap-3">
                    <CategoryIcon className="w-6 h-6 text-foreground opacity-60 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-base font-semibold text-foreground tracking-wide">{cat.title}</h3>
                  </div>
                  <div className="sm:col-span-3 flex flex-wrap gap-3">
                    {cat.skills.map(skill => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          key={skill.name}
                          className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-foreground bg-card rounded-xl border border-black/10 dark:border-white/10 shadow-sm hover:shadow-[var(--shadow-apple-hover)] transition-all cursor-default"
                        >
                          <SkillIcon className="w-4 h-4 text-foreground opacity-80" />
                          <span>{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
