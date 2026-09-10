import React from 'react';
import { FileText, Download, Eye, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ResumeSection = ({ onOpenResume }) => {
  return (
    <section className="py-16 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative glass-panel rounded-2xl p-8 sm:p-10 border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 shadow-2xl overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left Content (8 cols) */}
            <div className="md:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/60 rounded-full border border-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Want to know more about my experience?
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                Get a comprehensive overview of my technical skill set, academic achievements, project history, and practical development experience.
              </p>
            </div>

            {/* Right Buttons (4 cols) */}
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:items-end">
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition hover:scale-[1.02]"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Nitesh_Tiwari_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
