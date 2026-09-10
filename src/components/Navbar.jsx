import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-cyan-950/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-xl p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-all duration-300">
              <span className="relative z-10">NT</span>
              <div className="absolute inset-0 rounded-xl bg-cyan-400/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                {personalInfo.name}
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider">
                {personalInfo.title}
              </span>
            </div>
          </a>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 relative ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 group overflow-hidden"
            >
              <FileText className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Resume</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 opacity-70 group-hover:opacity-100" />
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-xs font-bold text-cyan-300 bg-cyan-950/60 rounded-lg border border-cyan-500/30 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-slate-800/80 px-4 pt-4 pb-6 mt-3 space-y-2 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeSection === link.href.substring(1)
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
