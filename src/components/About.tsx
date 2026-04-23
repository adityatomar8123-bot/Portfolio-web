"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal, Layout } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Frontend Development", icon: <Layout className="text-brand" />, desc: "React, Next.js, Tailwind CSS, Framer Motion" },
    { name: "Backend Development", icon: <Database className="text-accent" />, desc: "Node.js, Python, PostgreSQL, MongoDB" },
    { name: "Architecture", icon: <Code2 className="text-pink-500" />, desc: "System Design, Microservices, API Development" },
    { name: "DevOps & Tools", icon: <Terminal className="text-emerald-500" />, desc: "Git, Docker, AWS, CI/CD" },
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            About <span className="text-brand">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white/70 space-y-4 text-lg font-light leading-relaxed">
              <p>
                I’m a CS student who codes, builds, and occasionally breaks things just to learn how they work. I enjoy solving problems using data structures and algorithms, and I’m always chasing that “this actually works!” moment. Right now, I’m focused on strengthening my problem-solving skills and building projects that stand out.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-6 rounded-2xl hover:bg-white/[0.05] transition-all border border-white/5"
                >
                  <div className="mb-4 bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{skill.name}</h3>
                  <p className="text-sm text-white/50">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
