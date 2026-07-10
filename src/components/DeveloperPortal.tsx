/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FileText, 
  Folder, 
  FolderOpen, 
  Copy, 
  Check, 
  ArrowLeft, 
  Settings, 
  Terminal, 
  Github, 
  Layers, 
  ChevronRight, 
  BookOpen, 
  ExternalLink,
  Code2,
  GitBranch,
  CloudLightning,
  AlertCircle
} from 'lucide-react';
import { jekyllFiles, hugoFiles, setupReadme } from '../data';
import { RepoFile } from '../types';
import NavaiLogo from './NavaiLogo';

interface DeveloperPortalProps {
  onBackToWebsite: () => void;
}

export default function DeveloperPortal({ onBackToWebsite }: DeveloperPortalProps) {
  const [ssgType, setSsgType] = useState<'jekyll' | 'hugo'>('jekyll');
  const [selectedFile, setSelectedFile] = useState<RepoFile>(jekyllFiles[0]);
  const [copied, setCopied] = useState(false);
  const [activePortalTab, setActivePortalTab] = useState<'editor' | 'readme' | 'architecture'>('editor');

  const files = ssgType === 'jekyll' ? jekyllFiles : hugoFiles;

  const handleSsgChange = (type: 'jekyll' | 'hugo') => {
    setSsgType(type);
    const newFiles = type === 'jekyll' ? jekyllFiles : hugoFiles;
    setSelectedFile(newFiles[0]);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-slate-950 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBackToWebsite}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1.5 text-xs font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Live Website</span>
          </button>
          <div className="h-6 w-[1px] bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-cyan-400" />
            <div>
              <span className="font-semibold text-sm text-white">GitHub Pages Repository Setup</span>
              <span className="block text-[10px] font-mono text-slate-500">Fast Static Site Generator (SSG) Deploy Portal</span>
            </div>
          </div>
        </div>

        {/* SSG Mode Selector */}
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => handleSsgChange('jekyll')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition cursor-pointer ${
              ssgType === 'jekyll' 
                ? 'bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 shadow' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Jekyll Setup (Ruby)
          </button>
          <button
            onClick={() => handleSsgChange('hugo')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition cursor-pointer ${
              ssgType === 'hugo' 
                ? 'bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 shadow' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Hugo Setup (Go)
          </button>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <div className="flex-1 grid lg:grid-cols-12 overflow-hidden">
        {/* LEFT COLUMN: Repository Directory Explorer & File Select (3 cols) */}
        <div className="lg:col-span-3 border-r border-slate-800 bg-slate-950/50 p-6 space-y-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 uppercase tracking-wider border-b border-slate-900 pb-2">
              <span>Directory Structure</span>
              <span className="text-[10px] text-cyan-500">{ssgType.toUpperCase()} PROJECT</span>
            </div>

            {/* Folder representations */}
            <div className="space-y-1 font-mono text-xs">
              {/* Root Project Directory */}
              <div className="flex items-center gap-2 text-slate-300 py-1">
                <FolderOpen className="w-4 h-4 text-cyan-400" />
                <span className="font-bold">navai-space /</span>
              </div>

              {/* Subfolders & Files list based on Jekyll/Hugo selection */}
              <div className="pl-4 space-y-1 border-l border-slate-800 ml-2">
                {/* Conditionally show _posts / content folder depending on SSG type */}
                <div className="flex items-center gap-2 text-slate-400 py-1 font-medium">
                  <Folder className="w-3.5 h-3.5 text-blue-400" />
                  <span>{ssgType === 'jekyll' ? '_posts' : 'content'} /</span>
                </div>

                {/* Markdown Files inside folder */}
                <div className="pl-4 border-l border-slate-800/60 ml-1.5 space-y-0.5">
                  {files.filter(f => f.path.startsWith('_posts/') || f.path.startsWith('content/')).map(file => (
                    <button
                      key={file.path}
                      onClick={() => setSelectedFile(file)}
                      className={`w-full text-left py-1 px-2 rounded flex items-center gap-2 transition cursor-pointer ${
                        selectedFile.path === file.path 
                          ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-800/20' 
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span className="truncate">{file.name.replace(/_posts\/|content\//, '')}</span>
                    </button>
                  ))}
                </div>

                {/* Configuration and other Root Files */}
                {files.filter(f => !f.path.startsWith('_posts/') && !f.path.startsWith('content/') && !f.path.startsWith('.github/')).map(file => (
                  <button
                    key={file.path}
                    onClick={() => setSelectedFile(file)}
                    className={`w-full text-left py-1.5 px-2 rounded flex items-center gap-2 transition cursor-pointer ${
                      selectedFile.path === file.path 
                        ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-800/20' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-500/80" />
                    <span>{file.name}</span>
                  </button>
                ))}

                {/* GitHub Actions Directory */}
                <div className="flex items-center gap-2 text-slate-400 py-1 font-medium">
                  <Folder className="w-3.5 h-3.5 text-emerald-400" />
                  <span>.github / workflows /</span>
                </div>

                <div className="pl-4 border-l border-slate-800/60 ml-1.5">
                  {files.filter(f => f.path.startsWith('.github/')).map(file => (
                    <button
                      key={file.path}
                      onClick={() => setSelectedFile(file)}
                      className={`w-full text-left py-1 px-2 rounded flex items-center gap-2 transition cursor-pointer ${
                        selectedFile.path === file.path 
                          ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-800/20' 
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <CloudLightning className="w-3.5 h-3.5 text-emerald-400" />
                      <span>deploy.yml</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick SSG Specs card */}
          <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-4 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Deployment Target Info</span>
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Platform:</span>
                <span className="text-white">GitHub Pages</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Domain:</span>
                <span className="text-cyan-400">navai-space.github.io</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">SSL Certificate:</span>
                <span className="text-emerald-400">Auto (Let's Encrypt)</span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE/RIGHT PANEL: Interactive File Editor or Guides (9 cols) */}
        <div className="lg:col-span-9 flex flex-col bg-slate-900 overflow-hidden">
          {/* Inner Navigation Tabs */}
          <div className="bg-slate-950 border-b border-slate-800/80 px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {[
                { id: 'editor', label: 'File Preview & Editor', icon: <Code2 className="w-4 h-4" /> },
                { id: 'readme', label: 'Setup Guide README', icon: <BookOpen className="w-4 h-4" /> },
                { id: 'architecture', label: 'Automated CI/CD Architecture', icon: <Layers className="w-4 h-4" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActivePortalTab(tab.id as any)}
                  className={`h-14 px-3 font-medium text-xs flex items-center gap-2 border-b-2 transition cursor-pointer ${
                    activePortalTab === tab.id
                      ? 'border-cyan-500 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-mono hidden sm:block">
              Currently Editing: <span className="text-slate-300 font-bold">{selectedFile.path}</span>
            </div>
          </div>

          {/* Interactive view panels based on active tab */}
          <div className="flex-1 overflow-y-auto p-6">
            {activePortalTab === 'editor' && (
              <div className="grid lg:grid-cols-12 gap-6 items-start">
                {/* Code Editor block (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                    {/* Code Editor Ribbon */}
                    <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex justify-between items-center text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span>{selectedFile.path}</span>
                        <span className="text-[10px] text-slate-500 uppercase bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800/50">
                          {selectedFile.language}
                        </span>
                      </div>
                      <button
                        onClick={handleCopyCode}
                        className="p-1 px-2.5 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer text-[11px]"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Syntactical Code Block Rendering */}
                    <div className="p-4 font-mono text-xs overflow-x-auto bg-slate-950/80 leading-relaxed max-h-[500px]">
                      <table className="w-full">
                        <tbody>
                          {selectedFile.content.split('\n').map((line, idx) => (
                            <tr key={idx} className="hover:bg-slate-900/40">
                              <td className="pr-4 text-slate-600 text-right select-none w-10 border-r border-slate-900">
                                {idx + 1}
                              </td>
                              <td className="pl-4 whitespace-pre text-slate-300">
                                {line}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Explanatory Sidebar (4 cols) */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                    <h4 className="font-semibold text-white text-sm flex items-center gap-2 border-b border-slate-900 pb-2">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      <span>File Metadata</span>
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {selectedFile.description}
                    </p>
                    <div className="bg-slate-900 border border-slate-800/80 p-3.5 rounded-lg text-xs font-mono text-slate-500 space-y-2">
                      <div>
                        <span className="block text-[10px] uppercase text-slate-600">File Language</span>
                        <span className="text-slate-300 font-medium">{selectedFile.language.toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-slate-600">File Path</span>
                        <span className="text-slate-300 font-medium text-[11px] break-all">{selectedFile.path}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-950/20 border border-cyan-800/30 rounded-xl p-5 space-y-3">
                    <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-cyan-400" />
                      <span>Static Site Generation Tip</span>
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      This file contains front matter (the metadata blocked by <code className="text-cyan-300">---</code> characters). Front matter is parsed dynamically by {ssgType === 'jekyll' ? 'Jekyll' : 'Hugo'} to render the pages with specific navigation attributes, layouts, and page routing.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activePortalTab === 'readme' && (
              <div className="max-w-4xl mx-auto space-y-8 bg-slate-950 border border-slate-800 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-slate-900 pb-4">
                  <Github className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h3 className="font-bold text-xl text-white">GitHub Pages Deployment Instructions</h3>
                    <p className="text-xs text-slate-500">Step-by-step instructions to initialize git and deploy to cloud web servers.</p>
                  </div>
                </div>

                {/* Markdown Readme Rendering */}
                <div className="prose prose-invert prose-slate prose-xs max-w-none text-xs leading-relaxed space-y-6">
                  <p className="text-slate-300">
                    Follow these fast steps to host your NAVAI tech milestones page on GitHub Pages with fully automated deployments!
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-bold font-mono text-xs flex items-center justify-center mt-0.5">1</span>
                      <div className="flex-1">
                        <strong className="text-white text-sm block mb-1">Create a GitHub Repository</strong>
                        <span className="text-slate-400">Log into GitHub, click <strong>New</strong>, and name your repository (e.g. <code className="text-cyan-300">navai-space</code>). Make sure it is <strong>Public</strong> so that free GitHub Pages is accessible. Keep it empty.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-bold font-mono text-xs flex items-center justify-center mt-0.5">2</span>
                      <div className="flex-1">
                        <strong className="text-white text-sm block mb-1">Choose Site Generator and Create Files</strong>
                        <span className="text-slate-400">Copy the files from our explorer panel on the left. If you chose Jekyll, write them inside Jekyll's folder directory tree structure. If Hugo, write them inside Hugo's directory structures.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-bold font-mono text-xs flex items-center justify-center mt-0.5">3</span>
                      <div className="flex-1">
                        <strong className="text-white text-sm block mb-1">Push Locally Saved Files to Github</strong>
                        <span className="text-slate-400">Run the following commands in your local directory inside your terminal:</span>
                        <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg font-mono text-xs text-slate-300 mt-2 space-y-1 relative group">
                          <code>git init -b main</code><br />
                          <code>git add .</code><br />
                          <code>git commit -m "Set up automated SSG milestones portal"</code><br />
                          <code>git remote add origin https://github.com/YOUR_USERNAME/navai-space.git</code><br />
                          <code>git push -u origin main</code>
                          <button 
                            onClick={() => handleCopyCommand("git init -b main\ngit add .\ngit commit -m \"Set up automated SSG milestones portal\"\ngit remote add origin https://github.com/YOUR_USERNAME/navai-space.git\ngit push -u origin main")}
                            className="absolute right-2 top-2 p-1.5 rounded bg-slate-950 border border-slate-800/80 text-slate-400 hover:text-white transition cursor-pointer"
                            title="Copy commands"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-bold font-mono text-xs flex items-center justify-center mt-0.5">4</span>
                      <div className="flex-1">
                        <strong className="text-white text-sm block mb-1">Configure GitHub Pages Action Source</strong>
                        <span className="text-slate-400">Go to your repository on GitHub, navigate to <strong>Settings</strong> &gt; <strong>Pages</strong>. Under <strong>Build and deployment</strong>, select <strong>GitHub Actions</strong> as your Source. The action workflow we provided will automatically trigger and deploy your site live!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePortalTab === 'architecture' && (
              <div className="max-w-4xl mx-auto space-y-8 bg-slate-950 border border-slate-800 rounded-xl p-6 sm:p-8">
                <div className="border-b border-slate-900 pb-4">
                  <h3 className="font-bold text-xl text-white">How Automated CI/CD Works</h3>
                  <p className="text-xs text-slate-500">Understanding the Git-triggered server-side compilation workflow for GitHub Pages.</p>
                </div>

                {/* Technical Architecture Flow Diagram */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-900 border border-slate-800/60 p-5 rounded-xl space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                      <GitBranch className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">1. Push Markdown to Main</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      You write standard markdown files locally or in GitHub Web editor and push code revisions to the <code className="text-cyan-300">main</code> branch.
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800/60 p-5 rounded-xl space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                      <CloudLightning className="w-5 h-5 animate-pulse" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">2. GitHub Action Build</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      A free GitHub container boots, reads your configs, compiles the markdown into high-performance static HTML/CSS files, and outputs the artifacts.
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800/60 p-5 rounded-xl space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">3. Global CDN Deployment</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      The static content is deployed automatically onto GitHub Pages global servers with custom domain binding and an automated SSL certificate.
                    </p>
                  </div>
                </div>

                {/* Advantages block */}
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl space-y-2 text-xs">
                  <strong className="text-white block font-medium">Why This Setup is Ideal for NAVAI:</strong>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                    <li><strong>No Database Server Overheads</strong>: 100% static compilation protects site speed from slow connection delays.</li>
                    <li><strong>Markdown Simplicity</strong>: Easily write tech posts without writing any complex HTML/CSS layout files.</li>
                    <li><strong>Version Controlled</strong>: Track every single website rewrite, milestone update, or team addition securely in Git history.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
