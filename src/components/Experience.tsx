"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";
import { useRef } from "react";

const workData = [
  {
    title: "Software Engineer",
    organization: "Tech Solutions Inc.",
    date: "2023 - Present",
    description: "Developing and maintaining full-stack web applications. Focus on improving performance and writing clean, testable code.",
  },
  {
    title: "Frontend Developer",
    organization: "Creative Agency",
    date: "2021 - 2023",
    description: "Built responsive client websites and internal marketing dashboards using React.js and Tailwind CSS.",
  },
];

const educationData = [
  {
    title: "B.S. Computer Science",
    organization: "State University",
    date: "2017 - 2021",
    description: "Studied core computing principles, algorithms, and software engineering practices.",
  },
];

function TimelineSection({ title, data, Icon }: { title: string, data: any[], Icon: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="mb-24 last:mb-0">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-center mb-16"
      >
        {title}
      </motion.h3>

      <div ref={containerRef} className="space-y-12 relative max-w-4xl mx-auto">
        <motion.div
          className="absolute top-0 bottom-0 left-[23px] md:left-1/2 w-[2px] bg-black/10 dark:bg-white/10 origin-top rounded-full"
          style={{ scaleY }}
        />

        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-background shadow-sm shrink-0 z-10 md:absolute md:-translate-x-1/2 md:left-1/2"
            >
              <Icon className="w-5 h-5 text-foreground opacity-80" />
            </div>

            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "var(--shadow-apple-hover)" }}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-card border border-black/5 dark:border-white/10 shadow-[var(--shadow-apple)] transition-all duration-300"
            >
              <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2">
                <h4 className="text-xl font-semibold text-foreground tracking-tight">{item.title}</h4>
                <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit mt-2 xl:mt-0">
                  {item.date}
                </span>
              </div>
              <h5 className="text-sm font-medium text-foreground opacity-80 mb-4">{item.organization}</h5>
              <p className="text-muted-foreground leading-relaxed text-sm font-light border-t border-black/5 dark:border-white/5 pt-4">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground text-center"
          >
            Background
          </motion.h2>
        </div>

        <TimelineSection title="Work Experience" data={workData} Icon={BriefcaseBusiness} />
        <TimelineSection title="Education" data={educationData} Icon={GraduationCap} />
        
      </div>
    </section>
  );
}
