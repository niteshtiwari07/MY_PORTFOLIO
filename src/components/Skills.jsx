import React from 'react';
import SectionHeading from './Common/SectionHeading';
import GlassCard from './Common/GlassCard';
import { 
  Code, Palette, FileCode, Atom, Sparkles, 
  Server, Cpu, Network, Database, Table, 
  Terminal, Binary, FileJson, GitBranch, 
  Laptop, Send 
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
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Skills"
          title="Technologies & Tooling"
          subtitle="Core programming languages, frameworks, databases, and developer tools I work with daily."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <GlassCard key={category.name} hoverEffect={false} className="p-6 flex flex-col justify-between">
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.name}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {category.skills.length} Techs
                  </span>
                </div>

                {/* Skill Badges List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const IconComp = skillIconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className="tech-badge p-2.5 rounded-lg flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-md bg-slate-800/80 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-300">
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
