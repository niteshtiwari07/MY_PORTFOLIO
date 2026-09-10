import React from 'react';
import { ArrowDown, Mail, FileText, Code, ExternalLink, Terminal, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Common/SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Availability / Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 font-mono">{personalInfo.location}</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-cyan">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 mt-2 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400 inline" />
                <span>{personalInfo.title}</span>
              </p>
            </div>

            {/* Strong Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug">
              "{personalInfo.headline}"
            </h2>

            {/* Supporting Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 rounded-xl border border-slate-700/80 hover:border-cyan-500/40 transition-all hover:text-cyan-300"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Code Graphic Mockup Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg glass-panel rounded-2xl p-5 border border-slate-700/60 shadow-2xl shadow-cyan-950/40 relative group">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>developer.config.js</span>
                </div>
                <div className="text-xs text-slate-600 font-mono">UTF-8</div>
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                <p className="text-slate-500">// Developer Profile & Core Stack</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"{personalInfo.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">"{personalInfo.title}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                </p>
                <p className="pl-8 text-amber-300">
                  "React", "Node.js", "Express", "MongoDB", "Tailwind"
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-slate-400">focus:</span>{' '}
                  <span className="text-emerald-300">"Scalable APIs & Clean Interfaces"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-cyan-400">"Ready for impact"</span>
                </p>
                <p>&#125;;</p>
                <div className="pt-2 flex items-center gap-2 text-emerald-400 text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>// Ready to collaborate on full-stack projects</span>
                </div>
              </div>

              {/* Tech Badges Row */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB', 'C++', 'REST APIs'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
