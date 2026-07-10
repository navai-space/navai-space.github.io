/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Terminal, 
  Database, 
  Globe, 
  TrendingUp, 
  Sparkles, 
  ChevronRight, 
  Play, 
  Pause, 
  RefreshCw, 
  ExternalLink, 
  FileText, 
  CheckCircle, 
  Sliders, 
  Eye, 
  BookOpen, 
  MapPin, 
  Github, 
  Linkedin, 
  Award, 
  Activity, 
  Sun, 
  ShieldCheck,
  Zap,
  Flame,
  Info,
  Mail,
  Radar
} from 'lucide-react';
import { startupData } from '../data';
import NavaiLogo from './NavaiLogo';


interface CompanyWebsiteProps {
  onSwitchToDeveloperPortal: () => void;
}

export default function CompanyWebsite({ onSwitchToDeveloperPortal }: CompanyWebsiteProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', org: '', email: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setContactForm({ name: '', org: '', email: '', message: '' });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950 font-sans leading-relaxed">
      {/* Main Header / Navigation */}
      <header className="border-b border-slate-800/80 sticky top-0 backdrop-blur-md bg-slate-950/90 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <NavaiLogo />

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#vision" className="text-slate-300 hover:text-cyan-400 transition">Vision</a>
            <a href="#model" className="text-slate-300 hover:text-cyan-400 transition">Foundation Model</a>
            <a href="#applications" className="text-slate-300 hover:text-cyan-400 transition">Applications</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">Get in Touch</a>
          </nav>

          <button 
            onClick={onSwitchToDeveloperPortal}
            className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-100 px-4 py-2.5 rounded-lg text-sm font-medium transition cursor-pointer"
          >
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>Setup GitHub Pages</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="vision" className="relative pt-24 pb-28 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.04),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3 h-3 animate-pulse" />
            <span>Next-Gen Rendezvous & Proximity Operations (RPO)</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl mx-auto">
            The Onboard Perception Layer for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Spacecraft Autonomy</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            An edge-optimized multi-sensor foundation model that lets spacecraft track non-cooperative orbital targets in real time, under the harshest lighting conditions in orbit. Fusing RGB, thermal, and neuromorphic event streams.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a 
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold px-6 py-3.5 rounded-lg text-sm hover:opacity-95 transition shadow-lg shadow-cyan-500/10 flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
            <a 
              href="#model"
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-lg text-sm transition flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Explore Model Architecture</span>
            </a>
          </div>

          {/* Clean decorative divider */}
          <div className="pt-6 border-t border-slate-900 max-w-xs mx-auto" />
        </div>
      </section>



      {/* Foundation Model perception details */}
      <section id="model" className="py-24 border-b border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-xs font-mono text-blue-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Robust Under Extreme Conditions</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Multimodal Space Foundation Model
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Direct space intelligence cannot rely on standard single-sensor vision. The NAVAI Foundation Model integrates multi-modal inputs—RGB, thermal, neuromorphic event streams, and high-precision LiDAR depth tracking—to provide continuous, depth-aware, and robust perception across diverse space environments, glare, and total eclipses.
            </p>
          </div>
          
          {/* Horizontal feature cards instead of layout column */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="p-2 bg-cyan-950 border border-cyan-800 text-cyan-400 w-fit rounded-lg">
                <Sun className="w-4 h-4" />
              </div>
              <h4 className="text-white font-semibold font-sans">Specular Filtration</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Fuses event cameras that filter high specular reflection of satellite MLI blankets.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="p-2 bg-amber-950 border border-amber-800 text-amber-500 w-fit rounded-lg">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="text-white font-semibold font-sans">Thermal Continuum</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Maintains target edge contour tracking in complete orbital eclipse darkness.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="p-2 bg-emerald-950 border border-emerald-800 text-emerald-400 w-fit rounded-lg">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-white font-semibold font-sans">Neuromorphic Processing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Captures microsecond asynchronous changes, completely eliminating high-rotation motion blur.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="p-2 bg-blue-950 border border-blue-800 text-blue-400 w-fit rounded-lg">
                <Radar className="w-4 h-4" />
              </div>
              <h4 className="text-white font-semibold font-sans">LiDAR & Depth Ranging</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Indicates absolute target depth, mapping high-density range point clouds for precise docking maneuvers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas of the Foundation Model */}
      <section id="applications" className="py-24 border-b border-slate-900 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-400 mb-4">
              <Globe className="w-3.5 h-3.5 animate-pulse" />
              <span>ORBITAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Foundation Model Application Areas
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Our foundational model is engineered to support a wide range of autonomous orbital operations, delivering critical awareness and precision across diverse space missions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Autonomous Docking & RPO",
                desc: "Delivers continuous, high-precision 6-DoF pose estimation to guide autonomous proximity operations, spacecraft berthing, and orbital refueling.",
                icon: <Cpu className="w-5 h-5 text-cyan-400" />
              },
              {
                title: "Space Domain Awareness",
                desc: "Enables passive tracking, characterization, and classification of resident space objects and high-speed debris, even in low-visibility eclipses.",
                icon: <Eye className="w-5 h-5 text-blue-400" />
              },
              {
                title: "Active Debris Removal",
                desc: "Allows capture vehicles to analyze and synchronize motion with tumbling, non-cooperative target bodies in unstructured states.",
                icon: <Zap className="w-5 h-5 text-amber-400" />
              },
              {
                title: "RPO in Lunar Orbit",
                desc: "Guarantees robust relative navigation and target tracking during rendezvous and proximity operations (RPO) in cislunar space and lunar orbit, overcoming challenging terrain glare and extreme shadows.",
                icon: <Globe className="w-5 h-5 text-emerald-400" />
              }
            ].map((app, idx) => (
              <div key={idx} className="border border-slate-800/80 bg-slate-900/40 hover:border-slate-700/80 transition-all duration-300 p-6 rounded-2xl space-y-4">
                <div className="p-2.5 bg-slate-950 border border-slate-800 w-fit rounded-lg">
                  {app.icon}
                </div>
                <h3 className="text-lg font-semibold text-white font-sans">{app.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="py-24 border-b border-slate-900 bg-slate-950/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-400 mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>COMMUNICATION CHANNEL</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Interested in integrating our multi-sensor perception foundation model into your mission? Contact our aerospace engineering team for technical specifications and pilot deployment inquiries.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono uppercase tracking-wider">Transmission Received</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out to NAVAI. Your inquiry has been routed to our systems engineering team. We will respond within 24 standard hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs text-cyan-400 hover:underline font-mono"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition"
                      placeholder="e.g. Dr. Helen Vance"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400" htmlFor="org">
                      Organization / Agency
                    </label>
                    <input
                      id="org"
                      type="text"
                      required
                      value={contactForm.org}
                      onChange={(e) => setContactForm(prev => ({ ...prev, org: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition"
                      placeholder="e.g. Space Logistics Corp"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400" htmlFor="email">
                    Secure Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition"
                    placeholder="h.vance@spacelogistics.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400" htmlFor="message">
                    Inquiry Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition resize-none"
                    placeholder="Describe your orbital platform, required sensor configurations, or mission parameters..."
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Secure End-to-End Encrypted Tunnel</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold px-6 py-3 rounded-lg text-sm hover:opacity-95 transition shadow-lg shadow-cyan-500/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-xs text-slate-500 text-center font-mono space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <NavaiLogo className="h-8" showText={true} />
          <div>
            © 2026 NAVAI. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span className="text-slate-400 hover:text-white cursor-pointer" onClick={onSwitchToDeveloperPortal}>Setup GitHub Pages Template</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
