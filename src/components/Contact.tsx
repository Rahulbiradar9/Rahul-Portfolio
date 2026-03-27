"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-background">
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
              Contact
            </h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <div className="pb-12 border-b border-black/5 dark:border-white/5">
              <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground font-light tracking-tight max-w-2xl">
                I'm always open to new opportunities and collaborations. If you have a question or just want to say hi, I will try my best to get back to you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8 items-start sm:items-center">
                <a 
                  href="mailto:hello@example.com"
                  className="px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  Send an Email
                  <Send className="w-4 h-4" />
                </a>

                <div className="flex gap-4 sm:ml-4">
                  {[
                    { icon: <FaGithub size={20} className="text-foreground" />, href: "#" },
                    { icon: <FaLinkedin size={20} className="text-foreground" />, href: "#" },
                    { icon: <FaTwitter size={20} className="text-foreground" />, href: "#" }
                  ].map((social, i) => (
                    <Link key={i} href={social.href}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="p-3 rounded-full bg-muted border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                      >
                        {social.icon}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
