import React from 'react';
import styles from './CtaSection.module.css';
import Button from '../../components/ui/Button';

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <div className={styles.glowBackground}></div>
          <h2 className={styles.title}>Ready to Build the <span className={styles.accent}>Future?</span></h2>
          <p className={styles.subtitle}>
            Join the industry leaders who trust Company Name to architect their most critical systems. Let's discuss your next project.
          </p>
          <div className={styles.actions}>
            <Button href="/contact" variant="primary">Start Your Project</Button>
            <Button href="/about" variant="secondary">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
