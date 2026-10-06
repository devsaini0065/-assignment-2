import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolioData';
import { Check, Mail } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Handle email copying
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setToastMessage(`Email address copied: ${personalInfo.email}`);
    setTimeout(() => {
      setCopied(false);
      setToastMessage('');
    }, 3000);
  };

  // Scroll spy to highlight active section
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 relative selection:bg-indigo-600/30 selection:text-indigo-200">
      
      {/* Fixed Sticky Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} copied={copied} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact onCopyEmail={handleCopyEmail} copied={copied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 border border-indigo-500/60 text-white shadow-2xl animate-bounce">
          <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
