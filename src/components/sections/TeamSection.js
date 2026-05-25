import React from 'react';
import styles from './TeamSection.module.css';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Sarah Jenkins',
    role: 'Chief Executive Officer',
    description: 'Former VP of Engineering at a Fortune 500 tech firm. Sarah leads Company Name with a focus on scalable architecture and enterprise agility.',
    imagePlaceholder: 'SJ'
  },
  {
    name: 'David Chen',
    role: 'Partner & CTO',
    description: 'Pioneer in cloud infrastructure and distributed systems. David oversees all technical operations and core system designs.',
    imagePlaceholder: 'DC'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Partner & Head of Product',
    description: 'Award-winning UX/UI strategist. Elena ensures our software is not just powerful, but perfectly intuitive.',
    imagePlaceholder: 'ER'
  }
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span className={styles.accent}>Leadership</span></h2>
          <p className={styles.subtitle}>Guided by industry veterans committed to engineering excellence.</p>
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={`${styles.card} glass-card animate-slide-up`} style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <div className={styles.imagePlaceholder}>
                <span>{member.imagePlaceholder}</span>
              </div>
              <div className={styles.info}>
                <h3>{member.name}</h3>
                <h4 className={styles.role}>{member.role}</h4>
                <p className={styles.description}>{member.description}</p>
                <div className={styles.socials}>
                  <FaLinkedin className={styles.icon} />
                  <FaTwitter className={styles.icon} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
