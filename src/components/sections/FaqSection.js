"use client";
import React, { useState, useRef } from 'react';
import styles from './FaqSection.module.css';
import { FiPlus } from 'react-icons/fi';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on scope, but a standard MVP typically takes 8-12 weeks from discovery to deployment. We provide detailed milestones during the strategy phase so you always know what to expect."
  },
  {
    question: "Do you provide post-launch maintenance?",
    answer: "Yes. We offer comprehensive SLA-backed support and maintenance retainers to ensure your application remains secure, up-to-date, and highly performant as you scale to millions of users."
  },
  {
    question: "How do you handle data security and compliance?",
    answer: "Security is built-in from day one. We follow DevSecOps practices, implement SOC2/HIPAA compliant infrastructures where necessary, and conduct rigorous penetration testing before launch."
  },
  {
    question: "Can you integrate with our existing legacy systems?",
    answer: "Absolutely. Our engineers specialize in building robust APIs and custom middleware to seamlessly connect modern frontends with legacy databases and enterprise systems."
  },
  {
    question: "Do I own the source code after the project is done?",
    answer: "100%. Once the project is completed and paid in full, all intellectual property, source code, and assets are fully transferred to you."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // We use refs to dynamically calculate height for smooth animation
  const contentRefs = useRef([]);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      {/* Decorative background element */}
      <div className={styles.glowBg}></div>
      
      <div className={styles.container}>
        {/* Left Side: Sticky Header */}
        <div className={styles.headerColumn}>
          <div className={styles.badge}>Support & FAQ</div>
          <h2 className={styles.title}>
            Got Questions?<br/>
            <span className={styles.accent}>We've Got Answers.</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about partnering with Company Name. Can't find what you're looking for? Reach out to our team.
          </p>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className={styles.faqColumn}>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className={styles.questionContainer}>
                    <h3>{faq.question}</h3>
                    <div className={styles.iconWrapper}>
                      <FiPlus className={styles.icon} />
                    </div>
                  </div>
                  
                  <div 
                    className={styles.answerWrapper}
                    style={{ 
                      height: isActive ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                      opacity: isActive ? 1 : 0
                    }}
                  >
                    <div 
                      className={styles.answerContent}
                      ref={el => { contentRefs.current[index] = el }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                  
                  {/* Glowing hover border */}
                  <div className={styles.cardBorder}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
