import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Crafted <span className="gradient-text-accent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical applications built to explore artificial intelligence, web technologies, and student productivity.
          </p>
        </div>

        {/* 3 Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-800/80 glass-card-hover group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-violet-500 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge & Category Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.shortDescription}
                </p>
              </div>

              {/* Bottom Section: Technologies & Action Button */}
              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Action Button */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>View Project</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for viewing detailed project specs */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
