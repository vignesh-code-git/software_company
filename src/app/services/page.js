import React from 'react';
import styles from './page.module.css';
import ServicesSection from '../../components/sections/ServicesSection';
import Button from '../../components/ui/Button';

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1 className="animate-slide-up">Premium <span className={styles.accent}>Services</span></h1>
          <p className={`${styles.subtitle} animate-slide-up delay-1`}>
            We engineer sophisticated, scalable solutions tailored to the unique demands of modern enterprises.
          </p>
        </div>
      </div>
      
      {/* Reuse existing Services component */}
      <ServicesSection />
      
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our <span className={styles.accent}>Process</span></h2>
          <div className={styles.timeline}>
            <div className={`${styles.timelineStep} glass-card`}>
              <div className={styles.stepNumber}>01</div>
              <h3>Discovery & Strategy</h3>
              <p>We deeply analyze your business objectives, technical constraints, and user needs to form a comprehensive architectural blueprint.</p>
            </div>
            <div className={`${styles.timelineStep} glass-card`}>
              <div className={styles.stepNumber}>02</div>
              <h3>Architecture & Design</h3>
              <p>Our engineers draft scalable, secure, and high-performance system architectures accompanied by premium UI/UX designs.</p>
            </div>
            <div className={`${styles.timelineStep} glass-card`}>
              <div className={styles.stepNumber}>03</div>
              <h3>Iterative Delivery</h3>
              <p>Agile development cycles ensure rapid deployment of features, maintaining rigorous quality assurance throughout.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`${styles.ctaBox} glass-card`}>
          <h2>Ready to scale your vision?</h2>
          <p>Let's discuss how our engineering team can transform your business.</p>
          <Button variant="primary">Schedule a Consultation</Button>
        </div>
      </section>
    </main>
  );
}
