import React, { useState } from 'react';
import SectionHeading from './Common/SectionHeading';
import GlassCard from './Common/GlassCard';
import { GraduationCap, Briefcase, Award, CheckCircle2, Calendar, MapPin, AlertCircle } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience & Projects', icon: Briefcase },
    { id: 'achievements', label: 'Certifications & Awards', icon: Award },
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Timeline"
          title="Education & Experience"
          subtitle="My academic background, practical experience, certifications, and achievements."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* EDUCATION TAB CONTENT */}
        {activeTab === 'education' && (
          <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-8">
            {timelineData.education.map((item) => (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors"></div>
                <GlassCard hoverEffect={false} className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/20 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.institution}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  {item.highlights && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </div>
            ))}
          </div>
        )}

        {/* EXPERIENCE TAB CONTENT */}
        {activeTab === 'experience' && (
          <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-8">
            {timelineData.experience.map((item) => (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 ${
                  item.isPlaceholder ? 'border-amber-400' : 'border-cyan-400'
                } group-hover:bg-cyan-400 transition-colors`}></div>
                <GlassCard hoverEffect={false} className={`p-6 ${item.isPlaceholder ? 'border-dashed border-amber-500/30' : ''}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`text-xs font-mono px-2.5 py-0.5 rounded border flex items-center gap-1 ${
                      item.isPlaceholder 
                        ? 'bg-amber-950/60 text-amber-300 border-amber-500/30' 
                        : 'bg-cyan-950/60 text-cyan-400 border-cyan-500/20'
                    }`}>
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.institution}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span>{item.title}</span>
                    {item.isPlaceholder && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-500/30">
                        Configurable Placeholder
                      </span>
                    )}
                  </h3>
                  
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.highlights && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </div>
            ))}
          </div>
        )}

        {/* ACHIEVEMENTS & CERTIFICATIONS TAB CONTENT */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certifications Card */}
            <GlassCard hoverEffect={false} className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Certifications</span>
              </h3>
              <div className="space-y-4">
                {timelineData.certifications.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-xs text-cyan-400 font-mono mb-1">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                    <div className="text-sm font-semibold text-white">{cert.title}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Key Achievements Card */}
            <GlassCard hoverEffect={false} className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Key Achievements</span>
              </h3>
              <div className="space-y-4">
                {timelineData.achievements.map((ach) => (
                  <div key={ach.id} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-sm font-semibold text-white mb-1">{ach.title}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{ach.detail}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;
