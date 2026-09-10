import React from 'react';
import { X, ExternalLink, CheckCircle, Cpu, Layers, Code, ShieldCheck } from 'lucide-react';
import { Github } from './Common/SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-slate-700 shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/30">
                {project.badge}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-cyan-400 mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 my-6 pt-4 border-t border-slate-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo / Docs</span>
            </a>
          )}
        </div>

        {/* Structured Breakdown Sections */}
        <div className="space-y-6 text-sm text-slate-300">
          
          {/* Problem Solved */}
          <div className="glass-panel p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-rose-400" />
              <span>1. Problem Solved</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* What I Built */}
          <div className="glass-panel p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>2. What I Built</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.whatIBuilt}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-amber-400" />
              <span>3. Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-slate-800 text-cyan-300 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>4. Key Technical Features</span>
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
