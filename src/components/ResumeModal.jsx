import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo, timelineData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-slate-700 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pr-10">
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {personalInfo.name} — Resume Overview
            </h2>
            <p className="text-xs font-mono text-cyan-400">
              {personalInfo.title} • {personalInfo.location} • {personalInfo.phone}
            </p>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="glass-panel p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
          <div className="text-xs font-mono uppercase text-cyan-400 mb-1.5 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Summary</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {personalInfo.shortBio} Skilled in building RESTful APIs, real-time applications using Socket.IO, Generative AI integration, and responsive web interfaces. Strong understanding of DSA, DBMS, OOP, Operating Systems, and Computer Networks.
          </p>
        </div>

        {/* Education & Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          
          {/* Education */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Education</span>
            </div>
            <div className="text-sm font-bold text-white">
              Parul Institute of Technology
            </div>
            <div className="text-xs text-cyan-300 font-mono">
              B.Tech in Computer Science & Engineering
            </div>
            <div className="text-[11px] text-slate-400">
              Jul 2023 – Present • Vadodara, Gujarat
            </div>
          </div>

          {/* Core Technical Capabilities */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Technical Skills</span>
            </div>
            <ul className="text-[11px] text-slate-300 space-y-1">
              <li><strong className="text-white">Stack:</strong> React.js, Node.js, Express.js, MongoDB</li>
              <li><strong className="text-white">AI & Real-Time:</strong> Gemini AI, Socket.IO, WebSockets</li>
              <li><strong className="text-white">Languages:</strong> C/C++ (DSA), JavaScript, Python, SQL</li>
              <li><strong className="text-white">Tools:</strong> Git, Postman, Linux, Vercel, Render</li>
            </ul>
          </div>

        </div>

        {/* Certifications List */}
        <div className="mb-6">
          <div className="text-xs font-mono uppercase text-slate-400 mb-2 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Certifications</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {timelineData.certifications.map((cert) => (
              <div key={cert.id} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs flex items-center justify-between">
                <span className="text-slate-200 font-medium">{cert.title}</span>
                <span className="text-[10px] font-mono text-cyan-400">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition"
          >
            Close
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open PDF File</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Nitesh_Tiwari_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-500/20 transition"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
