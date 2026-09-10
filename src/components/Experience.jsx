import React, { useState } from 'react';
import SectionHeading from './Common/SectionHeading';
import GlassCard from './Common/GlassCard';
import { GraduationCap, Briefcase, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Development Experience', icon: Briefcase },
    { id: 'achievements', label: 'Certifications & Awards', icon: Award },
  ];

  return (
    <section id="experience" className="py-28 relative bg-slate-950/70 border-t border-slate-900">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Timeline"
          title="Education & Certifications"
          subtitle="My academic foundation at Parul University, development experience, and industry certifications."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
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
          <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 space-y-10">
            {timelineData.education.map((item) => (
              <div key={item.id} className="relative pl-6 sm:pl-9 group">
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all"></div>
                
                <GlassCard hoverEffect={false} className="p-7 border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {item.institution}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <div className="space-y-2 pt-3 border-t border-slate-800/80">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
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
          <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 space-y-10">
            {timelineData.experience.map((item) => (
              <div key={item.id} className="relative pl-6 sm:pl-9 group">
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all"></div>
                
                <GlassCard hoverEffect={false} className="p-7 border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      {item.institution}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.highlights && (
                    <div className="space-y-2 pt-3 border-t border-slate-800/80">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
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

        {/* CERTIFICATIONS TAB CONTENT */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certifications Card */}
            <GlassCard hoverEffect={false} className="p-7 space-y-5 border-slate-800">
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2.5 border-b border-slate-800 pb-3.5">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Industry Certifications</span>
              </h3>

              <div className="space-y-3.5">
                {timelineData.certifications.map((cert) => (
                  <div key={cert.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center justify-between text-xs text-cyan-400 font-mono mb-1.5">
                      <span>{cert.issuer}</span>
                      <span className="text-emerald-400 font-bold">{cert.date}</span>
                    </div>
                    <div className="text-sm font-bold text-white leading-snug">{cert.title}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Achievements Card */}
            <GlassCard hoverEffect={false} className="p-7 space-y-5 border-slate-800">
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2.5 border-b border-slate-800 pb-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Key Accomplishments</span>
              </h3>

              <div className="space-y-3.5">
                {timelineData.achievements.map((ach) => (
                  <div key={ach.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                    <div className="text-sm font-bold text-white mb-1.5 leading-snug">{ach.title}</div>
                    <div className="text-xs text-slate-400 leading-relaxed font-normal">{ach.detail}</div>
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
