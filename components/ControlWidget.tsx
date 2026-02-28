'use client';

import { useEffect, useState } from 'react';

export default function ControlWidget() {
  const [logs, setLogs] = useState([
    { time: '10:42:03', text: 'WARN: Latency spike detected (42ms)', type: 'warn' },
    { time: '10:42:03', text: 'Auto-scaling engaged', type: 'info' },
    { time: '10:42:04', text: 'New node provisioned: node-884', type: 'info' },
    { time: '10:42:05', text: 'Syncing database shards...', type: 'info' },
    { time: '10:42:06', text: 'Pipeline throughput: 100%', type: 'info' },
    { time: '10:42:07', text: 'Agent deployed successfully', type: 'info' },
    { time: '10:42:08', text: 'Monitoring active', type: 'info' },
    { time: '10:42:09', text: 'Optimizing cache layer...', type: 'info' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        time: new Date().toLocaleTimeString('en-US', { hour12: false }),
        text: `Processing request: ${Math.random().toString(36).substring(7)}`,
        type: 'info',
      };
      setLogs((prev) => [...prev.slice(1), newLog]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg border border-line bg-[#0a0a0a] rounded-sm overflow-hidden font-mono text-xs">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line">
        <div className="text-text-muted">PORTFOLIO CONTROL INTERFACE</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          ONLINE
        </div>
      </div>

      {/* Stats Area */}
      <div className="flex border-b border-line">
        <div className="flex-1 p-6 border-r border-line flex flex-col justify-center">
          <div className="text-text-muted mb-2">GITHUB COMMITS</div>
          <div className="text-3xl font-bold mb-4">
            23 <span className="text-lg text-text-muted font-normal">/mo</span>
          </div>
          <div className="text-text-muted mb-1">ACTIVE PROJECTS</div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">12</span>
            <span className="bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded text-[10px]">+2</span>
          </div>
        </div>
        <div className="flex-1 p-6 relative flex items-center justify-center overflow-hidden">
          {/* Radar Visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border border-line rounded-full absolute" />
            <div className="w-32 h-32 border border-line rounded-full absolute" />
            <div className="w-16 h-16 border border-line rounded-full absolute" />
            <div className="w-full h-[1px] bg-line absolute" />
            <div className="h-full w-[1px] bg-line absolute" />
            <div className="w-full h-[1px] bg-line absolute rotate-45" />
            <div className="w-full h-[1px] bg-line absolute -rotate-45" />
            <div className="w-2 h-2 bg-white rounded-full absolute shadow-[0_0_10px_white]" />
            <div className="w-1.5 h-1.5 bg-text-muted rounded-full absolute top-1/4 left-1/4" />
            <div className="w-1.5 h-1.5 bg-text-muted rounded-full absolute bottom-1/3 right-1/4" />
          </div>
        </div>
      </div>

      {/* Terminal Logs */}
      <div className="p-4 h-48 overflow-y-auto terminal-scroll bg-[#050505]">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-4 mb-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="text-text-muted shrink-0">{log.time}</div>
            <div className={log.type === 'warn' ? 'text-accent' : 'text-text-muted'}>
              {log.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
