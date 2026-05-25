"use client";

import React, { useMemo } from 'react';
import styles from './HeroSection.module.css';
import Button from '../ui/Button';

export default function HeroSection() {

  const W = 1000;
  const H = 500;

  // Real world coordinates
  const locations = useMemo(() => [
    { lat: 40.7, lng: -74, hub: true }, // NY
    { lat: 34.0, lng: -118, hub: false }, // LA
    { lat: 41.8, lng: -87.6, hub: false }, // Chicago
    { lat: 51.5, lng: -0.1, hub: true }, // London
    { lat: 48.8, lng: 2.3, hub: false }, // Paris
    { lat: 52.5, lng: 13.4, hub: false }, // Berlin
    { lat: 55.7, lng: 37.6, hub: false }, // Moscow
    { lat: 25.2, lng: 55.2, hub: true }, // Dubai
    { lat: 19.0, lng: 72.8, hub: true }, // Mumbai
    { lat: 28.6, lng: 77.2, hub: false }, // Delhi
    { lat: 1.3, lng: 103.8, hub: false }, // Singapore
    { lat: 35.6, lng: 139.6, hub: true }, // Tokyo
    { lat: 31.2, lng: 121.4, hub: false }, // Shanghai
    { lat: 22.3, lng: 114.1, hub: false }, // HK
    { lat: -33.8, lng: 151.2, hub: true }, // Sydney
    { lat: -37.8, lng: 144.9, hub: false }, // Melbourne
    { lat: -23.5, lng: -46.6, hub: true }, // Sao Paulo
    { lat: -34.6, lng: -58.3, hub: false }, // Buenos Aires
    { lat: -33.9, lng: 18.4, hub: false }, // Cape Town
    { lat: 6.5, lng: 3.3, hub: false }, // Lagos
    { lat: 30.0, lng: 31.2, hub: false } // Cairo
  ].map(loc => ({
    ...loc,
    x: ((loc.lng + 180) / 360) * W,
    y: ((-loc.lat + 90) / 180) * H
  })), []);

  // Generate a massive array of deterministic pseudo-random dots for the entire earth
  // This prevents Next.js hydration mismatch errors while keeping the random scatter effect
  const randomDots = useMemo(() => {
    const dots = [];
    // Simple seeded PRNG to ensure server and client generate the exact same numbers
    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    // Round to 1 decimal place to prevent floating-point mismatch across server/client engines
    const round = (val) => Math.round(val * 10) / 10;

    for (let i = 0; i < 250; i++) {
      dots.push({
        x: round(seededRandom(i * 1.1) * W),
        y: round(seededRandom(i * 2.2) * H),
        size: round(seededRandom(i * 3.3) * 1.5 + 1.0), // 1.0 to 2.5
        opacity: round(seededRandom(i * 4.4) * 0.6 + 0.4) // 0.4 to 1.0
      });
    }
    return dots;
  }, []);



  const MapLayer = () => (
    <div className={styles.mapContainer}>

      {/* MASKED LAYER: Solid glowing continents */}
      <div className={styles.mapLayer}></div>

      {/* MASKED LAYER: Hundreds of random dots that will ONLY show if they fall on a continent */}
      <div className={styles.dotsLayer}>
        <svg viewBox={`0 0 ${W} ${H}`} className={styles.mapSvg}>
          {randomDots.map((dot, i) => (
            <circle 
              key={`rand-${i}`}
              cx={dot.x} 
              cy={dot.y} 
              r={dot.size} 
              fill="var(--globe-dot)"
              style={{ opacity: dot.opacity }}
              className={styles.mapDot}
            />
          ))}
        </svg>
      </div>

      {/* UNMASKED LAYER: Global crossing arcs and main hubs */}
      <svg viewBox={`0 0 ${W} ${H}`} className={styles.mapSvg}>

        {/* Small glowing light points for main hubs */}
        {nodes.map((node, i) => (
          <circle 
            key={`node-${i}`}
            cx={node.x} 
            cy={node.y} 
            r={2.5} 
            fill="var(--globe-dot)"
            className={styles.mapDot}
          />
        ))}
      </svg>
    </div>
  );

  const nodes = locations;

  return (
    <section className={styles.hero}>
      {/* 2D Scrolling Map with Spherical Depth Illusion */}
      <div className={styles.globeWrapper}>
        <div className={styles.scene3D}>
          {/* 1. Solid background to block back lines of the 3D sphere */}
          <div className={styles.oceanOccluder}></div>

          {/* 2. Flat scrolling continents (slightly in front of occluder) */}
          <div className={styles.mapScroller}>
            <MapLayer />
            <MapLayer />
            <MapLayer />
          </div>
        </div>
      </div>

      <div className={styles.glowTopRight}></div>
      <div className={styles.glowRight}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Build Modern<br />
            <span className={styles.highlight}>Software Solutions</span>
          </h1>
          <p className={styles.description}>
            We build premium, high-performance software solutions<br />
            for forward-thinking companies. Elevate your digital presence<br />
            with enterprise-grade architecture.
          </p>
          <div className={styles.actions}>
            <Button href="/contact" variant="primary">Start Your Project</Button>
            <Button href="/work" variant="secondary">View Our Work</Button>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Global Clients</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>40+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
          </div>
        </div>

        {/* 3. Floating Icons on Right Side (Static) */}
        <div className={styles.visualContainer}>
          <div className={styles.floatingIcons}>
            <div>
              <i className={`ri-brain-line ${styles.floatingIcon} ${styles.brainIcon}`}></i>
            </div>
            <div>
              <i className={`ri-code-s-slash-line ${styles.floatingIcon} ${styles.codeIcon}`}></i>
            </div>
            <div>
              <i className={`ri-sparkling-fill ${styles.floatingIcon} ${styles.geminiIcon}`}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
