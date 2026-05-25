import React from 'react';
import styles from './AboutSection.module.css';
import { FaQuoteLeft, FaUser } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const team = [
  { name: 'Arjun', role: 'Senior Software Engineer', bio: 'Specializes in high-performance frontend frameworks and seamless user experiences.' },
  { name: 'Vishnu Das', role: 'Full Stack Developer', bio: 'Drives technical strategy and oversees the development of robust backend systems.' },
  { name: 'Rahul', role: 'UI/UX', bio: 'Crafts intuitive, pixel-perfect interfaces that bridge the gap between design and functionality.' },
];

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        {/* Editorial Section Header */}
        <div className={styles.editorialHeader}>
          <div className={styles.editorialLeft}>
            <div className={styles.badge}>The Agency</div>
            <h2 className={styles.editorialTitle}>
              About <span className={styles.accent}>Company Name</span>
            </h2>
          </div>
          <div className={styles.editorialRight}>
            <p className={styles.editorialSubtitle}>
              We are a collective of elite engineers, visionary designers, and relentless strategists building enterprise-grade software for forward-thinking companies.
            </p>
          </div>
        </div>

        {/* CEO Feature Card */}
        <div className={styles.ceoWrapper}>
          <div className={`${styles.ceoCard} glass-card`}>
            <div className={styles.ceoLeft}>
              <div className={styles.ceoAvatarWrapper}>
                <div className={styles.ceoAvatar}>
                  <FaUser className={styles.ceoAvatarIcon} />
                </div>
                <div className={styles.avatarGlow}></div>
              </div>
            </div>

            <div className={styles.ceoRight}>
              <div className={styles.ceoHeader}>
                <h3 className={styles.ceoName}>CEO Name</h3>
                <span className={styles.ceoRole}>Founder & CEO, Company Name</span>
              </div>

              <FaQuoteLeft className={styles.quoteIcon} />

              <div className={styles.ceoBio}>
                <p className={styles.ceoQuote}>
                  "At Company Name, we don't just write code — we architect the future of digital experiences. Every project is a commitment to excellence, precision, and lasting impact."
                </p>
                <p className={styles.ceoDetails}>
                  With over 15 years of experience leading cross-functional engineering teams, CEO Name has been at the forefront of building scalable enterprise architectures. His vision for Company Name is to bridge the gap between stunning design and high-performance engineering, ensuring clients not only meet their technological goals but dominate their respective markets.
                </p>
              </div>

              <div className={styles.ceoStats}>
                <div className={styles.cStat}>
                  <span className={styles.cStatValue}>15+</span>
                  <span className={styles.cStatLabel}>Years Exp.</span>
                </div>
                <div className={styles.cStat}>
                  <span className={styles.cStatValue}>500+</span>
                  <span className={styles.cStatLabel}>Projects Led</span>
                </div>
              </div>
            </div>

            <div className={styles.cardBorder}></div>
          </div>
        </div>

        {/* Team List */}
        <div className={styles.teamSection}>
          <h3 className={styles.teamTitle}>Our <span className={styles.accent}>Team</span></h3>
          
          <div className={`${styles.teamDirectoryContainer} glass-card`}>
            <div className={styles.teamList}>
              {team.map((member, index) => (
                <div key={index} className={styles.teamRowItem} style={{ animationDelay: `${0.1 * index}s` }}>
                  
                  <div className={styles.rowAvatarBox}>
                    <FaUser className={styles.rowAvatarIcon} />
                  </div>
                  
                  <div className={styles.rowContentBox}>
                    <div className={styles.rowHeader}>
                      <div className={styles.rowHeaderLeft}>
                        <h4 className={styles.rowName}>{member.name}</h4>
                        <div className={styles.rowBadge}>{member.role}</div>
                      </div>
                      <FiArrowUpRight className={styles.rowArrow} />
                    </div>
                    <p className={styles.rowBio}>{member.bio}</p>
                  </div>
                  
                </div>
              ))}
            </div>
            <div className={styles.cardBorder}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
