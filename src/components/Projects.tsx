"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Jeevanamrit",
      subtitle: "Ayurvedic Health Dashboard",
      description: "Wellness dashboard for doctors and patients. Dosha-based diet planning, Ayurvedic health questionnaires, and clinical reporting.",
      tech: ["React", "TypeScript", "Supabase"],
      github: "https://github.com",
      demo: "https://example.com",
      year: "2025",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Featured <span className="text-brand">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group glass rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full transition-all"
              >

                
                <div className="p-6 flex flex-col flex-grow">
                  {project.year && (
                    <span className="text-pink-400 font-mono text-xs mb-2 block tracking-wider font-bold">
                      {project.year}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  {project.subtitle && (
                    <h4 className="text-pink-400 text-sm font-medium mb-4">{project.subtitle}</h4>
                  )}
                  <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-pink-500/10 text-pink-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <Code size={16} /> Code
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-brand hover:text-brand/80 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
