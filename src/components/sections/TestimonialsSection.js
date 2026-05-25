import React from 'react';
import styles from './TestimonialsSection.module.css';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Company Name entirely transformed our legacy architecture. What used to take our servers 4 hours now processes in under 3 minutes.",
    author: "Michael Chang",
    role: "CTO, FinCorp"
  },
  {
    quote: "The level of engineering craftsmanship is unmatched. They didn't just write code; they partnered with us to rethink our product strategy.",
    author: "Jessica Weaver",
    role: "VP of Product, Nexus Health"
  },
  {
    quote: "When our application hit viral traffic, Company Name's cloud infrastructure scaled flawlessly. We didn't experience a single second of downtime.",
    author: "David Alaba",
    role: "Founder, Aura Global"
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Client <span className={styles.accent}>Testimonials</span></h2>
          <p className={styles.subtitle}>Don't just take our word for it. See what industry leaders have to say.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((test, index) => (
            <div key={index} className={`${styles.card} animate-slide-up`} style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <p className={styles.quote}>"{test.quote}"</p>
              <div className={styles.authorInfo}>
                <h4>{test.author}</h4>
                <span>{test.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
