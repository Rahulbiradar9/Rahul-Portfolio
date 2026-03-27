"use client";

import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";

const experienceData = [
  {
    type: "work",
    title: "Software Engineer Intern",
    organization: "Tech Innovators Inc.",
    date: "Summer 2025",
    description: "Engineered high-performance microservices, reducing data retrieval latency by 40%. Implemented responsive and accessible UI components utilized across 3 core product offerings.",
  },
  {
    type: "work",
    title: "Frontend Developer Contract",
    organization: "Creative Studio",
    date: "Jan 2024 - Dec 2024",
    description: "Designed and developed immersive landing pages resulting in a 25% increase in user engagement. Championed a migration to Tailwind CSS saving hours of developer resources.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "University of Technology",
    date: "2022 - 2026",
    description: "Focusing on Software Engineering, Data Structures, and Human-Computer Interaction. Lead Developer of the university Hackathon club.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)]"
          >
            <BriefcaseBusiness className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium tracking-wide">Experience & Education</span>
          </motion.div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/5 bg-card shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)] shrink-0 z-10 md:absolute md:-translate-x-1/2 md:left-1/2">
                {item.type === "work" ? (
                  <BriefcaseBusiness className="w-4 h-4 text-foreground" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-foreground" />
                )}
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-card border border-black/5 dark:border-white/10 shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)] hover:-translate-y-1 hover:shadow-[var(--shadow-float-hover)] dark:hover:shadow-[var(--shadow-float-hover-dark)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                    {item.date}
                  </span>
                </div>
                <h4 className="font-medium text-muted-foreground mb-4">{item.organization}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
