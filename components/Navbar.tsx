import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-line h-16 md:h-20 px-4 md:px-8 sticky top-0 bg-bg/90 backdrop-blur-sm z-50">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          PORTFOLIO<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex items-center border border-line rounded px-3 py-1 text-xs font-mono text-text-muted">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          [ ENV: PRODUCTION ]
        </div>
      </div>

      <div className="hidden lg:flex items-center h-full">
        {['EXPERTISE', 'PROJECTS', 'EXPERIENCE', 'GITHUB'].map((item) => (
          <Link
            key={item}
            href={item === 'GITHUB' ? 'https://github.com/kshitij-create' : `#${item.toLowerCase().replace(' ', '-')}`}
            target={item === 'GITHUB' ? '_blank' : '_self'}
            rel={item === 'GITHUB' ? 'noopener noreferrer' : ''}
            className="h-full flex items-center px-6 text-xs font-mono text-text-muted hover:text-white hover:bg-white/5 border-l border-line transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center h-full border-l border-line">
        <Link
          href="#contact"
          className="h-full flex items-center px-6 bg-accent text-white text-xs font-mono hover:bg-accent/90 transition-colors gap-2"
        >
          HIRE ME <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
