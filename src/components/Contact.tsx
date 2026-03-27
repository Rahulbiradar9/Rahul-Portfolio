"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-muted/80 backdrop-blur-sm shadow-sm"
          >
            <Terminal className="w-4 h-4 text-foreground text-opacity-70" />
            <span className="text-xs font-semibold tracking-wide text-foreground uppercase opacity-80">Contact</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground"
          >
            Let's connect.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-semibold text-foreground tracking-tight">Get in Touch</h3>
            <p className="text-muted-foreground leading-relaxed font-light">
              I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, I will try my best to get back to you!
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: <FaGithub size={20} />, href: "#" },
                { icon: <FaLinkedin size={20} />, href: "#" },
                { icon: <FaTwitter size={20} />, href: "#" }
              ].map((social, i) => (
                <Link key={i} href={social.href}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl bg-card border border-black/5 dark:border-white/10 text-foreground hover:bg-muted shadow-[var(--shadow-apple)] transition-colors"
                  >
                    {social.icon}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 p-8 md:p-12 rounded-[2rem] bg-card border border-black/5 dark:border-white/10 shadow-[var(--shadow-apple)] relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 mt-4 bg-foreground text-background rounded-xl font-medium shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
