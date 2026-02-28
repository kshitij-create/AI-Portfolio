import { Briefcase, GraduationCap, Code } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Web Dev Intern — BlueStock Company',
      type: 'Internship',
      duration: '1 March 2026 — 31 March 2026 · 1 Month',
      location: 'Remote',
      description: 'Completed a one-month remote web development internship at BlueStock Company, focusing on building and optimizing frontend components and web interfaces.',
      tags: ['Web Development', 'Frontend', 'Internship'],
      icon: <Code className="w-4 h-4" />
    },
    {
      role: 'Freelance Web Developer',
      type: 'Self-Employed',
      duration: '2022 — Present · 3 Years',
      location: 'Navi Mumbai, India · Remote',
      description: 'Built and delivered web projects for clients independently — handling everything from initial design in Figma to final deployment. Specialised in responsive websites, interactive UIs, and React-based web apps.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma', 'Client Work'],
      icon: <Code className="w-4 h-4" />
    },
    {
      role: 'AI & Automation Developer',
      type: 'Self-Initiated',
      duration: '2025 — Present',
      location: 'Navi Mumbai, India',
      description: 'Transitioned into AI engineering — building automation workflows, LLM-powered tools, and chatbot integrations. Applying skills from Diploma coursework directly into real-world projects.',
      tags: ['Python', 'n8n', 'Make.com', 'ChatGPT API', 'Agentic AI'],
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      role: 'Diploma Student — Artificial Intelligence & Machine Learning',
      type: 'Education',
      duration: '2025 — Present',
      location: 'Navi Mumbai, Maharashtra',
      description: 'Formally studying AI & ML fundamentals while simultaneously applying concepts in live projects. Bridging academic theory with hands-on engineering.',
      tags: ['AI/ML', 'Python', 'C++', 'Machine Learning'],
      icon: <GraduationCap className="w-4 h-4" />
    }
  ];

  return (
    <section id="experience" className="py-24 px-8 lg:px-16 border-t border-line relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              MODULE 03
            </div>
            <span className="text-line">{`//`}</span>
            <div>TIMELINE</div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            My Journey
          </h2>
        </div>

        <div className="relative border-l border-line ml-4 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot/icon */}
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full border border-line bg-[#050505] flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/50 transition-colors">
                {exp.icon}
              </div>
              
              <div className="border border-line bg-[#0a0a0a] p-6 md:p-8 hover:border-accent/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-2">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-text-muted">
                      <span className="text-accent">{exp.type}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-text-muted border border-line/50 px-3 py-1.5 rounded bg-[#141414] whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>
                
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono border border-line px-2 py-1 rounded text-text-muted bg-[#141414]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pl-4 md:pl-6 border-l border-transparent">
          <div className="flex items-center gap-3 text-sm font-mono text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <p className="italic">
              3 years building · currently levelling up into AI · always open to the next interesting problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
