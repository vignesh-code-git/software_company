import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', className = '', href, ...props }) {
  const baseClass = styles.button;
  const variantClass = styles[variant] || styles.primary;
  const combinedClassName = `${baseClass} ${variantClass} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
