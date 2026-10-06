import React, { useState } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Copy, Check, Sparkles, MapPin, Building, Code2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onCopyEmail, copied }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="gradient-text-primary block">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-indigo-300 via-cyan-300 to-slate-200 bg-clip-text text-transparent">
                {personalInfo.headline}
              </p>
            </div>

            {/* University & Location Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <Building className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.college}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {personalInfo.collegeLocation}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 font-mono text-cyan-300">
                Roll No: {personalInfo.rollNo}
              </span>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onCopyEmail}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all group"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                    <span className="font-mono">{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Quick Presence */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Connect:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-cyan-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-violet-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all hover:scale-110"
                aria-label="Email Dev Saini"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-30 blur-xl"></div>
              
              {/* Glass Terminal Card */}
              <div className="relative rounded-2xl glass-card overflow-hidden shadow-2xl border border-slate-700/60">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3 h-3 text-indigo-400" />
                    <span>dev_profile.ts</span>
                  </div>
                  <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                    B.Tech '26
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm space-y-2 text-slate-300 bg-[#0B0F19]/90 overflow-x-auto">
                  <div>
                    <span className="text-violet-400 font-semibold">const</span>{' '}
                    <span className="text-cyan-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">name:</span>{' '}
                    <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">role:</span>{' '}
                    <span className="text-emerald-300">"B.Tech Student"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">rollNumber:</span>{' '}
                    <span className="text-amber-300">"{personalInfo.rollNo}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">university:</span>{' '}
                    <span className="text-emerald-300">"{personalInfo.college}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">passions:</span> [
                  </div>
                  <div className="pl-8 text-cyan-200">
                    "Artificial Intelligence",<br />
                    "Modern Web Development",<br />
                    "Digital Productivity"
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-indigo-300">currentlyLearning:</span> [
                  </div>
                  <div className="pl-8 text-amber-200">
                    "Generative AI Workflows",<br />
                    "React & Vite Ecosystem",<br />
                    "System Architecture"
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-indigo-300">readyForNewChallenges:</span>{' '}
                    <span className="text-rose-400 font-semibold">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Quick stats bottom row */}
                <div className="grid grid-cols-4 divide-x divide-slate-800/80 bg-slate-900/60 border-t border-slate-800 p-3 text-center">
                  {personalInfo.stats.map((stat) => (
                    <div key={stat.label} className="px-1">
                      <div className="text-sm sm:text-base font-bold text-white font-mono">{stat.value}</div>
                      <div className="text-[10px] text-slate-400 truncate">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
