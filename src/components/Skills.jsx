import React from 'react';
import SectionHeading from './Common/SectionHeading';
import GlassCard from './Common/GlassCard';
import { 
  Code, Palette, FileCode, Atom, Sparkles, 
  Server, Cpu, Network, Database, Table, 
  Terminal, Binary, FileJson, GitBranch, 
  Laptop, Send, ShieldCheck, Zap, Layers 
} from 'lucide-react';
import { Github } from './Common/SocialIcons';
import { skillCategories } from '../data/portfolioData';

const skillIconMap = {
  Code: Code,
  Palette: Palette,
  FileCode: FileCode,
  Atom: Atom,
  Sparkles: Sparkles,
  Server: Server,
  Cpu: Cpu,
  Network: Network,
  Database: Database,
  Table: Table,
  Terminal: Terminal,
  Binary: Binary,
  FileJson: FileJson,
  GitBranch: GitBranch,
  Github: Github,
  Laptop: Laptop,
  Send: Send,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Layers: Layers,
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative bg-grid-pattern">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Technical Stack"
          title="Skills, Tools & Frameworks"
          subtitle="Comprehensive overview of programming languages, full-stack frameworks, databases, and developer tooling."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <GlassCard key={category.name} hoverEffect={false} className="p-6 sm:p-7 flex flex-col justify-between border-slate-800">
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>{category.name}</span>
                  </h3>
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-500/30">
                    {category.skills.length} Items
                  </span>
                </div>

                {/* Skill Items List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const IconComp = skillIconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className="tech-badge p-3 rounded-xl flex items-center justify-between group shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-900/90 text-cyan-400 border border-slate-800 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-200">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
