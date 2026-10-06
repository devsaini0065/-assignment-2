import React, { useState } from 'react';
import { 
  Code, 
  Palette, 
  Terminal, 
  FileCode, 
  Cpu, 
  Sparkles, 
  Globe, 
  Zap, 
  Wrench,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const iconMap = {
    Code: Code,
    Palette: Palette,
    Terminal: Terminal,
    FileCode: FileCode,
    Cpu: Cpu,
    Sparkles: Sparkles,
    Globe: Globe,
    Zap: Zap,
  };

  const categories = ['All', 'Web Development', 'Programming', 'AI & Technology', 'Workflows'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(s => {
        if (selectedCategory === 'Web Development') {
          return s.category === 'Web Development' || s.category === 'Full Stack';
        }
        if (selectedCategory === 'Programming') {
          return s.category === 'Programming';
        }
        if (selectedCategory === 'AI & Technology') {
          return s.category === 'AI & Technology';
        }
        if (selectedCategory === 'Workflows') {
          return s.category === 'Workflows';
        }
        return true;
      });

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-accent">Tooling</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Active competencies, programming foundations, AI tools, and productivity workflows I practice and develop daily.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 8 Skill Cards Grid (No unrealistic percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={skill.name}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 glass-card-hover group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top color bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header: Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center border border-slate-700/60 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">
                      {skill.category}
                    </span>
                  </div>

                  {/* Title & Level Status */}
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-semibold text-cyan-400 font-mono">
                      {skill.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Status Indicator (Authentic Student Stage, No Fake %) */}
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-3">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-medium">
                      Active Skill & Practice
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/70">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

