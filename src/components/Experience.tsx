"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const education = [
    {
      title: "B.Tech CSE",
      institution: "Amity University Gwalior",
      date: "Graduating in 2029",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering, focusing on software development, data structures, and algorithms.",
    }
  ];

  const experience = [
    {
      title: "Smart India Hackathon",
      organization: "Internal Round",
      date: "Achievement",
      description: "Successfully cleared the internal round of SIH, showcasing strong problem-solving and team collaboration skills.",
    },
    {
      title: "7th Position in CTF",
      organization: "Amity University Gwalior",
      date: "Achievement",
      description: "Secured 7th position in the Capture The Flag (CTF) cybersecurity competition held at the university.",
    },
    {
      title: "Active Member",
      organization: "Amity Coding Club",
      date: "Present",
      description: "Present member of the Amity Coding Club, participating in competitive programming and collaborative tech events.",
    },
  ];

  const renderTimeline = (items: {title: string, institution?: string, organization?: string, date: string, description: string}[], isEducation: boolean) => (
    <div className="relative border-l border-white/10 ml-3 md:ml-0 md:border-l-0 md:border-t md:flex md:gap-8 md:pt-8 mt-12 w-full">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.15 }}
          className="mb-10 ml-8 md:ml-0 md:mb-0 md:flex-1 relative w-full"
        >
          {/* Timeline Dot */}
          <div className={`absolute w-4 h-4 rounded-full ${isEducation ? 'bg-brand' : 'bg-accent'} border-4 border-background -left-[39px] top-1 md:-top-[39px] md:left-1/2 md:-translate-x-1/2`} />
          
          <motion.div whileHover={{ scale: 1.02 }} className="glass p-6 rounded-2xl border border-white/5 hover:bg-white/[0.05] transition-all relative h-full">
            {/* Pointer arrow for mobile (left) */}
            <div className="absolute w-3 h-3 bg-white/5 border-l border-b border-white/5 rotate-45 -left-[7px] top-5 md:hidden" />
            {/* Pointer arrow for desktop (top) */}
            <div className="hidden md:block absolute w-3 h-3 bg-white/5 border-t border-l border-white/5 rotate-45 -top-[7px] left-1/2 -translate-x-1/2" />
            
            <span className={`text-sm font-medium ${isEducation ? 'text-brand' : 'text-accent'} mb-2 block`}>{item.date}</span>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <h4 className="text-white/70 font-medium mb-4">{item.institution || item.organization}</h4>
            <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
              My <span className="text-brand">Education</span>
            </h2>
            {renderTimeline(education, true)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
              My <span className="text-accent">Experience</span>
            </h2>
            {renderTimeline(experience, false)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
