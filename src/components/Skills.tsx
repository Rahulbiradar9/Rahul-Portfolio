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
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
    ],
  },
  {
    title: "Frontend Development",
    icon: LayoutTemplate,
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend Architecture",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "RESTful APIs", icon: TbApi, color: "#FF5A5F" },
    ],
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Technical Mastery
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              My evolving toolkit for building robust systems, intelligent models, and premium user experiences.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4">
          {skillCategories.map((cat, i) => {
            const CategoryIcon = cat.icon;
            return (
              <motion.div 
                key={cat.title} 
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start md:items-center py-10 border-b border-black/5 dark:border-white/5 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="md:col-span-4 lg:col-span-3 flex items-center gap-4">
                  <div className="p-3 bg-secondary/20 rounded-2xl hidden sm:block">
                    <CategoryIcon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground tracking-wide">{cat.title}</h3>
                </div>
                
                <div className="md:col-span-8 lg:col-span-9 flex flex-wrap gap-4">
                  {cat.skills.map(skill => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3.5 px-6 py-4 text-lg font-semibold text-foreground/90 bg-secondary/10 dark:bg-card rounded-2xl border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:-translate-y-1 transition-all shadow-sm hover:shadow-md cursor-default group"
                      >
                        <SkillIcon 
                          className="w-7 h-7 opacity-90 transition-transform group-hover:scale-110" 
                          style={{ color: skill.color || "currentColor" }}
                        />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
