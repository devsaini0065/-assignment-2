import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  MapPin, 
  PhoneCall, 
  Clock, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onCopyEmail, copied }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulate high-standard client submission & prepare mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ 
        type: 'success', 
        message: 'Thank you for reaching out, Dev! Your message details have been recorded. You can also send directly via email.' 
      });
      
      // Also open user's default email client pre-filled
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent('From: ' + formData.name + ' (' + formData.email + ')\n\n' + formData.message)}`;
      window.location.href = mailtoLink;

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="gradient-text-accent">Contact</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in collaborating, discussing technology, or exploring internship opportunities? I would love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {/* Person Name & Role */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Dev Saini</div>
                    <div className="text-sm font-semibold text-white">
                      B.Tech CSE Student (Roll: {personalInfo.rollNo})
                    </div>
                  </div>
                </div>

                {/* University Item */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">University</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.college}
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center flex-shrink-0 border border-rose-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.collegeLocation}
                    </div>
                  </div>
                </div>

                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 font-medium">Email Address</div>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={onCopyEmail}
                    type="button"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex-shrink-0 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels with Explicit Display Names */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Professional Profiles (Opens in new tab)
                </div>

                {/* LinkedIn with exact display text */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-mono text-cyan-400">LinkedIn Profile</div>
                    <div className="text-xs font-medium text-slate-300 group-hover:text-white truncate">
                      Dev Saini – JECRC University – Jaipur, Rajasthan, India | LinkedIn
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* GitHub with exact display text */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-mono text-indigo-400">GitHub Profile</div>
                    <div className="text-xs font-medium text-slate-300 group-hover:text-white truncate">
                      GitHub – devsaini0065
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>

            </div>

            {/* Quick response badge */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300 flex items-center gap-3">
              <Clock className="w-4 h-4 flex-shrink-0 text-emerald-400" />
              <span>Typically responding within 24 hours to academic and project inquiries.</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill out the form below to reach out directly to Dev Saini.
              </p>

              {status.message && (
                <div
                  className={`p-4 rounded-xl text-xs sm:text-sm mb-6 font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                      : 'bg-rose-950/60 text-rose-300 border border-rose-800/60'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-2">
                  ℹ️ Submitting pre-fills your message in your email client to send directly to <span className="text-indigo-300 font-mono">dev008524@gmail.com</span>.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
