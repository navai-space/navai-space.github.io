/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StartupMilestone } from './types';

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
