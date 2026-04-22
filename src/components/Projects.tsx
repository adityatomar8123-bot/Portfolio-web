"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with Next.js, Stripe integration, and a Sanity CMS backend. Features real-time inventory and a beautiful dark mode UI.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat interface powered by OpenAI's GPT models. Built with WebSockets for instant message delivery and Framer Motion for smooth interactions.",
      tech: ["React", "Node.js", "Socket.io", "OpenAI"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Crypto Dashboard",
      description: "Financial dashboard tracking cryptocurrency prices in real-time. Features interactive charts, portfolio management, and customizable alerts.",
      tech: ["Vite", "React Query", "Recharts", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Featured <span className="text-brand">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  {/* Using unoptimized generic image source for demo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80">
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
