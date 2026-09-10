import React from 'react';

const SectionHeading = ({ badge, title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium tracking-wide text-cyan-400 uppercase rounded-full bg-cyan-950/60 border border-cyan-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
