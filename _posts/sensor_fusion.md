---
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
