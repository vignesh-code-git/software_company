import React from 'react';
import styles from './page.module.css';
import Button from '../../components/ui/Button';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1 className="animate-slide-up">Get in <span className={styles.accent}>Touch</span></h1>
          <p className={`${styles.subtitle} animate-slide-up delay-1`}>
            Ready to start your next big project? Reach out to our team of experts and let's build something extraordinary.
          </p>
        </div>
      </div>
      
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={`${styles.formBox} glass-card`}>
              <h2>Send a Message</h2>
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@company.com" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Tell us about your project..."></textarea>
                </div>
                <Button variant="primary" type="button">Send Message</Button>
              </form>
            </div>
            
            <div className={styles.infoBox}>
              <h2>Global Offices</h2>
              <div className={styles.locationsList}>
                <div className={`${styles.locationCard} glass-card`}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <div>
                    <h4>San Francisco, CA</h4>
                    <p>100 Market St, Suite 400</p>
                  </div>
                </div>
                <div className={`${styles.locationCard} glass-card`}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <div>
                    <h4>London, UK</h4>
                    <p>25 Old Broad St, Level 2</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.directContact}>
                <div className={styles.contactMethod}>
                  <FaEnvelope className={styles.icon} />
                  <span>hello@companyname.com</span>
                </div>
                <div className={styles.contactMethod}>
                  <FaPhoneAlt className={styles.icon} />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
