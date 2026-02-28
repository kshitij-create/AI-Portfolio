import { ExternalLink, Github, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'NewsMonkey',
      tag: 'Featured',
      stack: 'JavaScript · HTML · CSS · News API',
      description: 'A live news aggregator that fetches and displays real-time headlines across categories — Tech, Sports, Business, Entertainment. Built with API integration and dynamic content rendering.',
      link: 'https://github.com/kshitij-create/NewsMonkey',
      linkLabel: 'View on GitHub',
      icon: <Github className="w-4 h-4" />
    },
    {
      title: 'Tesla Landing Page Clone',
      tag: 'UI/UX',
      stack: 'HTML · CSS · JavaScript',
      description: "Pixel-accurate recreation of Tesla's landing page — built to master full-screen scroll sections, video backgrounds, and responsive layout precision.",
      link: 'https://github.com/kshitij-create/Tesla-clone',
      linkLabel: 'View on GitHub',
      icon: <Github className="w-4 h-4" />
    },
    {
      title: 'Drum Kit',
      tag: 'Interactive',
      stack: 'JavaScript · HTML · CSS',
      description: 'An interactive browser-based drum machine triggered by keyboard keys. Demonstrates real-time DOM manipulation, event listeners, and audio handling in vanilla JS.',
      link: 'https://github.com/kshitij-create/Drum-Kit',
      linkLabel: 'View on GitHub',
      icon: <Github className="w-4 h-4" />
    },
    {
      title: 'TinDog',
      tag: 'Responsive',
      stack: 'HTML · CSS · Bootstrap',
      description: 'A fun, responsive landing page for a fictional dog-matching app. Built to sharpen Bootstrap grid layout, component styling, and mobile-first design.',
      link: 'https://github.com/kshitij-create/Tindog-clone',
      linkLabel: 'View on GitHub',
      icon: <Github className="w-4 h-4" />
    },
    {
      title: 'AI Automation Workflows',
      tag: 'AI · Private',
      stack: 'n8n · Make.com · Python · ChatGPT API',
      description: 'A collection of private client-facing and personal automation workflows — including chatbot integrations, data pipelines, and scheduled task automations.',
      link: '#contact',
      linkLabel: 'Available on request',
      icon: <Lock className="w-4 h-4" />
    },
    {
      title: 'Freelance Client Websites',
      tag: 'Freelance · Private',
      stack: 'HTML · CSS · JS · React',
      description: 'Multiple client websites built and delivered over 3 years of freelance work. Private repos — live demos and details available on request.',
      link: '#contact',
      linkLabel: 'Available on request',
      icon: <Lock className="w-4 h-4" />
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 lg:px-16 border-t border-line relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              MODULE 02
            </div>
            <span className="text-line">{`//`}</span>
            <div>DEPLOYMENTS</div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Things I've Built
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border border-line bg-[#0a0a0a] p-8 hover:border-accent/50 transition-colors group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <span className="text-[10px] font-mono border border-line px-2 py-1 rounded text-text-muted group-hover:border-accent/30 group-hover:text-accent transition-colors">
                  {project.tag}
                </span>
              </div>
              
              <div className="text-xs font-mono text-accent mb-6">
                {project.stack}
              </div>
              
              <p className="text-text-muted leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-line/50">
                <Link 
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-white transition-colors"
                >
                  {project.icon}
                  {project.linkLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm font-mono text-text-muted border border-line/50 bg-[#0a0a0a] p-4 rounded-sm inline-flex">
          <Lock className="w-4 h-4 text-accent" />
          <p>Most freelance and client work lives in private repos. Reach out and I'll walk you through it.</p>
        </div>
      </div>
    </section>
  );
}
