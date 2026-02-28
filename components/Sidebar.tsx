'use client';

import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'expertise', 'projects', 'experience', 'contact'];
      
      // Find the current section based on scroll position
      let current = 1;
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport, or we're inside it
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = i + 1;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (num: number) => {
    const sections = ['hero', 'expertise', 'projects', 'experience', 'contact'];
    const id = sections[num - 1];
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside className="hidden md:flex flex-col w-16 border-r border-line h-[calc(100vh-5rem)] sticky top-20">
      <div className="flex flex-col items-center py-8 gap-8">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => scrollToSection(num)}
            className={`w-8 h-8 flex items-center justify-center text-xs font-mono border cursor-pointer ${
              num === activeSection
                ? 'border-accent text-accent'
                : 'border-line text-text-muted hover:text-white hover:border-white/20 transition-colors'
            }`}
          >
            0{num}
          </button>
        ))}
      </div>
      <div className="mt-auto pb-8 flex justify-center">
        <div className="text-[10px] font-mono text-text-muted tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          NAV_MODULE_V4
        </div>
      </div>
    </aside>
  );
}
