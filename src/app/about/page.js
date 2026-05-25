import React from 'react';
import styles from './page.module.css';
import { FaUsers, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import AboutSection from '../../components/sections/AboutSection';
import { FiArrowUpRight } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.ambientGlow}></div>
        <div className={styles.container}>
          <div className={styles.badge}>Who We Are</div>
          <h1 className={`${styles.title} animate-slide-up`}>
            About <span className={styles.gradientText}>Us</span>
          </h1>
          <p className={`${styles.subtitle} animate-slide-up delay-1`}>
            We are Company Name. A premium software engineering agency dedicated to transforming complex enterprise challenges into elegant digital realities.
          </p>
        </div>
      </div>

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storySplit}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>The <span className={styles.gradientText}>Story</span></h2>
              <p>
                Founded by veteran engineers, Company Name was built on a single, unwavering principle: that enterprise software doesn't have to be slow, bloated, or ugly.
              </p>
              <p>
                We combine cutting-edge architecture with stunning, intuitive design to create platforms that your users will love and your competitors will envy. We believe in craftsmanship, performance, and building systems that scale gracefully.
              </p>
            </div>

            <div className={styles.statsGrid}>
              <div className={`${styles.statCard} glass-card`}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={`${styles.statCard} glass-card`}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Enterprise Clients</div>
              </div>
              <div className={`${styles.statCard} glass-card`}>
                <div className={styles.statNumber}>99%</div>
                <div className={styles.statLabel}>Client Retention</div>
              </div>
              <div className={`${styles.statCard} glass-card`}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <h2 className={styles.sectionTitle}>Our <span className={styles.gradientText}>Core Values</span></h2>
            <p className={styles.valuesSubtitle}>The foundational principles that guide every line of code we write.</p>
          </div>

          <div className={styles.bentoGrid}>
            <div className={`${styles.valueCard} glass-card`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} style={{ '--icon-color': '#f59e0b', '--icon-bg': 'rgba(245, 158, 11, 0.1)' }}>
                  <FaLightbulb />
                </div>
                <FiArrowUpRight className={styles.arrowIcon} />
              </div>
              <h3>Innovation</h3>
              <p>We leverage the latest proven technologies to give you a definitive competitive edge in your market.</p>
              <div className={styles.cardBorder}></div>
            </div>

            <div className={`${styles.valueCard} glass-card`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} style={{ '--icon-color': '#10b981', '--icon-bg': 'rgba(16, 185, 129, 0.1)' }}>
                  <FaShieldAlt />
                </div>
                <FiArrowUpRight className={styles.arrowIcon} />
              </div>
              <h3>Integrity</h3>
              <p>Security, privacy, and transparent communication are built into our foundation. No black boxes.</p>
              <div className={styles.cardBorder}></div>
            </div>

            <div className={`${styles.valueCard} glass-card`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} style={{ '--icon-color': '#ec4899', '--icon-bg': 'rgba(236, 72, 153, 0.1)' }}>
                  <FaUsers />
                </div>
                <FiArrowUpRight className={styles.arrowIcon} />
              </div>
              <h3>Partnership</h3>
              <p>We act as an extension of your team, deeply invested in your long-term success and growth.</p>
              <div className={styles.cardBorder}></div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
    </main>
  );
}
