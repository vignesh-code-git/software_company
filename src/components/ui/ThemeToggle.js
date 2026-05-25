"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder of the same size to avoid layout shift
    return <div className={styles.placeholder}></div>;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className={styles.toggleButton} 
      aria-label="Toggle Dark/Light Mode"
    >
      <div className={`${styles.iconContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <FaSun className={styles.sun} />
        <FaMoon className={styles.moon} />
      </div>
    </button>
  );
}
