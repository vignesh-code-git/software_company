import React from 'react';
import styles from './page.module.css';
import Button from '../../components/ui/Button';
import { FaGlobeAmericas, FaGraduationCap, FaHeartbeat } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function LifePage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.ambientGlow}></div>
        <div className={styles.container}>
          <div className={styles.badge}>Careers</div>
          <h1 className={`${styles.title} animate-slide-up`}>
            life@<span className={styles.gradientText}>Company Name</span>
          </h1>
          <p className={`${styles.subtitle} animate-slide-up delay-1`}>
            We are a collective of engineers, designers, and innovators united by a passion for building extraordinary digital experiences.
          </p>
        </div>
      </div>
      
      <section className={styles.cultureSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.imageBlock}>
              <div className={styles.imageOverlay}></div>
              <div className={styles.imageContent}>
                <h3>Build the Future.</h3>
                <p>Join a team where your code impacts millions.</p>
              </div>
            </div>
            
            <div className={styles.textBlock}>
              <h2 className={styles.sectionTitle}>Our <span className={styles.gradientText}>Culture</span></h2>
              <p>
                At Company Name, we believe that the best software is built by teams that are empowered, diverse, and relentless in their pursuit of excellence. We don't just write code; we solve the hardest problems in the industry.
              </p>
              
              <ul className={styles.valuesList}>
                <li>
                  <div className={styles.bullet}></div>
                  <div>
                    <strong>Innovation First:</strong> We never settle for the status quo. We are always exploring new architectures.
                  </div>
                </li>
                <li>
                  <div className={styles.bullet}></div>
                  <div>
                    <strong>Radical Transparency:</strong> Open communication builds trust and speed. No red tape.
                  </div>
                </li>
                <li>
                  <div className={styles.bullet}></div>
                  <div>
                    <strong>Craftsmanship:</strong> Every line of code and every pixel matters. We take immense pride in our work.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.perksSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why <span className={styles.gradientText}>Join Us?</span></h2>
            <p className={styles.sectionSubtitle}>We take care of our people so they can take care of our clients.</p>
          </div>
          
          <div className={styles.perksGrid}>
            <div className={`${styles.perkCard} glass-card`}>
              <div className={styles.perkIcon} style={{ color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)' }}>
                <FaGlobeAmericas />
              </div>
              <h3>Remote-First</h3>
              <p>Work from anywhere. We value output and impact over geographic proximity. Your office is wherever you are.</p>
              <div className={styles.cardBorder}></div>
            </div>
            
            <div className={`${styles.perkCard} glass-card`}>
              <div className={styles.perkIcon} style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.1)' }}>
                <FaGraduationCap />
              </div>
              <h3>Continuous Learning</h3>
              <p>Generous stipends for courses, conferences, and continuous education to keep your skills sharp.</p>
              <div className={styles.cardBorder}></div>
            </div>
            
            <div className={`${styles.perkCard} glass-card`}>
              <div className={styles.perkIcon} style={{ color: '#ec4899', background: 'rgba(236, 72, 153, 0.1)' }}>
                <FaHeartbeat />
              </div>
              <h3>Top-Tier Health</h3>
              <p>Comprehensive health, dental, and vision coverage for you and your family. We cover 100% of the premiums.</p>
              <div className={styles.cardBorder}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.careersSection}>
        <div className={styles.container}>
          <div className={styles.careersHeader}>
            <h2 className={styles.sectionTitle}>Open <span className={styles.gradientText}>Positions</span></h2>
            <p>We are always looking for exceptional talent. Don't see a perfect fit? Reach out anyway.</p>
          </div>
          
          <div className={styles.jobsList}>
            <a href="#" className={styles.jobItem}>
              <div className={styles.jobInfo}>
                <h4>Senior Full Stack Engineer</h4>
                <div className={styles.jobTags}>
                  <span className={styles.tag}>Engineering</span>
                  <span className={styles.tag}>Remote</span>
                </div>
              </div>
              <div className={styles.jobAction}>
                <span>Apply Now</span>
                <div className={styles.arrowIcon}>
                  <FiArrowRight />
                </div>
              </div>
            </a>
            
            <a href="#" className={styles.jobItem}>
              <div className={styles.jobInfo}>
                <h4>Product Designer (UX/UI)</h4>
                <div className={styles.jobTags}>
                  <span className={styles.tag}>Design</span>
                  <span className={styles.tag}>Remote</span>
                </div>
              </div>
              <div className={styles.jobAction}>
                <span>Apply Now</span>
                <div className={styles.arrowIcon}>
                  <FiArrowRight />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
