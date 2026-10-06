import React from 'react';
import { GraduationCap, Calendar, MapPin, Building, BookCheck, Binary, Cpu, Layout, Database, Zap, Sparkles, School } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const iconMap = {
    Binary: Binary,
    Cpu: Cpu,
    Layout: Layout,
    Database: Database,
    Zap: Zap,
    Sparkles: Sparkles,
  };

  const timeline = [
    {
      level: "B.Tech – Computer Science & Engineering",
      institution: "JECRC University",
      location: "Jaipur, Rajasthan, India",
      period: "2026 - Present",
      status: "1st Year (Active)",
      badgeColor: "bg-indigo-950/80 text-indigo-300 border-indigo-800/60",
      icon: GraduationCap,
      accent: "from-indigo-500 to-cyan-500",
      details: [
        "Course: B.Tech – Computer Science & Engineering",
        "Student ID / Roll No: 26BCON2090",
        "Current Status: 1st Year Undergraduate",
        "Core Focus: Programming, Computer Science fundamentals and Web Development"
      ]
    },
    {
      level: "Class 12 – Senior Secondary",
      institution: "HVN School",
      location: "School Education",
      period: "Completed",
      status: "Completed",
      badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-800/60",
      icon: School,
      accent: "from-cyan-500 to-teal-500",
      details: [
        "Qualification: Class 12",
        "School: HVN School",
        "Key Focus: Science & Mathematics foundations and analytical thinking"
      ]
    },
    {
      level: "Class 10 – Secondary Education",
      institution: "HVN School",
      location: "School Education",
      period: "Completed",
      status: "Completed",
      badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-800/60",
      icon: BookCheck,
      accent: "from-emerald-500 to-teal-500",
      details: [
        "Qualification: Class 10",
        "School: HVN School",
        "Key Focus: Core academic foundation and discipline"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 md:py-28 relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text-accent">Learning</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic timeline and curriculum focus driving my computer science journey.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-20 max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-emerald-500 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node on Timeline */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#0B0F19] border-2 border-indigo-500 shadow-lg shadow-indigo-500/30 items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Spacer for 50% width on desktop */}
                  <div className="sm:w-1/2" />

                  {/* Timeline Card */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-800 glass-card-hover relative overflow-hidden group">
                      {/* Top gradient highlight */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`} />

                      {/* Header Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${item.badgeColor}`}>
                          {item.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Institution */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                        {item.level}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium mt-1 mb-4">
                        <Building className="w-4 h-4 flex-shrink-0" />
                        <span>{item.institution}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400 text-xs">{item.location}</span>
                      </div>

                      {/* Bullet Details */}
                      <ul className="space-y-2 border-t border-slate-800/80 pt-3 text-xs sm:text-sm text-slate-300">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Relevant Learning Areas Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span>Relevant Learning Areas & Academic Focus</span>
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline-block font-mono">B.Tech CSE Curriculum</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {educationData.learningAreas.map((area, idx) => {
              const IconComponent = iconMap[area.icon] || BookCheck;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 border border-slate-800/80 glass-card-hover group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center border border-slate-700/60">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                        {area.status}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Module 0{idx + 1}</span>
                    <span className="text-cyan-400">JECRC University</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

