import React, { useState } from 'react';
import SectionHeading from './Common/SectionHeading';
import GlassCard from './Common/GlassCard';
import ProjectModal from './ProjectModal';
import { ExternalLink, Sparkles, Layers, ArrowRight, Code2, Server, Terminal } from 'lucide-react';
import { Github } from './Common/SocialIcons';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Backend'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const spotlightProject = projects.find(p => p.id === 'youtube-backend');

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Work"
          title="Architected & Built Projects"
          subtitle="Real-world software projects showcasing backend API design, scalable system architecture, and modern full-stack user interfaces."
        />

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SPOTLIGHT FEATURED PROJECT: YouTube Backend */}
        {spotlightProject && (activeCategory === 'All' || activeCategory === 'Backend') && (
          <div className="mb-14">
            <div className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 via-slate-900/90 to-blue-950/30 shadow-2xl overflow-hidden group">
              
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-mono font-bold tracking-wider uppercase rounded-bl-xl shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Spotlight Project</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
                
                {/* Left Spotlight Info */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {spotlightProject.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Node.js / Express / MongoDB
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {spotlightProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {spotlightProject.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase text-slate-400">Key Technical Highlights:</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>JWT Auth in HTTP-Only Cookies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>Multer & Cloudinary Media Pipeline</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>MongoDB Aggregation Pipelines</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>Standardized Async Error Handlers</span>
                      </li>
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {spotlightProject.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-slate-950 text-cyan-300 rounded border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => setSelectedProject(spotlightProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition"
                    >
                      <span>Explore Technical Breakdown</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={spotlightProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 transition"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Source</span>
                    </a>
                  </div>
                </div>

                {/* Right Visual Graphic */}
                <div className="lg:col-span-5">
                  <div className="glass-panel p-5 rounded-xl border border-slate-700/80 bg-slate-950/90 font-mono text-xs text-slate-300 space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                      <span className="text-cyan-400 flex items-center gap-1.5">
                        <Server className="w-4 h-4" />
                        <span>youtube-backend-architecture</span>
                      </span>
                      <span className="text-emerald-400 text-[10px]">● LIVE API</span>
                    </div>

                    <div className="text-slate-500">// Standardized Async Response Payload</div>
                    <pre className="text-[11px] text-cyan-200 overflow-x-auto p-3 bg-slate-900 rounded border border-slate-800 leading-snug">
{`{
  "statusCode": 200,
  "data": {
    "user": "Nitesh Tiwari",
    "video": "Scalable Microservices",
    "views": 15400,
    "subscribers": 4200
  },
  "message": "Aggregated stats fetched",
  "success": true
}`}
                    </pre>

                    <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px]">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="text-cyan-400 font-bold">25+</div>
                        <div className="text-slate-500">Endpoints</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="text-emerald-400 font-bold">JWT</div>
                        <div className="text-slate-500">Auth Token</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="text-amber-400 font-bold">MVC</div>
                        <div className="text-slate-500">Architecture</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="flex flex-col justify-between p-6 group"
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/20">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-3 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 text-slate-300 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/40 rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition"
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
                      className="p-1.5 rounded bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition"
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

        {/* Project Detail Modal */}
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
