import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 lg:px-16 border-t border-line relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              MODULE 04
            </div>
            <span className="text-line">{`//`}</span>
            <div>COMMUNICATION</div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Let's Build Something.
          </h2>
          
          <p className="text-xl text-text-muted font-mono max-w-2xl leading-relaxed">
            Whether it's a website, an automation, or just a conversation about AI — I'm open.
          </p>
        </div>

        <div className="mb-16">
          <Link 
            href="mailto:kshitij.builds257@gmail.com"
            className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-mono text-sm hover:bg-accent/90 transition-colors group"
          >
            Send me a message 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          <Link 
            href="https://github.com/kshitij-create" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-line bg-[#0a0a0a] hover:border-accent/50 group transition-colors"
          >
            <div className="flex items-center gap-3 text-sm font-mono text-text-muted group-hover:text-white transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </div>
            <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors -rotate-45" />
          </Link>
          
          <Link 
            href="https://www.linkedin.com/in/kshitij-jadhav-8332373b4/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-line bg-[#0a0a0a] hover:border-accent/50 group transition-colors"
          >
            <div className="flex items-center gap-3 text-sm font-mono text-text-muted group-hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </div>
            <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors -rotate-45" />
          </Link>
          
          <Link 
            href="https://instagram.com/kshitij_257" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-line bg-[#0a0a0a] hover:border-accent/50 group transition-colors"
          >
            <div className="flex items-center gap-3 text-sm font-mono text-text-muted group-hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
              Instagram
            </div>
            <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors -rotate-45" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-line">
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Currently available for freelance projects & collaborations — Navi Mumbai / Remote
          </div>
          
          <div className="text-xs font-mono text-text-muted/50">
            Kshitij Jadhav · Built with code & curiosity · 2025
          </div>
        </div>
      </div>
    </section>
  );
}
