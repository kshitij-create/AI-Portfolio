'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import BootSequence from './BootSequence';
import CustomCursor from './CustomCursor';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    if (booting) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [booting]);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {booting && <BootSequence onComplete={() => setBooting(false)} />}
      </AnimatePresence>
      <div className={`transition-opacity duration-1000 ${booting ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}
