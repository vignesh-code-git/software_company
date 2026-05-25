"use client";

import React from 'react';
import Image from 'next/image';
import styles from './TechnologiesSection.module.css';
import {
  SiReact, SiNodedotjs, SiLaravel, SiNextdotjs, SiExpress,
  SiMongodb, SiTailwindcss, SiTypescript
} from 'react-icons/si';

// Grouped by category
const categories = [
  {
    techs: [
      { name: 'React',         icon: <SiReact color="#61DAFB" /> },
      { name: 'Next.js',       icon: <SiNextdotjs color="#FFFFFF" /> },
      { name: 'TypeScript',    icon: <SiTypescript color="#3178C6" /> },
      { name: 'Tailwind CSS',  icon: <SiTailwindcss color="#38BDF8" /> },
      { name: 'Figma',         src: '/figma.svg' },
      { name: 'Framer Motion', src: '/framer_motion.svg' },
      { name: 'MUI',           src: '/mui.svg' },
      { name: 'Vite',          src: '/vite.svg' },
    ],
  },
  {
    techs: [
      { name: 'Node.js',  icon: <SiNodedotjs color="#339933" /> },
      { name: 'Express',  icon: <SiExpress color="#FFFFFF" /> },
      { name: 'Laravel',  icon: <SiLaravel color="#FF2D20" /> },
      { name: 'Python',   src: '/python.svg' },
      { name: 'Firebase', src: '/firebase.svg' },
    ],
  },
  {
    techs: [
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
      { name: 'Docker',  src: '/docker.svg' },
      { name: 'Vercel',  src: '/vercel.svg' },
    ],
  },
];

function Pill({ tech }) {
  return (
    <div className={styles.pill}>
      {tech.icon
        ? <span className={styles.icon}>{tech.icon}</span>
        : <Image src={tech.src} alt={tech.name} width={40} height={40} className={styles.iconImage} />
      }
      <span className={styles.techName}>{tech.name}</span>
    </div>
  );
}

/**
 * Perfect seamless marquee using two identical groups.
 * - Both groups contain `minRepeat` copies of `techs` to ensure they're
 *   wider than the viewport even for small sets.
 * - Animation goes 0 → -50% (exactly one group width), then loops.
 * - `padding-right` on .group matches the gap so the join is invisible.
 */
function MarqueeRow({ techs, reverse = false, minRepeat = 3 }) {
  const filled = Array(minRepeat).fill(techs).flat();
  const cls = reverse ? styles.marqueeReverse : styles.marquee;

  return (
    <div className={styles.track}>
      <div className={cls}>
        {/* Group A */}
        <div className={styles.group}>
          {filled.map((tech, i) => <Pill key={`a-${i}`} tech={tech} />)}
        </div>
        {/* Group B — identical clone, makes the loop seamless */}
        <div className={styles.group} aria-hidden="true">
          {filled.map((tech, i) => <Pill key={`b-${i}`} tech={tech} />)}
        </div>
      </div>
    </div>
  );
}

export default function TechnologiesSection() {
  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Build with Modern <span className={styles.accent}>Technologies</span></h2>
          <p className={styles.subtitle}>We build scalable, high-performance applications using industry-leading stacks.</p>
        </div>

        <div className={styles.rows}>
          {/* Row 1 (Frontend) — scrolls left */}
          <MarqueeRow techs={categories[0].techs} minRepeat={2} />
          {/* Row 2 (Backend) — scrolls right */}
          <MarqueeRow techs={categories[1].techs} reverse minRepeat={3} />
          {/* Row 3 (Infra & Data) — scrolls left, more repeats for small set */}
          <MarqueeRow techs={categories[2].techs} minRepeat={8} />
        </div>
      </div>
    </section>
  );
}
