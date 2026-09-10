import React from 'react';
import { ArrowDown, Mail, FileText, Code, ExternalLink, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';
import { Github, Linkedin } from './Common/SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-grid-pattern">
      
      {/* Radiant Glowing Ambient Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-left space-y-7">
            
            {/* Status / Location Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300 shadow-xl backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-white">{personalInfo.status}</span>
              <span className="text-slate-700">|</span>
              <span className="text-cyan-400 font-mono">{personalInfo.location}</span>
            </div>

            {/* Name & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                Hi, I'm <span className="text-gradient-cyan">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-300 flex items-center gap-2.5 pt-1">
                <Terminal className="w-6 h-6 text-cyan-400 shrink-0" />
                <span>{personalInfo.title}</span>
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug tracking-tight">
              "{personalInfo.headline}"
            </h2>

            {/* Bio Summary */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
              >
                <span>View Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 rounded-xl border border-slate-700/80 hover:border-cyan-500/50 shadow-xl transition-all hover:text-cyan-300 hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Connect Row */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-105 transition-all shadow-md"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-105 transition-all shadow-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-105 transition-all shadow-md"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Floating Interactive IDE Mockup Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg glass-panel rounded-2xl p-6 border border-slate-700/80 shadow-2xl shadow-cyan-950/50 relative group animate-float-slow">
              
              {/* Window Bar Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/90"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90"></div>
                </div>
                <div className="text-xs font-mono text-cyan-400 flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                  <Code className="w-3.5 h-3.5" />
                  <span>MockBuddy.jsx</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-mono">● Active</div>
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300 leading-relaxed overflow-x-auto p-1">
                <p className="text-slate-500">// AI & Real-Time Full Stack Architecture</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"{personalInfo.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-emerald-300">"Parul University (B.Tech CS)"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">coreTech:</span> [
                </p>
                <p className="pl-8 text-amber-300">
                  "React.js", "Node.js", "Gemini AI", "Socket.IO", "MongoDB"
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-slate-400">featuredApp:</span>{' '}
                  <span className="text-cyan-400">"MockBuddy AI & ChatsUp"</span>
                </p>
                <p>&#125;;</p>
                
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-emerald-400 text-xs">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>// Ready to engineer high-impact solutions</span>
                </div>
              </div>

              {/* Tech Badges Grid */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Gemini AI', 'C++'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-[11px] font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/25"
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
