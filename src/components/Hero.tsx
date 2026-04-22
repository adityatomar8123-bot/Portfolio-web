"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" id="hero">
      <div className="container mx-auto px-6 max-w-5xl relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 py-2 rounded-full glass text-sm font-medium border-white/10"
          >
            👋 Welcome to my portfolio
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight text-white">
            Hi, I'm <br />
            ADITYA PRATAP SINGH TOMAR
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light">
            A passionate <span className="text-white/90 font-medium">Software Developer</span> crafting beautiful, performant, and scalable web experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center w-full">
            <Link 
              href="#projects"
              className="px-8 py-4 bg-white text-black font-medium rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              View Projects <ArrowRight size={20} />
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-4 glass border border-white/10 text-white font-medium rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
