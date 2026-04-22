"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "TechNova Solutions",
      date: "2021 - Present",
      description: "Leading the frontend team in building scalable SaaS applications. Improved load times by 40% and implemented a company-wide design system.",
    },
    {
      role: "Software Developer",
      company: "Digital Creations",
      date: "2018 - 2021",
      description: "Developed and maintained full-stack web applications for enterprise clients using React, Node.js, and PostgreSQL.",
    },
    {
      role: "Junior Web Developer",
      company: "Creative Agency",
      date: "2016 - 2018",
      description: "Built responsive landing pages and e-commerce websites. Worked closely with designers to ensure pixel-perfect implementations.",
    },
  ];

  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
            My <span className="text-accent">Experience</span>
          </h2>

          <div className="relative border-l border-white/10 ml-3 md:ml-0 md:border-l-0 md:border-t md:flex md:gap-8 md:pt-8 md:mt-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-10 ml-8 md:ml-0 md:mb-0 md:flex-1 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 rounded-full bg-accent border-4 border-background -left-[39px] top-1 md:-top-[39px] md:left-1/2 md:-translate-x-1/2" />
                
                <div className="glass p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors relative">
                  {/* Pointer arrow for mobile (left) */}
                  <div className="absolute w-3 h-3 bg-white/5 border-l border-b border-white/5 rotate-45 -left-[7px] top-5 md:hidden" />
                  {/* Pointer arrow for desktop (top) */}
                  <div className="hidden md:block absolute w-3 h-3 bg-white/5 border-t border-l border-white/5 rotate-45 -top-[7px] left-1/2 -translate-x-1/2" />
                  
                  <span className="text-sm font-medium text-brand mb-2 block">{exp.date}</span>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-white/70 font-medium mb-4">{exp.company}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
