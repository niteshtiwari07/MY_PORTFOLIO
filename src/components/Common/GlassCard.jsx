import React from 'react';

const GlassCard = ({ children, className = '', hoverEffect = true, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`glass-panel rounded-xl p-6 relative overflow-hidden ${
        hoverEffect ? 'glass-panel-hover cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
