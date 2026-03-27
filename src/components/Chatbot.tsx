"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Network } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { playClickSound, playHoverSound } from "@/lib/sounds";

interface Message {
  role: "system" | "user";
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: "Agent Core online. How can I assist you with Rahul's portfolio?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    playClickSound();
    
    setMessages(prev => [...prev, { role: "user", content: input }]);
    const userMsg = input;
    setInput("");

    setTimeout(() => {
      let reply = "Processing command...";
      if (userMsg.toLowerCase().includes("contact") || userMsg.toLowerCase().includes("email")) {
        reply = "You can establish a connection via the contact terminal below. I will alert Rahul immediately.";
      } else if (userMsg.toLowerCase().includes("skills") || userMsg.toLowerCase().includes("tech")) {
        reply = "Rahul's core matrix revolves around Machine Learning, Next.js, and Web3 architectures.";
      } else if (userMsg.toLowerCase().includes("projects") || userMsg.toLowerCase().includes("work")) {
        reply = "Accessing deployment logs... Please review the 'Selected Works' sector for high-fidelity 3D and Full Stack projects.";
      } else {
        reply = "Query acknowledged. My sentient capabilities are currently limited in this demo environment, but Rahul is a highly capable organic intelligence you should definitely hire.";
      }
      setMessages(prev => [...prev, { role: "system", content: reply }]);
      playHoverSound();
    }, 1000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onHoverStart={playHoverSound}
        onClick={() => { playClickSound(); setIsOpen(true); }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,240,255,0.6)" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-black border border-neon-cyan text-neon-cyan shadow-[var(--shadow-neon)] z-50 flex items-center justify-center overflow-hidden group"
      >
        <div className="absolute inset-0 bg-neon-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <Bot className="w-6 h-6 relative z-10" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-24 right-6 w-80 md:w-96 rounded-2xl bg-[#09090b]/90 backdrop-blur-2xl border border-neon-cyan/30 shadow-[var(--shadow-neon)] z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-neon-cyan animate-pulse" />
                <span className="text-sm font-bold tracking-widest text-white uppercase">Aria Core v2.0</span>
              </div>
              <button 
                onClick={() => { playClickSound(); setIsOpen(false); }}
                className="p-1 rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <span className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${msg.role === "user" ? "text-neon-purple" : "text-neon-cyan"}`}>
                    {msg.role === "user" ? "Guest" : "Aria"}
                  </span>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === "user" 
                        ? "bg-neon-purple/20 border border-neon-purple/30 text-white rounded-br-sm" 
                        : "bg-white/5 border border-white/10 text-gray-200 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 bg-black/50">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Query system..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors placeholder:text-white/20"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 rounded-xl bg-neon-cyan text-black disabled:opacity-50 transition-opacity hover:bg-white"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
