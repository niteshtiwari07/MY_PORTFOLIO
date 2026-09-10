import React from 'react';
import SectionHeading from './Common/SectionHeading';
import GlassCard from './Common/GlassCard';
import { Layout, Code2, Server, Database, CheckCircle2, Cpu, Zap, Target, Sparkles } from 'lucide-react';
import { personalInfo, aboutHighlights, strengths } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Cpu: Cpu,
  Server: Server,
  Database: Database,
  Code2: Code2,
};

const About = () => {
  return (
    <section id="about" className="py-28 relative bg-slate-950/70 border-t border-b border-slate-900/80">
      
      {/* Background Lights */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="About Me"
          title="Engineered for Scalability & Impact"
          subtitle="Passionate Full Stack Developer dedicated to building high-performance web applications, Generative AI tools, and real-time systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Narrative & Strengths (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <GlassCard hoverEffect={false} className="p-8 space-y-5 border-slate-800">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>Engineering Background & Journey</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-base font-normal">
                {personalInfo.longBio}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                I specialize in building complete software systems—from crafting responsive React interfaces with Tailwind CSS to designing production REST APIs, Socket.IO WebSockets, and MongoDB database aggregations.
              </p>
            </GlassCard>

            {/* Strengths Container */}
            <div className="glass-panel rounded-2xl p-7 border border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2.5">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Core Engineering Capacities</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300 font-medium leading-tight">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 4 Highlight Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutHighlights.map((item) => {
              const IconComponent = iconMap[item.icon] || Zap;
              return (
                <GlassCard key={item.id} className="p-6 flex flex-col justify-between group border-slate-800 hover:border-cyan-500/40">
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-500/10 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
