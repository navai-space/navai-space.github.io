/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RepoFile, StartupMilestone } from './types';

export const startupData = {
  name: "NAVAI Space",
  tagline: "The onboard perception layer for spacecraft autonomy",
  description: "An edge-optimized multi-sensor foundation model that lets spacecraft track non-cooperative targets in real time, under the harshest lighting conditions in orbit.",
  valueProposition: "We build the onboard perception layer for spacecraft autonomy: an edge-optimized multi-sensor foundation model that lets spacecraft track non-cooperative targets in real time, under the harshest lighting conditions in orbit.",
  founders: [
    {
      name: "Dr. Arunkumar Rathinam",
      role: "Founder & CEO, AI Infrastructure",
      bio: "PhD in Space Robotics with on-orbit flight heritage (SnT-AI4SPACE, AUDACITY, UWE-4). Currently Research Scientist at SnT, University of Luxembourg, leading the ESA DIOSSA projects. Expert in edge-AI space pipelines and hardware-in-the-loop test campaigns.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      links: {
        linkedin: "https://lu.linkedin.com/in/arunsz",
        portfolio: "https://arunrathinam.github.io/",
        scholar: "https://scholar.google.com/citations?user=zC2Ri2MAAAAJ&hl=en"
      }
    },
    {
      name: "Sivaperuman Muniyasamy",
      role: "Co-Founder & CTO, GNC Systems",
      bio: "PhD Candidate in Aerospace Engineering at the University of Arizona & NASA MSTAR researcher. Expert in orbital dynamics, spacecraft swarms, and certified safe reinforcement learning. Asteroid 333178 Sivaperuman was named after him by the IAU.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      links: {
        linkedin: "https://www.linkedin.com/in/sivaperuman/",
        portfolio: "https://sivaastro.github.io/",
        scholar: "https://scholar.google.com/citations?user=07ROUIgAAAAJ&hl=en"
      }
    }
  ],
  milestones: [
    {
      title: "High-Performance Computing Integration",
      limit: "1500 chars",
      count: "1356 chars",
      category: "hpc",
      icon: "Cpu",
      content: "HPC is the core infrastructure behind our main asset: a multi-sensor perception foundation model for rendezvous and proximity operations (RPO). We plan to use MeluXina for two compute-heavy workloads.\n\nThe first is synthetic data generation. Training robust models requires large, diverse orbital datasets that simply do not exist in the real world. Our in-house simulators produce physically based renderings of spacecraft and planetary scenes across RGB, event, thermal and depth modalities, with every frame automatically annotated (6-DoF pose, keypoints, bounding boxes, depth, segmentation). Producing millions of such images is only practical on a system of MeluXina's scale.\n\nThe second is foundation model training. We will pretrain a domain-robust encoder with self-supervised learning on unlabeled synthetic and real imagery across multi-node GPU clusters, then fine-tune and benchmark task-specific heads. This is not feasible on local workstations.\n\nThe founder has used MeluXina as a researcher over the past two years, and the team routinely manages PyTorch training runs and dataset pipelines on HPC systems, so deployment on the cluster can start on day one. Access to MeluXina lets us move from ad-hoc workstations to a scalable, reproducible production pipeline, cutting both the cost and the timeline of building our datasets and models."
    },
    {
      title: "Linux & System Command Line Fluency",
      limit: "1500 chars",
      count: "1215 chars",
      category: "team",
      icon: "Terminal",
      content: "Yes. Linux and the command line are the backbone of our daily engineering work, and our experience maps directly onto MeluXina's environment.\n\nOn the HPC side, we routinely configure and scale deep learning workloads on remote multi-node GPU clusters: SSH access, environment management (conda, venv), Git-based workflows and Docker containerization. Slurm-based scheduling, as used on MeluXina, is part of our normal routine.\n\nOn the systems side, our day-to-day work includes headless rendering on Linux servers, GPU driver and CUDA toolkit administration, and Python command-line pipelines for handling large space datasets, including multi-sensor synchronization and format conversion.\n\nOn the robotics side, we integrate physical vision systems in hardware-in-the-loop setups using Linux and ROS, and we have the low-level profiling and compilation skills needed to optimize and debug models on resource-constrained edge hardware such as NVIDIA Jetson and neuromorphic platforms. Several of our publications include machine learning models deployed and benchmarked on such devices.\n\nThis fluency means our stack can move from local sandboxes to supercomputing production workloads without operational friction."
    },
    {
      title: "Dataset Ownership & Acquisition Strategy",
      limit: "1500 chars",
      count: "1222 chars",
      category: "data",
      icon: "Database",
      content: "We have both a proprietary data generation engine and direct access to specialized space-vision datasets.\n\nFirst, our orbital image simulator generates high-fidelity renderings across multiple modalities (RGB, event and depth cameras) and automatically produces perfect ground-truth labels: bounding boxes, component segmentation, depth maps and 6-DoF pose. These labels are essential for training downstream edge models, yet extremely scarce in real orbital imagery. This engine removes our dependence on hand-labeled data.\n\nSecond, we work hands-on with several medium-to-large space datasets, including the public SPEED+ benchmark (paired synthetic and hardware-in-the-loop domains), SPADES (event-based spacecraft pose, authored by the founder), and ECLIPSE and ELOPE (lunar navigation).\n\nDuring the Fit 4 Start program we will expand our validation database through laboratory collection campaigns, using facilities such as SnT's Zero-G Lab and ESA GRALS. Our team has run several such campaigns for on-orbit servicing verification and validation, and we will work with partner labs to acquire physical hardware-in-the-loop data so the foundation model is tested against real-world domain shifts, not just simulation."
    },
    {
      title: "SDG Targets & Environmental Impact",
      limit: "1500 chars",
      count: "1037 chars",
      category: "impact",
      icon: "Globe",
      content: "Primary: SDG 9 (Industry, Innovation & Infrastructure). Secondary: SDG 12 (Responsible Consumption & Production).\n\nWe address these goals through the technical function of our product rather than generic space use cases.\n\nFor SDG 9, our onboard multi-sensor perception layer is the enabling software for in-space infrastructure. Reliable autonomous inspection, satellite life-extension and debris characterization all depend on a spacecraft being able to perceive a non-cooperative target in real time. By providing that capability as portable software, we lower the technical barrier for servicing platforms and help keep orbital assets safely operational.\n\nFor SDG 12, our edge-deployable perception model enables safe close-proximity autonomy around non-cooperative, tumbling objects. This is the core capability behind Active Debris Removal (ADR) and On-Orbit Servicing (OOS): missions that mitigate Kessler-syndrome risks, extend satellite lifetimes, and reduce the mass of replacement assets that must be manufactured and launched."
    },
    {
      title: "Target Market & Competitive Advantage",
      limit: "1500 chars",
      count: "1352 chars",
      category: "market",
      icon: "TrendingUp",
      content: "Our target market is B2B, split between direct buyers and end users within the space sustainability ecosystem.\n\nDirect buyers:\n- On-Orbit Servicing (OOS) and Active Debris Removal (ADR) operators running close-proximity missions (e.g. Astroscale, ClearSpace, D-Orbit). They buy our software or payload to enable autonomous docking and inspection.\n- Satellite primes and integrators (e.g. Airbus, Thales Alenia Space, OHB) embedding GNC and perception intelligence into next-generation platforms.\n\nEnd users and beneficiaries:\n- Mega-constellation operators (telecom, Earth observation) that need third-party servicing or edge-based collision avoidance.\n- Defense and civil space agencies (ESA, US Space Force) procuring Space Domain Awareness data and debris mitigation.\n\nMarket size and growth: the global OOS market is valued at $5.16B in 2026 and projected to reach $12.60B by 2035 (10.4% CAGR), driven by LEO infrastructure expansion. The Space Situational Awareness market stands at $1.9B in 2026, scaling to $3B by 2035.\n\nRegulatory tailwinds accelerate adoption: the FCC's 5-year deorbiting rule and ESA's Zero Debris Charter (debris neutrality by 2030) are forcing operators to invest in sustainability."
    }
  ] as StartupMilestone[],
  images: {
    simulator: "/src/assets/images/space_foundation_model_1783368793204.jpg",
    fusion: "/src/assets/images/sensor_fusion_1783279044086.jpg",
    hardware: "/src/assets/images/edge_hardware_space_1783279058273.jpg"
  }
};

// --- JEKYLL FILES ---
export const jekyllFiles: RepoFile[] = [
  {
    path: '_config.yml',
    name: '_config.yml',
    language: 'yaml',
    description: 'Jekyll configuration file specifying theme, layout details, and site-wide metadata.',
    content: `# Site Settings
title: "NAVAI"
tagline: "The onboard perception layer for spacecraft autonomy"
email: "info@navai.space"
description: >-
  Edge-optimized multi-sensor foundation models for satellite proximity operations,
  active debris removal, and safe space robotics.
baseurl: "" # set this to your repository name, e.g. "/repository-name"
url: "https://navai-space.github.io"

# Build Settings
theme: minima
plugins:
  - jekyll-feed
  - jekyll-seo-tag

# Theme Customizations
minima:
  skin: dark # Modern look suitable for space technology
  social_links:
    github: navai-space
    linkedin: navai-space
`
  },
  {
    path: 'Gemfile',
    name: 'Gemfile',
    language: 'ruby',
    description: 'The Bundler configuration listing required gems for the Jekyll environment.',
    content: `source "https://rubygems.org"

# Hello! This Gemfile defines the Jekyll dependencies for your NAVAI site.
gem "jekyll", "~> 4.3.2"
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
end
`
  },
  {
    path: 'index.md',
    name: 'index.md',
    language: 'markdown',
    description: 'The homepage of your Jekyll site, displaying the core value proposition and links.',
    content: `---
layout: home
title: NAVAI
tagline: Spacecraft Edge Perception for Rendezvous & Proximity Operations (RPO)
---

# NAVAI

**The onboard perception layer for spacecraft autonomy.**

We build edge-optimized, multi-sensor perception foundation models that enable spacecraft to track non-cooperative orbital targets in real-time under extreme, high-contrast lighting conditions.

## Key Pillars

- **RGB + Neuromorphic + Thermal Fusion**: Native multi-sensor streams keeping tracking functional through blinding glare and solar eclipses.
- **Self-Supervised Foundation Models**: Pretrained on massive synthetic datasets to solve the industry-wide shortage of hand-labeled space imagery.
- **Flight-Realistic Edge Deployment**: Compact neural networks running in safety-critical real-time GNC loops on space-grade edge computers.

## Tech Showcase & Milestones

Check out our [Technical Milestones](/milestones) and our [Sensor Fusion Showcase](/posts/sensor-fusion-space) to see how our models perform in laboratory hardware-in-the-loop and in-space validations.

***

### Contact & Collaboration
We are in active discussions with European and US On-Orbit Servicing (OOS) and Active Debris Removal (ADR) operators. Reach out to collaborate at [info@navai.space](mailto:info@navai.space).
`
  },
  {
    path: 'about.md',
    name: 'about.md',
    language: 'markdown',
    description: 'About page introducing the founding team and academic partners.',
    content: `---
layout: page
title: About Us
permalink: /about/
---

# Our Team

NAVAI was founded by a team of leading space robotics and computer vision researchers from the **Interdisciplinary Centre for Security, Reliability and Trust (SnT) at the University of Luxembourg** and the **University of Arizona**.

## Founders

### Dr. Arunkumar Rathinam (Founder & CEO)
- **Background**: PhD in Space Robotics with on-orbit flight heritage (SnT-AI4SPACE, AUDACITY, UWE-4). Lead researcher on the ESA DIOSSA projects.
- [Personal Website](https://arunrathinam.github.io/) | [Google Scholar](https://scholar.google.com/citations?user=zC2Ri2MAAAAJ&hl=en)

### Sivaperuman Muniyasamy (Co-Founder & CTO)
- **Background**: PhD Candidate in Aerospace Engineering at the University of Arizona, NASA MSTAR researcher. GNC and safe reinforcement learning expert. In recognition of his work, the IAU named asteroid **333178 Sivaperuman** in his honor.
- [Personal Portfolio](https://sivaastro.github.io/) | [Google Scholar](https://scholar.google.com/citations?user=07ROUIgAAAAJ&hl=en)

## Collaborators and Partners
We operate within two of the world's leading space research ecosystems:
1. **SnT, University of Luxembourg**: Utilizing the Zero-G Lab to execute physical hardware-in-the-loop orbital simulation under realistic high-contrast lighting.
2. **University of Arizona (NASA MSTAR)**: Providing high-fidelity GNC integration and closed-loop control simulation.
`
  },
  {
    path: '_posts/2026-07-05-tech-milestones.md',
    name: '_posts/2026-07-05-tech-milestones.md',
    language: 'markdown',
    description: 'Blog post detailing the HPC synthetic pipeline and training results.',
    content: `---
layout: post
title: "Technical Milestones: Supercomputing at MeluXina for Space Autonomy"
date: 2026-07-05 12:00:00 +0200
categories: technology milestones
---

# Scalable Foundation Models on MeluXina Supercomputer

Training domain-robust, multi-sensor perception models for orbital proximity operations requires immense computational resources. At NAVAI, we have moved beyond local workstation constraints to establish a scalable supercomputing production pipeline on the **MeluXina** HPC cluster.

## 1. High-Fidelity Synthetic Spacecraft Simulation
To overcome the extreme scarcity of real orbital imagery, our in-house simulator generates high-fidelity rendering streams.

![Spacecraft Simulator Output](/assets/images/orbital_simulator.jpg)
*Figure 1: Perfect ground-truth annotations (6-DoF pose, components, bounding boxes) generated automatically in real-time by our orbital rendering engine.*

## 2. Multi-Node Deep Learning Pretraining
Using MeluXina's GPU cluster, we pretrain a robust multi-sensor encoder with self-supervised learning on millions of simulated and physical frames. 

This model fuses three critical streams:
1. **RGB Camera**: For standard high-resolution tracking under favorable lighting.
2. **Thermal Infrared**: To keep tracking operational through solar blinding, eclipses, and harsh shadow lines.
3. **Neuromorphic Event Sensors**: Delivering microsecond-latency tracking of fast-tumbling objects without motion blur at ultra-low power.

## 3. Flight-Realistic Edge Validation
By dividing our architecture into a **Real-Time Onboard Edge Tier** (using lightweight heads optimized for space-grade edge FPGAs and neuromorphic chips) and an **Off-Board Advisor Tier**, we enable robust proximity autonomy that complies with strict size, weight, and power (SWaP) constraints.
`
  },
  {
    path: '_posts/2026-07-04-sensor-fusion-space.md',
    name: '_posts/2026-07-04-sensor-fusion-space.md',
    language: 'markdown',
    description: 'Technical deep-dive on neuromorphic and thermal sensor fusion.',
    content: `---
layout: post
title: "Deep Dive: Solving Orbital Glare with Neuromorphic & Thermal Fusion"
date: 2026-07-04 10:00:00 +0200
categories: engineering sensor-fusion
---

# Overcoming the Extreme Lighting of Outer Space

Standard cameras suffer severely from motion blur and extreme solar saturation in space. When a satellite transitions from direct sunlight to the deep shadow of the Earth, typical computer vision algorithms lose tracking immediately.

![Multi-Sensor Modalities](/assets/images/sensor_fusion.jpg)
*Figure 2: Our multi-sensor fusion pipeline. Left: Saturation on RGB sensor. Middle: Thermal infrared signature tracking. Right: Event-based edge outlines capturing microsecond updates.*

Our core innovation relies on **Event-based Neuromorphic Sensors** fused with **Thermal Infrared streams**:
- **Microsecond Latency**: Event cameras do not capture frames; instead, they measure per-pixel intensity changes asynchronously. This removes motion blur and offers incredible dynamic range (120dB+).
- **Thermal Continuity**: Thermal sensors penetrate solar blinds, tracking warm spacecraft components against the deep space background.
- **Consolidated Backbone**: Our self-supervised model translates these diverse signals into a single, unified 3D coordinate space.

We validate this software-defined autonomy stack inside SnT's **Zero-G Lab** using physical hardware robotic emulators.
`
  },
  {
    path: '.github/workflows/deploy.yml',
    name: 'deploy.yml (Jekyll)',
    language: 'yaml',
    description: 'GitHub Actions workflow to build and deploy your Jekyll site automatically on commit to main.',
    content: `name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Jekyll
        run: bundle exec jekyll build --baseurl "\${{ steps.pages.outputs.baseurl }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`
  }
];

// --- HUGO FILES ---
export const hugoFiles: RepoFile[] = [
  {
    path: 'hugo.toml',
    name: 'hugo.toml',
    language: 'toml',
    description: 'Hugo configuration file specifying theme, base URL, menus, and taxomonies.',
    content: `baseURL = 'https://navai.github.io/'
languageCode = 'en-us'
title = 'NAVAI'
theme = 'ananke'

[params]
  description = "The onboard perception layer for spacecraft autonomy"
  background_color_class = "bg-black" # High tech, dark look
  social_links = [
    { name = "github", url = "https://github.com/navai-space" },
    { name = "linkedin", url = "https://linkedin.com/in/navai-space" }
  ]

[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 10
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 20
  [[menu.main]]
    name = "Milestones & Posts"
    url = "/posts/"
    weight = 30
`
  },
  {
    path: 'content/_index.md',
    name: 'content/_index.md',
    language: 'markdown',
    description: 'The frontpage of your Hugo site containing the homepage hero text and value statement.',
    content: `---
title: "NAVAI"
description: "The onboard perception layer for spacecraft autonomy"
featured_image: "/images/orbital_simulator.jpg"
---

# Multi-Sensor Spacecraft Perception for Close-Proximity Autonomy

NAVAI builds edge-optimized multi-sensor foundation models that enable spacecraft to track non-cooperative orbital targets in real-time, surviving extreme lighting shifts while keeping size, weight, and power (SWaP) low.

## Core Capabilities

1. **Neuromorphic & Thermal Sensor Fusion**: Resolving severe solar blinding and high motion blur.
2. **Self-Supervised Foundation Model**: Training generalizable features on massive synthetic datasets.
3. **Flight-Realistic Edge Tiering**: Running lightweight GNC heads directly on space-grade computers in real-time.

***

### Collaboration & Contact
We are actively designing partner validations with leading European and US operators. Contact us at [info@navai.space](mailto:info@navai.space).
`
  },
  {
    path: 'content/about.md',
    name: 'content/about.md',
    language: 'markdown',
    description: 'The about page of your Hugo site showing founders and partners.',
    content: `---
title: "About Us"
date: 2026-07-05
draft: false
---

# The NAVAI Team

We are computer vision and space robotics researchers from the **Interdisciplinary Centre for Security, Reliability and Trust (SnT) at the University of Luxembourg** and the **University of Arizona**.

## Leadership

### Dr. Arunkumar Rathinam (Founder & CEO)
Research Scientist at SnT, University of Luxembourg. Lead developer on ESA DIOSSA projects with aerospace systems design heritage.
[Personal Website](https://arunrathinam.github.io/)

### Sivaperuman Muniyasamy (Co-Founder & CTO)
Aerospace PhD candidate and NASA MSTAR researcher. Specialized in orbital dynamics, safe reinforcement learning and closed-loop spacecraft GNC.
[Personal Website](https://sivaastro.github.io/)

## Key Research Infrastructure
- **Zero-G Lab (SnT)**: Full-scale physical mockups tracking satellite tumble with robotic arms.
- **NASA MSTAR Lab**: Simulating safe trajectory filters around irregular celestial bodies.
`
  },
  {
    path: 'content/posts/tech-milestones.md',
    name: 'content/posts/tech-milestones.md',
    language: 'markdown',
    description: 'Hugo blog post detailing HPC integration and training results.',
    content: `---
title: "Technical Milestones: Supercomputing at MeluXina for Space Autonomy"
date: 2026-07-05T12:00:00Z
draft: false
tags: ["milestones", "hpc", "deep-learning"]
---

# Scalable Foundation Models on MeluXina Supercomputer

Training domain-robust, multi-sensor perception models for orbital proximity operations requires immense computational resources. At NAVAI, we have moved beyond local workstation constraints to establish a scalable supercomputing production pipeline on the **MeluXina** HPC cluster.

## 1. High-Fidelity Synthetic Spacecraft Simulation
To overcome the extreme scarcity of real orbital imagery, our in-house simulator generates high-fidelity rendering streams.

![Spacecraft Simulator Output](/images/orbital_simulator.jpg)
*Figure 1: Perfect ground-truth annotations (6-DoF pose, components, bounding boxes) generated automatically in real-time by our orbital rendering engine.*

## 2. Multi-Node Deep Learning Pretraining
Using MeluXina's GPU cluster, we pretrain a robust multi-sensor encoder with self-supervised learning on millions of simulated and physical frames. 

This model fuses three critical streams:
1. **RGB Camera**: For standard high-resolution tracking under favorable lighting.
2. **Thermal Infrared**: To keep tracking operational through solar blinding, eclipses, and harsh shadow lines.
3. **Neuromorphic Event Sensors**: Delivering microsecond-latency tracking of fast-tumbling objects without motion blur at ultra-low power.

## 3. Flight-Realistic Edge Validation
By dividing our architecture into a **Real-Time Onboard Edge Tier** (using lightweight heads optimized for space-grade edge FPGAs and neuromorphic chips) and an **Off-Board Advisor Tier**, we enable robust proximity autonomy that complies with strict size, weight, and power (SWaP) constraints.
`
  },
  {
    path: 'content/posts/sensor-fusion-space.md',
    name: 'content/posts/sensor-fusion-space.md',
    language: 'markdown',
    description: 'Hugo blog post on neuromorphic and thermal sensor fusion.',
    content: `---
title: "Deep Dive: Solving Orbital Glare with Neuromorphic & Thermal Fusion"
date: 2026-07-04T10:00:00Z
draft: false
tags: ["engineering", "sensor-fusion"]
---

# Overcoming the Extreme Lighting of Outer Space

Standard cameras suffer severely from motion blur and extreme solar saturation in space. When a satellite transitions from direct sunlight to the deep shadow of the Earth, typical computer vision algorithms lose tracking immediately.

![Multi-Sensor Modalities](/images/sensor_fusion.jpg)
*Figure 2: Our multi-sensor fusion pipeline. Left: Saturation on RGB sensor. Middle: Thermal infrared signature tracking. Right: Event-based edge outlines capturing microsecond updates.*

Our core innovation relies on **Event-based Neuromorphic Sensors** fused with **Thermal Infrared streams**:
- **Microsecond Latency**: Event cameras do not capture frames; instead, they measure per-pixel intensity changes asynchronously. This removes motion blur and offers incredible dynamic range (120dB+).
- **Thermal Continuity**: Thermal sensors penetrate solar blinds, tracking warm spacecraft components against the deep space background.
- **Consolidated Backbone**: Our self-supervised model translates these diverse signals into a single, unified 3D coordinate space.

We validate this software-defined autonomy stack inside SnT's **Zero-G Lab** using physical hardware robotic emulators.
`
  },
  {
    path: '.github/workflows/deploy.yml',
    name: 'deploy.yml (Hugo)',
    language: 'yaml',
    description: 'GitHub Actions workflow to build and deploy your Hugo site automatically on commit to main.',
    content: `name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.124.1
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O \${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v\${HUGO_VERSION}/hugo_extended_\${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i \${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Hugo
        env:
          HUGO_CACHEDIR: \${{ runner.temp }}/hugo_cache
          HUGO_ENVIRONMENT: production
        run: |
          hugo \
            --gc \
            --minify \
            --baseURL "\${{ steps.pages.outputs.page_url }}"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`
  }
];

// --- SETUP INSTRUCTIONS README ---
export const setupReadme = `## 🚀 Setting Up Your GitHub Pages Repository

Follow these fast steps to host your NAVAI tech milestones page on GitHub Pages with fully automated deployments!

### Step 1: Create a GitHub Repository
1. Log into GitHub and create a new repository (e.g., \`navai-space\`).
2. Keep the repository **Public** (required for free GitHub Pages tier).
3. Do **NOT** initialize with a README, gitignore, or license (start with an empty repo).

### Step 2: Choose Your Static Site Generator
Select either the **Jekyll** or **Hugo** folder template from the **Repository Portal** view above. 

### Step 3: Initialize Git Locally
In your project directory on your local machine, run:
\`\`\`bash
# Initialize git
git init -b main

# Create the folder structure
# For Jekyll: Create _posts folder
# For Hugo: Create content/posts folder
\`\`\`

### Step 4: Add Your Markdown Files and Configuration
Copy the file contents displayed in the **Repository Portal** into your local files. 
- For **Jekyll**: Place configurations in \`_config.yml\` and posts in \`_posts/\`.
- For **Hugo**: Place configurations in \`hugo.toml\` and content in \`content/\`.

### Step 5: Save the Images
Save the generated high-quality images from the simulator:
- For **Jekyll**: Save them as \`assets/images/orbital_simulator.jpg\` and \`assets/images/sensor_fusion.jpg\`.
- For **Hugo**: Save them as \`static/images/orbital_simulator.jpg\` and \`static/images/sensor_fusion.jpg\`.

### Step 6: Create the GitHub Actions Workflow
Create a file at \`.github/workflows/deploy.yml\` and paste the deployment configuration code provided in the portal.

### Step 7: Push to GitHub & Activate Pages
1. Run the following commands in your terminal:
   \`\`\`bash
   git add .
   git commit -m "Initial commit: Set up NAVAI website with automated deploy"
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   \`\`\`
2. On your GitHub repository page:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Watch the workflow build and deploy automatically on the **Actions** tab. Your site will be live in ~1-2 minutes!
`;
