import React from 'react';
import { User, Sparkles, BookOpen, Rocket, Compass, CheckCircle2, Award, GraduationCap, MapPin, School, BookCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const infoCards = [
    { label: "Name", value: "Dev Saini", icon: User, color: "text-indigo-400" },
    { label: "Course", value: "B.Tech CSE", icon: BookCheck, color: "text-cyan-400" },
    { label: "Year", value: "1st Year", icon: GraduationCap, color: "text-violet-400" },
    { label: "University", value: "JECRC University", icon: BookOpen, color: "text-emerald-400" },
    { label: "Location", value: "Jaipur, Rajasthan, India", icon: MapPin, color: "text-rose-400" },
    { label: "School", value: "HVN School", icon: School, color: "text-amber-400" },
  ];

  const highlights = [
    {
      icon: Sparkles,
      title: "AI & Innovation",
      desc: "Exploring generative AI, intelligent models, and practical applications that enhance digital productivity.",
      color: "from-indigo-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Modern Web Development",
      desc: "Building clean, responsive, and performant web interfaces with modern frontend technologies and component systems.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "Computer Science Foundations",
      desc: "Studying core programming, algorithmic problem solving, and software design principles at JECRC University.",
      color: "from-violet-500 to-indigo-500"
    },
    {
      icon: Compass,
      title: "Digital Productivity & Teamwork",
      desc: "Developing effective study sprint systems, version control habits, communication, and collaborative presentation skills.",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-accent">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A genuine look into my academic journey, technical exploration, and student aspirations.
          </p>
        </div>

        {/* Two-Column About Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Side: Professional Student/Developer Illustration Placeholder (No fake photograph) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl overflow-hidden group">
              {/* Subtle ambient gradient inside card */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />

              {/* Developer Illustration SVG Graphic */}
              <div className="relative w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="glowCircle" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>

                  {/* Outer Orbit Rings */}
                  <circle cx="200" cy="200" r="170" stroke="#334155" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
                  <circle cx="200" cy="200" r="145" fill="url(#glowCircle)" />

                  {/* Student / Developer Avatar Silhouette */}
                  <g className="transition-transform duration-500 group-hover:scale-105" style={{ transformOrigin: '200px 200px' }}>
                    {/* Head / Hair */}
                    <circle cx="200" cy="130" r="50" fill="url(#avatarGrad)" />
                    {/* Head Accent Glasses / Visor line */}
                    <rect x="175" y="125" width="50" height="8" rx="4" fill="#ffffff" opacity="0.8" />
                    
                    {/* Shoulders & Torso */}
                    <path
                      d="M120 250 C120 190, 280 190, 280 250 L280 270 L120 270 Z"
                      fill="#1e293b"
                      stroke="#4f46e5"
                      strokeWidth="2"
                    />
                    
                    {/* Hoodie V-neck detail */}
                    <path d="M185 200 L200 230 L215 200" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Modern Laptop Base & Screen */}
                    <rect x="130" y="250" width="140" height="90" rx="8" fill="url(#laptopGrad)" stroke="#38bdf8" strokeWidth="2" />
                    <rect x="140" y="260" width="120" height="70" rx="4" fill="#0B0F19" />
                    
                    {/* Code lines on screen */}
                    <line x1="150" y1="275" x2="200" y2="275" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="160" y1="285" x2="240" y2="285" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="160" y1="295" x2="225" y2="295" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="150" y1="305" x2="190" y2="305" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                    <line x1="150" y1="315" x2="175" y2="315" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Glowing Power Dot on Laptop */}
                    <circle cx="200" cy="254" r="2" fill="#38bdf8" />
                  </g>

                  {/* Floating Tech Badges around avatar */}
                  <g className="animate-float">
                    <rect x="50" y="90" width="76" height="32" rx="16" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
                    <text x="88" y="111" fill="#c7d2fe" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">&lt;Dev/&gt;</text>
                  </g>

                  <g className="animate-float" style={{ animationDelay: '1.5s' }}>
                    <rect x="270" y="80" width="86" height="32" rx="16" fill="#0c4a6e" stroke="#0284c7" strokeWidth="1.5" />
                    <text x="313" y="101" fill="#bae6fd" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">&#123;B.Tech&#125;</text>
                  </g>

                  <g className="animate-float" style={{ animationDelay: '2.5s' }}>
                    <rect x="260" y="270" width="94" height="32" rx="16" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
                    <text x="307" y="291" fill="#a7f3d0" fontSize="11" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">1st Year CSE</text>
                  </g>
                </svg>
              </div>

              {/* Caption & Status Pill */}
              <div className="text-center mt-4 pt-4 border-t border-slate-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-mono text-indigo-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Dev Saini • 1st Year B.Tech CSE</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  JECRC University • Jaipur, Rajasthan, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Heading, Complete Content, and Information Cards */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between border border-slate-800">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                <span>Student Introduction</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Hi, I'm <span className="gradient-text-accent">Dev Saini</span>
              </h3>
              
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                <p>
                  Hi, I'm <strong className="text-white font-semibold">Dev Saini</strong>, a first-year B.Tech Computer Science & Engineering student at <span className="text-indigo-300 font-medium">JECRC University, Jaipur</span>. I completed my Class 10 and Class 12 from <span className="text-white font-medium">HVN School</span>.
                </p>
                <p>
                  I am interested in technology, programming, artificial intelligence, web development and digital productivity. Currently, I am learning programming fundamentals, problem solving, and modern web development to strengthen my software engineering foundations.
                </p>
                <p>
                  I am also exploring web development by creating practical projects such as my personal portfolio website, AI-driven applications, and student productivity tools.
                </p>
                <p>
                  Along with technical skills, I am working on improving my communication, teamwork and presentation skills. My goal is to continuously learn new technologies, build useful projects and grow as a Computer Science student.
                </p>
              </div>
            </div>

            {/* Small Information Cards Grid */}
            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Key Details
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {infoCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5 hover:border-indigo-500/40 transition-colors"
                    >
                      <div className={`p-1.5 rounded-lg bg-slate-800 ${card.color} flex-shrink-0 mt-0.5`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">{card.label}</div>
                        <div className="text-xs sm:text-sm font-semibold text-white truncate">{card.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* 4 Feature Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 glass-card-hover group relative overflow-hidden"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-2.5 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

