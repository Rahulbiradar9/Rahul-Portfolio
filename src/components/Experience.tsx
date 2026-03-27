"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, BriefcaseBusiness, Building2 } from "lucide-react";
import { useRef } from "react";

const workData = [
  {
    title: "Intern",
    organization: "HCI Lab IIITS",
    date: "Feb 2026 - Present",
    description: "Engaged in research and development projects at the intersection of human behavior, design, and technology. Collaborating on innovative HCI initiatives to enhance user experience.",
    image: "/iiits.png"
  },
  {
    title: "Intern",
    organization: "Rooman Technologies",
    date: "Feb 2026 - Present",
    description: "Participating in advanced technical training and development workflows utilizing Python and MATLAB methodologies.",
    image: "/rooman.png"
  },
  {
    title: "AICTE & Salesforce Intern",
    organization: "1M1B (1 Million for 1 Billion)",
    date: "May 2025 - Aug 2025",
    description: "Conducted applied AI research developing collaborative solutions for UN Sustainable Development Goals (SDGs). Designed, tested, and refined AI-driven prototypes.",
    image: "/1m1b.png"
  }
];

const educationData = [
  {
    title: "Bachelor of Engineering, Computer Science",
    organization: "Visvesvaraya Technological University (VTU)",
    date: "Dec 2022 - Dec 2026",
    description: "CGPA: 7.81. Focusing on core software engineering principles, algorithms, and computing systems.",
    image: "/vtu.png"
  },
  {
    title: "Higher Education",
    organization: "Tungal Schools",
    date: "May 2020 - May 2022",
    description: "Higher Education Administration & Pre-University Studies.",
    image: "/tungal.png"
  },
  {
    title: "Primary & Secondary Education",
    organization: "Kendriya Vidyalaya",
    date: "Apr 2010 - Mar 2020",
    description: "Graduated with strong foundations in science and mathematics.",
    image: "/kv.png"
  }
];

function TimelineSection({ title, data, fallbackIcon: Icon }: { title: string, data: any[], fallbackIcon: any }) {
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
            {/* Added Image Slot per user request */}
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-white shadow-sm shrink-0 z-10 md:absolute md:-translate-x-1/2 md:left-1/2 overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.organization}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Icon className="w-5 h-5 text-black opacity-60 hidden" />
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

        <TimelineSection title="Work Experience" data={workData} fallbackIcon={Building2} />
        <TimelineSection title="Education" data={educationData} fallbackIcon={GraduationCap} />
        
      </div>
    </section>
  );
}
