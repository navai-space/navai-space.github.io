/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  Globe,
  Sparkles,
  ChevronRight,
  RefreshCw,
  FileText,
  CheckCircle,
  Eye,
  Linkedin,
  Sun,
  ShieldCheck,
  Zap,
  Flame,
  Mail,
  Radar
} from 'lucide-react';
import NavaiLogo from './NavaiLogo';


// FormSubmit target. Replace the email with the random alias FormSubmit emails you after the
// first activation (see formsubmit.co, "Hide your email address") so the address isn't public.
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/akum86@gmail.com';

export default function CompanyWebsite() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', org: '', email: '', message: '' });
  // Honeypot: hidden from people, but bots fill it in and FormSubmit then discards the submission.
  const [honeypot, setHoneypot] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitError(false);
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: contactForm.name,
          organization: contactForm.org,
          email: contactForm.email,
          message: contactForm.message,
          _subject: `NAVAI website inquiry from ${contactForm.name}`,
          _replyto: contactForm.email,
          _template: 'table',
          _captcha: 'false',
          _honey: honeypot,
        }),
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      setIsSubmitted(true);
      setContactForm({ name: '', org: '', email: '', message: '' });
    } catch {
      setSubmitError(true);
    } finally {
      setIsSending(false);
    }
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
            An edge-optimized multi-sensor foundation model designed to help spacecraft track non-cooperative orbital targets in real time, including in the difficult lighting conditions of orbit. It fuses RGB, thermal, neuromorphic event, and LiDAR data.
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
              <span>Built for Extreme Conditions</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Multimodal Space Foundation Model
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Single-sensor vision struggles with the glare, darkness, and fast motion of orbital operations. The NAVAI Foundation Model combines RGB, thermal, neuromorphic event, and LiDAR depth data, and is designed to keep perception continuous and depth-aware through glare and eclipse.
            </p>
          </div>
          
          {/* Horizontal feature cards instead of layout column */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="p-2 bg-cyan-950 border border-cyan-800 text-cyan-400 w-fit rounded-lg">
                <Sun className="w-4 h-4" />
              </div>
              <h4 className="text-white font-semibold font-sans">Specular Filtration</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Uses event-camera data to reduce the impact of strong specular reflections from satellite MLI blankets.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="p-2 bg-amber-950 border border-amber-800 text-amber-500 w-fit rounded-lg">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="text-white font-semibold font-sans">Thermal Continuum</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Helps maintain target contour tracking during orbital eclipse, when visible-light cameras see little.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="p-2 bg-emerald-950 border border-emerald-800 text-emerald-400 w-fit rounded-lg">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-white font-semibold font-sans">Neuromorphic Processing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Captures microsecond-scale asynchronous changes, reducing motion blur on fast-rotating targets.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <div className="p-2 bg-blue-950 border border-blue-800 text-blue-400 w-fit rounded-lg">
                <Radar className="w-4 h-4" />
              </div>
              <h4 className="text-white font-semibold font-sans">LiDAR & Depth Ranging</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Adds direct range measurements and point clouds to support precise docking approaches.</p>
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
              Our foundation model is being designed to support a range of autonomous orbital operations, from docking and servicing to debris removal and space domain awareness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Autonomous Docking & RPO",
                desc: "Designed to provide continuous 6-DoF pose estimation to support autonomous proximity operations, spacecraft berthing, and orbital refueling.",
                icon: <Cpu className="w-5 h-5 text-cyan-400" />
              },
              {
                title: "Space Domain Awareness",
                desc: "Supports passive tracking, characterization, and classification of resident space objects and debris, including during low-visibility eclipse periods.",
                icon: <Eye className="w-5 h-5 text-blue-400" />
              },
              {
                title: "Active Debris Removal",
                desc: "Helps capture vehicles estimate the motion of tumbling, non-cooperative targets so they can approach and match it.",
                icon: <Zap className="w-5 h-5 text-amber-400" />
              },
              {
                title: "RPO in Lunar Orbit",
                desc: "Designed for relative navigation and target tracking during rendezvous and proximity operations (RPO) in cislunar space and lunar orbit, where terrain glare and deep shadows make perception difficult.",
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
                  Thank you for reaching out to NAVAI. Your inquiry has been routed to our team, and we'll get back to you soon.
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
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                />
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
                      placeholder="Your name"
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
                      placeholder="Company, agency or university"
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
                    placeholder="you@organization.com"
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

                {submitError && (
                  <p className="text-xs text-red-400 font-mono">
                    Transmission failed. Please check your connection and try again in a moment.
                  </p>
                )}

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold px-6 py-3 rounded-lg text-sm hover:opacity-95 transition shadow-lg shadow-cyan-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
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
          <NavaiLogo className="h-8" />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/company/navai-space"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition"
              aria-label="NAVAI Space on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <div>
              © 2026 NAVAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
