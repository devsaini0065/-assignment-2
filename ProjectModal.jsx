import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60">
              {project.category}
            </span>
            <span className="text-xs font-mono text-emerald-400">
              ● Active Project
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Key Project Highlights</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-800 text-indigo-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.demoUrl && project.demoUrl !== '#' ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-md shadow-indigo-600/30"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-[11px] font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50">
                Demo Link: Configurable in portfolioData.js
              </span>
            )}
            
            <a
              href={project.githubUrl || 'https://github.com/devsaini0065'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
