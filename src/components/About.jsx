import React from 'react';
import SectionHeading from './Common/SectionHeading';
import GlassCard from './Common/GlassCard';
import { Layout, Code2, Server, Database, CheckCircle2, Cpu, Zap, Target } from 'lucide-react';
import { personalInfo, aboutHighlights, strengths } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Code2: Code2,
  Server: Server,
  Database: Database,
};

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="Engineered for Scalability & Impact"
          subtitle="A passionate developer dedicated to building reliable software solutions and intuitive user experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Journey & Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard hoverEffect={false} className="p-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>My Engineering Journey</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                {personalInfo.longBio}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Whether it's optimizing MongoDB aggregation pipelines for backend streaming APIs or crafting clean, accessible UI components in React with Tailwind CSS, I focus on delivering code that is maintainable, well-structured, and production-ready.
              </p>
            </GlassCard>

            {/* Strengths Checklist */}
            <div className="glass-panel rounded-xl p-6 border border-slate-800">
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Core Strengths & Focus Areas</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Highlight Cards Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutHighlights.map((item) => {
              const IconComponent = iconMap[item.icon] || Zap;
              return (
                <GlassCard key={item.id} className="p-5 flex flex-col justify-between">
                  <div>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
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
