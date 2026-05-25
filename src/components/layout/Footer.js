import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Company <span className={styles.accent}>Name</span>
            </Link>
            <p className={styles.tagline}>Engineered to Scale. Built for the Future.</p>
            <div className={styles.socials}>
              <a href="#twitter" className={styles.socialIcon} aria-label="Twitter"><FaTwitter /></a>
              <a href="#linkedin" className={styles.socialIcon} aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#github" className={styles.socialIcon} aria-label="GitHub"><FaGithub /></a>
              <a href="#dribbble" className={styles.socialIcon} aria-label="Dribbble"><FaDribbble /></a>
            </div>
          </div>
          
          <div className={styles.links}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Company</h4>
              <Link href="#about">About</Link>
              <Link href="#careers">Careers</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Services</h4>
              <Link href="#development">Development</Link>
              <Link href="#cloud">Cloud Architecture</Link>
              <Link href="#ai">AI Integration</Link>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Resources</h4>
              <Link href="#blog">Blog</Link>
              <Link href="#case-studies">Case Studies</Link>
              <Link href="#docs">Documentation</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="#privacy">Privacy Policy</Link>
            <Link href="#terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
