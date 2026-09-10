import React from 'react';
import SectionHeading from './Common/SectionHeading';
import GlassCard from './Common/GlassCard';
import { ExternalLink, GitCommit, GitFork, Star, Code2, Terminal } from 'lucide-react';
import { Github } from './Common/SocialIcons';
import { githubStats, personalInfo } from '../data/portfolioData';

const GithubSection = () => {
  // Generate simulated realistic 52-week contribution matrix grid for visual effect
  const weeks = 40;
  const daysPerWeek = 7;
  const levels = ['bg-slate-900', 'bg-cyan-950', 'bg-cyan-800', 'bg-cyan-600', 'bg-cyan-400'];

  // Seed pseudo-random matrix deterministically
  const grid = Array.from({ length: weeks }, (_, wIndex) =>
    Array.from({ length: daysPerWeek }, (_, dIndex) => {
      const val = (wIndex * 7 + dIndex * 13) % 5;
      return levels[val];
    })
  );

  return (
    <section id="github" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Open Source & GitHub"
          title="Developer Activity & Repositories"
          subtitle="Building transparent, documented software in public. Check out my GitHub profile for open-source repositories."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contribution Grid & Profile Stats (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <GlassCard hoverEffect={false} className="p-6 sm:p-8 space-y-6">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>@{githubStats.username}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                        Active
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {githubStats.contributionsThisYear} contributions in the last year
                    </p>
                  </div>
                </div>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Simulated GitHub Activity Heatmap */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <span>Contribution Graph</span>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-slate-900"></span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-950"></span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-800"></span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600"></span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400"></span>
                    <span>More</span>
                  </div>
                </div>

                {/* Matrix Grid */}
                <div className="overflow-x-auto pb-2">
                  <div className="flex gap-1.5 min-w-[500px]">
                    {grid.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1.5">
                        {week.map((levelClass, dIdx) => (
                          <div
                            key={dIdx}
                            className={`w-3 h-3 rounded-sm ${levelClass} transition-colors hover:ring-1 hover:ring-cyan-400`}
                          ></div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Repos & Stats Summary Row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-lg font-bold text-white font-mono">{githubStats.totalRepos}+</div>
                  <div className="text-[11px] text-slate-400">Public Repos</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-lg font-bold text-cyan-400 font-mono">{githubStats.contributionsThisYear}</div>
                  <div className="text-[11px] text-slate-400">Commits / Year</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-lg font-bold text-emerald-400 font-mono">100%</div>
                  <div className="text-[11px] text-slate-400">Open Source</div>
                </div>
              </div>

            </GlassCard>
          </div>

          {/* Right Column: Top Languages Breakdown (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <GlassCard hoverEffect={false} className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  <span>Frequently Used Languages</span>
                </h3>

                <div className="space-y-4">
                  {githubStats.topLanguages.map((lang) => (
                    <div key={lang.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-200 flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: lang.color }}
                          ></span>
                          {lang.name}
                        </span>
                        <span className="text-slate-400">{lang.percentage}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${lang.percentage}%`,
                            backgroundColor: lang.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Easy Configuration Notice */}
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed mt-6">
                <div className="font-semibold text-cyan-400 mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Developer Note</span>
                </div>
                Configure your GitHub username directly in <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">src/data/portfolioData.js</code> to dynamically display your own repositories and profile details.
              </div>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubSection;
