import type { Metadata } from 'next';
import './globals.css';
import ScrollVideoBackground from '@/components/ScrollVideoBackground';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aditya Tomar — Full Stack Developer',
  description: 'Full Stack Developer crafting performant, visually stunning web experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
        <CustomCursor />
        <ScrollVideoBackground />
        <Navbar />
        <main className="relative z-10 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}