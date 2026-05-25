import React from 'react';
import styles from './page.module.css';
import { FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    description: 'A high-frequency trading dashboard processing millions of data points with zero latency.',
    span: 2, // Spans full width
    image: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(15, 23, 42, 0.8))'
  },
  {
    title: 'HealthSync Platform',
    category: 'Cloud Infrastructure',
    description: 'HIPAA-compliant patient data syncing across 50+ hospital networks nationwide.',
    span: 1,
    image: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(15, 23, 42, 0.8))'
  },
  {
    title: 'EcoLogistics AI',
    category: 'AI Integration',
    description: 'Predictive supply chain routing that reduced carbon emissions by 24% for a global shipping firm.',
    span: 1,
    image: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(15, 23, 42, 0.8))'
  },
  {
    title: 'Aura E-Commerce',
    category: 'Custom Software',
    description: 'Headless commerce architecture that scaled flawlessly during a 10,000% Black Friday traffic spike.',
    span: 2,
    image: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(15, 23, 42, 0.8))'
  }
];

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.ambientGlow}></div>
        <div className={styles.container}>
          <div className={styles.badge}>Our Portfolio</div>
          <h1 className={`${styles.title} animate-slide-up`}>
            Digital Experiences<br />
            <span className={styles.gradientText}>Built to Scale.</span>
          </h1>
          <p className={`${styles.subtitle} animate-slide-up delay-1`}>
            Explore some of the most challenging and impactful engineering projects we've delivered for industry leaders around the globe.
          </p>
        </div>
      </div>
      
      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          <div className={styles.bentoGrid}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`${styles.projectCard} ${project.span === 2 ? styles.span2 : ''} animate-slide-up`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div 
                  className={styles.projectImage}
                  style={{ background: project.image }}
                >
                  <div className={styles.imageOverlay}></div>
                </div>
                
                <div className={styles.projectContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.category}>{project.category}</span>
                    <div className={styles.arrowIcon}>
                      <FiArrowUpRight />
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
                
                {/* Glowing hover border */}
                <div className={styles.cardBorder}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
