import { BrainCircuit, LayoutTemplate, Wrench } from 'lucide-react';

export default function Expertise() {
  const categories = [
    {
      title: 'AI & Automation',
      icon: <BrainCircuit className="w-5 h-5 text-accent" />,
      skills: [
        'ChatGPT API & Prompt Engineering',
        'n8n · Make.com (Workflow Automation)',
        'Agentic AI & LLM Integrations',
        'Chatbot Development',
        'Python Scripting & Automation',
      ],
    },
    {
      title: 'Frontend & Web',
      icon: <LayoutTemplate className="w-5 h-5 text-accent" />,
      skills: [
        'React.js · Next.js (NextJS)',
        'Responsive Design & DOM Manipulation',
        'REST API Integration',
      ],
    },
    {
      title: 'Design & Tools',
      icon: <Wrench className="w-5 h-5 text-accent" />,
      skills: [
        'Figma (UI/UX Design)',
        'Git & GitHub',
        'C++',
        'Python',
        'Web Scraping',
      ],
    },
  ];

  return (
    <section id="expertise" className="py-24 px-8 lg:px-16 border-t border-line relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              MODULE 01
            </div>
            <span className="text-line">{`//`}</span>
            <div>CAPABILITIES</div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            What I Work With
          </h2>
          
          <div className="pl-4 border-l-2 border-accent">
            <p className="text-lg text-text-muted font-mono italic">
              "I don't just learn tools — I build with them."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="border border-line bg-[#0a0a0a] p-8 hover:border-accent/50 transition-colors group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#141414] border border-line rounded-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                </div>

                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start gap-3 text-sm font-mono text-text-muted group-hover:text-gray-300 transition-colors">
                      <span className="text-accent mt-1">▹</span>
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
