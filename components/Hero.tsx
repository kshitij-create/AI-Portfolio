import ControlWidget from './ControlWidget';

export default function Hero() {
  return (
    <div id="hero" className="flex-1 flex flex-col lg:flex-row min-h-[calc(100vh-5rem)] p-8 lg:p-16 gap-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-center z-10">
        <div className="flex items-center gap-4 mb-8 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            CORE ENGINE: ACTIVE
          </div>
          <span className="text-line">{`//`}</span>
          <div>PLATFORM ONLINE</div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tighter mb-8">
          AI & WEB DEV
          <br />
          <span className="text-text-muted">PORTFOLIO</span>
        </h1>

        <div className="pl-4 border-l-2 border-accent mb-12 max-w-xl">
          <p className="text-lg md:text-xl text-text-muted font-mono leading-relaxed">
            Building intelligent systems and scalable web applications through a
            unified approach to engineering, design, and real-time automation.
          </p>
        </div>

        <div className="flex flex-col gap-4 font-mono text-sm tracking-wide">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            FULL-STACK WEB DEVELOPMENT
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            MACHINE LEARNING & AI INTEGRATION
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex items-center justify-center lg:justify-end z-10">
        <ControlWidget />
      </div>
    </div>
  );
}
