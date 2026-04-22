import Link from "next/link";
import { Code, Briefcase, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white/60 text-sm">
          © {new Date().getFullYear()} Software Developer. All rights reserved.
        </div>
        
        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank" className="text-white/60 hover:text-brand transition-colors">
            <Code size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-white/60 hover:text-brand transition-colors">
            <Briefcase size={20} />
          </Link>
          <Link href="https://example.com" target="_blank" className="text-white/60 hover:text-brand transition-colors">
            <Globe size={20} />
          </Link>
          <Link href="mailto:hello@example.com" className="text-white/60 hover:text-brand transition-colors">
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
