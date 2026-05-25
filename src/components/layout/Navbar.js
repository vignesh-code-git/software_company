"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiSearch, FiSun, FiMoon } from 'react-icons/fi';
import Button from '../ui/Button';
import SearchModal from '../ui/SearchModal';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }

    const handleScroll = () => {
      // Switch header style when the home page hero section is covered
      const threshold = window.innerHeight ? window.innerHeight - 100 : 600;
      setIsScrolled(window.scrollY > threshold);
    };

    // Set initial state correctly
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const isActive = (path) => pathname === path ? styles.active : '';
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Apply the pill header universally across the entire website.
  // When scrolled, it moves up to remove the gap.
  const headerClass = isScrolled ? `${styles.headerPill} ${styles.headerScrolled}` : styles.headerPill;

  return (
    <>
      <header className={`${headerClass} glass`}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              Company <span className={styles.accent}>Name</span>
            </Link>
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
            <Link href="/services" className={`${styles.navLink} ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
            <Link href="/work" className={`${styles.navLink} ${isActive('/work')}`} onClick={closeMenu}>Our Work</Link>
            <Link href="/about" className={`${styles.navLink} ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
            <Link href="/life" className={`${styles.navLink} ${isActive('/life')}`} onClick={closeMenu}>life@Company Name</Link>

            <div className={styles.mobileCta}>
              <Button href="/contact" variant="primary" onClick={closeMenu}>Get in Touch</Button>
            </div>
          </nav>

          <div className={styles.ctaContainer}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button className={styles.searchToggle} onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
              <button className={styles.searchToggle} onClick={() => setIsSearchOpen(true)} aria-label="Open Search">
                <FiSearch />
              </button>
              <Button href="/contact" variant="primary">Get in Touch</Button>
            </div>
          </div>

          <div className={styles.hamburger}>
            <button className={styles.searchToggle} onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
            <button className={styles.searchToggle} onClick={() => setIsSearchOpen(true)} style={{ display: isMobileMenuOpen ? 'none' : 'flex' }} aria-label="Open Search">
              <FiSearch />
            </button>
            <div onClick={toggleMenu} style={{ display: 'flex', alignItems: 'center' }}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </header>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
