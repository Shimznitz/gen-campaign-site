'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar({ onOpenJoin }: { onOpenJoin: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>ALAO '27</div>
        
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#manifestos">Manifestos</a></li>
          <li><button className={styles.joinBtn} onClick={onOpenJoin}>Join Us</button></li>
        </ul>

        <div className={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`${styles.bar} ${mobileMenuOpen ? styles.bar1 : ''}`} />
          <div className={`${styles.bar} ${mobileMenuOpen ? styles.bar2 : ''}`} />
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className={styles.mobileMenu}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#manifestos" onClick={() => setMobileMenuOpen(false)}>Manifestos</a>
            <button className={styles.joinBtnMobile} onClick={() => { setMobileMenuOpen(false); onOpenJoin(); }}>Join Us</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}