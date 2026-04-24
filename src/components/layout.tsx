import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aditya Tomar — Full Stack Developer',
  description: 'Full Stack Developer crafting performant, visually stunning web experiences with Next.js, TypeScript, and modern technologies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
