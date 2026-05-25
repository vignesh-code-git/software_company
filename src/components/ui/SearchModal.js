"use client";

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './SearchModal.module.css';

// Predefined search index
const searchIndex = [
  {
    title: 'Services',
    desc: 'Web Development, App Development, Custom Software, Tech Solutions',
    path: '/services',
    keywords: ['services', 'web', 'app', 'development', 'software', 'technology', 'solutions', 'offerings']
  },
  {
    title: 'Our Work',
    desc: 'Portfolio, Case Studies, and Past Projects',
    path: '/work',
    keywords: ['work', 'portfolio', 'projects', 'case studies', 'examples', 'past work', 'gallery']
  },
  {
    title: 'About Us',
    desc: 'Company History, Mission, and Vision',
    path: '/about',
    keywords: ['about', 'company', 'team', 'who we are', 'mission', 'vision', 'history']
  },
  {
    title: 'life@Company Name',
    desc: 'Company Culture and Careers',
    path: '/life',
    keywords: ['life', 'culture', 'careers', 'jobs', 'working here', 'environment']
  },
  {
    title: 'Contact Us',
    desc: 'Get in Touch, Location, and Email',
    path: '/contact',
    keywords: ['contact', 'get in touch', 'message', 'email', 'phone', 'reach out', 'location']
  },
  {
    title: 'Home',
    desc: 'Return to the main landing page',
    path: '/',
    keywords: ['home', 'start', 'main']
  }
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef(null);

  // Set mounted state for hydration safe portals
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      
      document.body.classList.add('search-open');
    } else {
      document.body.classList.remove('search-open');
    }
    
    return () => document.body.classList.remove('search-open');
  }, [isOpen]);

  // Handle search logic
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = searchIndex.filter(item => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.desc.toLowerCase().includes(lowerQuery) ||
        item.keywords.some(k => k.includes(lowerQuery))
      );
    });
    
    setResults(filtered);
  }, [query]);

  if (!mounted) return null;

  return createPortal(
    <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.searchHeader}>
          <FiSearch className={styles.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Search for pages, services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.closeButton} onClick={onClose} aria-label="Close search">
            <FiX />
          </button>
        </div>
        
        {query.trim() !== '' && (
          <div className={styles.results}>
            {results.length > 0 ? (
              results.map((result, idx) => (
                <Link 
                  key={idx} 
                  href={result.path} 
                  className={styles.resultItem}
                  onClick={onClose}
                >
                  <span className={styles.resultTitle}>{result.title}</span>
                  <span className={styles.resultDesc}>{result.desc}</span>
                </Link>
              ))
            ) : (
              <div className={styles.noResults}>
                No results found for "{query}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
