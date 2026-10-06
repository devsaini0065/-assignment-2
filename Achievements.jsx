import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  GraduationCap, 
  Calendar, 
  PlusCircle, 
  CheckCircle,
  ExternalLink,
  Code
} from 'lucide-react';
import { achievementsData, achievementCategories } from '../data/portfolioData';

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAchievements = activeCategory === 'All'
    ? achievementsData
    : achievementsData.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/60 text-xs font-semibold text-violet-300">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Achievements & <span className="gradient-text-accent">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A growing portfolio of certified competencies, competitive events, coursework, and milestones.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {achievementCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 glass-card-hover group flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header with Category Badge & Date */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-violet-950/80 text-violet-300 border border-violet-800/50">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>

                {/* Organization / Issuer */}
                <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{item.organization}</span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">ID: #{item.id}</span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {item.badge}
                </span>
              </div>
            </div>
          ))}

          {/* "+ Add More Milestones" Placeholder Card */}
          <div className="rounded-2xl p-6 border border-dashed border-slate-700/80 bg-slate-900/30 flex flex-col justify-between text-center items-center group hover:border-indigo-500/60 transition-colors">
            <div className="my-auto space-y-3 py-6">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Your Next Milestone</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Easily append new hackathons, course completions, certifications, and awards in <code className="text-indigo-300 font-mono">portfolioData.js</code>.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 pt-2">
              Ready for Expansion
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
