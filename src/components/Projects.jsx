import React, { useState } from 'react';
import SectionHeading from './Common/SectionHeading';
import GlassCard from './Common/GlassCard';
import ProjectModal from './ProjectModal';
import { ExternalLink, Sparkles, ArrowRight, Server, Cpu, Zap, Layers } from 'lucide-react';
import { Github } from './Common/SocialIcons';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Backend'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const spotlightProject = projects.find(p => p.id === 'mockbuddy') || projects[0];

  return (
    <section id="projects" className="py-28 relative bg-slate-950/80 border-t border-slate-900">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Featured Projects"
          title="Architected Full Stack & AI Systems"
          subtitle="Real-world software applications showcasing Generative AI integrations, low-latency Socket.IO communication, and production RESTful API backend architectures."
        />

        {/* Category Filters */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SPOTLIGHT PROJECT: MockBuddy AI */}
        {spotlightProject && (activeCategory === 'All' || activeCategory === 'Full Stack') && (
          <div className="mb-14">
            <div className="relative glass-panel rounded-3xl p-7 sm:p-10 border border-cyan-500/40 bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-blue-950/40 shadow-2xl overflow-hidden group">
              
              {/* Spotlight Badge */}
              <div className="absolute top-0 right-0 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-mono font-bold tracking-wider uppercase rounded-bl-2xl shadow-xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
                <span>Featured AI Spotlight</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
                
                {/* Left Info (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {spotlightProject.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      React.js / Node.js / Gemini AI
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {spotlightProject.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {spotlightProject.shortDescription}
                  </p>

                  {/* Highlights Bullet Grid */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase text-cyan-400 font-bold">Key Architectural Features:</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                      {spotlightProject.keyFeatures.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {spotlightProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-mono bg-slate-950 text-cyan-300 rounded-lg border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => setSelectedProject(spotlightProject)}
                      className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-[1.02]"
                    >
                      <span>Explore Technical Breakdown</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {spotlightProject.githubUrl && (
                      <a
                        href={spotlightProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Dashboard Graphic */}
                <div className="lg:col-span-5">
                  <div className="glass-panel p-6 rounded-2xl border border-slate-700/80 bg-slate-950/95 font-mono text-xs text-slate-300 space-y-3 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-cyan-400 font-bold flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        <span>MockBuddy-AI-Engine</span>
                      </span>
                      <span className="text-emerald-400 text-[11px] font-bold">● GEMINI AI READY</span>
                    </div>

                    <div className="text-slate-500">// Dynamic Interview Question Generation Engine</div>
                    <pre className="text-[11px] text-cyan-200 overflow-x-auto p-3.5 bg-slate-900 rounded-xl border border-slate-800 leading-relaxed">
{`{
  "status": "200 OK",
  "aiEngine": "Google Gemini API",
  "data": {
    "topic": "React.js State Management",
    "question": "Explain Redux Toolkit vs Context API",
    "adaptiveLevel": "Hard",
    "suggestionsReady": true
  }
}`}
                    </pre>

                    <div className="grid grid-cols-3 gap-2.5 pt-2 text-center text-[11px]">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-cyan-400 font-bold">Gemini AI</div>
                        <div className="text-slate-500 text-[10px]">Integration</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-emerald-400 font-bold">Full Stack</div>
                        <div className="text-slate-500 text-[10px]">MERN Engine</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-amber-400 font-bold">JWT</div>
                        <div className="text-slate-500 text-[10px]">Auth Tokens</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="flex flex-col justify-between p-7 group border-slate-800 hover:border-cyan-500/40"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-950/50 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-mono bg-slate-900 text-slate-300 rounded-md border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-[10px] font-mono text-cyan-400 bg-cyan-950/50 rounded-md border border-cyan-500/20">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between mt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Technical Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition border border-slate-800"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition border border-slate-800"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Project Technical Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};

export default Projects;
