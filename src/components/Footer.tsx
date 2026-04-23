import Link from "next/link";
import { Code, Briefcase, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white/60 text-sm">
          © {new Date().getFullYear()} Aditya Pratap Singh Tomar. All rights reserved.
        </div>
        
        <div className="flex gap-4">
          <Link href="https://github.com/adityatomar8123-bot" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand transition-colors">
            <Code size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/aditya-pratap-singh-tomar-2b35193a6/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand transition-colors">
            <Briefcase size={20} />
          </Link>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=adityatomar8123@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand transition-colors">
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
