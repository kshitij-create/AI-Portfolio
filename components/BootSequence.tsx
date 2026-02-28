'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sequence = [
      "INITIALIZING KERNEL...",
      "LOADING MODULES [██████████] 100%",
      "MOUNTING VIRTUAL DOM...",
      "ESTABLISHING SECURE CONNECTION...",
      "FETCHING ASSETS...",
      "SYSTEM READY."
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < sequence.length) {
        setLines(prev => [...prev, sequence[currentLine]]);
        setProgress(Math.floor(((currentLine + 1) / sequence.length) * 100));
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center font-mono text-xs text-text-muted"
      exit={{ y: '-100%', opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="w-full max-w-md p-8">
        <div className="mb-8 flex justify-between items-end border-b border-line pb-2">
          <div className="text-accent flex items-center gap-2">
            <span className="w-2 h-2 bg-accent animate-pulse" />
            KSHITIJ_OS v2.0
          </div>
          <div>{progress}%</div>
        </div>
        <div className="space-y-2 h-40">
          {lines.map((line, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent mr-2">{`>`}</span> {line}
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-3 bg-accent ml-2"
          />
        </div>
      </div>
    </motion.div>
  );
}
