"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)]"
          >
            <Send className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium tracking-wide">Get In Touch</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Let's build something <br className="hidden md:block" /> amazing together.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl p-8 md:p-12 rounded-3xl bg-card border border-black/5 dark:border-white/10 shadow-[var(--shadow-float)] dark:shadow-[var(--shadow-float-dark)]"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-2xl bg-muted/50 border border-black/5 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all font-medium placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-2xl bg-muted/50 border border-black/5 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all font-medium placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-2xl bg-muted/50 border border-black/5 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all font-medium placeholder:text-muted-foreground resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-foreground text-background rounded-2xl font-medium hover:shadow-[var(--shadow-float-hover)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
