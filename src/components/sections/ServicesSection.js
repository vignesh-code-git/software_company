import React from 'react';
import styles from './ServicesSection.module.css';
import { FaGlobe, FaCubes, FaShieldAlt, FaCode, FaPenNib, FaUsers, FaArrowRight } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance, responsive web applications built with cutting-edge modern frameworks.',
    icon: <FaGlobe />,
    color: '#3b82f6' // Blue
  },
  {
    title: 'Product Engineering',
    description: 'End-to-end product development from ideation and prototyping to deployment and scaling.',
    icon: <FaCubes />,
    color: '#8b5cf6' // Violet
  },
  {
    title: 'QA & Security',
    description: 'Rigorous automated and manual testing to ensure flawless performance and zero critical bugs.',
    icon: <FaShieldAlt />,
    color: '#22c55e' // Green
  },
  {
    title: 'Custom Software',
    description: 'Tailored enterprise solutions designed to solve your most complex business challenges.',
    icon: <FaCode />,
    color: '#06b6d4' // Cyan
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, user-centric interfaces designed to increase engagement and conversion rates.',
    icon: <FaPenNib />,
    color: '#f59e0b' // Amber
  },
  {
    title: 'Dedicated Teams',
    description: 'Scale your engineering capacity instantly with our expert developers acting as an extension of your team.',
    icon: <FaUsers />,
    color: '#ec4899' // Pink
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      {/* Decorative background glow */}
      <div className={styles.glowBg}></div>
      
      <div className={styles.container}>
        <div className={`${styles.header} animate-slide-up`}>
          <h2 className={styles.title}>Our Core <span className={styles.accent}>Services</span></h2>
          <p className={styles.subtitle}>End-to-end technology solutions crafted for modern enterprises. We build digital products that drive real business results.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.card} animate-slide-up`}
              style={{ 
                animationDelay: `${0.1 * (index + 1)}s`,
                '--icon-color': service.color,
                '--icon-color-transparent': `${service.color}20`, /* 20% opacity */
                '--icon-color-hover': `${service.color}30`        /* 30% opacity */
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <div className={styles.arrowIcon}>
                  <FiArrowUpRight />
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
              
              {/* Hover gradient border effect */}
              <div className={styles.cardBorder}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
