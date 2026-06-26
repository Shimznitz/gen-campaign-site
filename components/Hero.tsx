'use client';
import { motion } from 'framer-motion';
import { cmsData } from '../config/cmsData';
import styles from './Hero.module.css';

export default function Hero({ onOpenJoin }: { onOpenJoin: () => void }) {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlayGradient} />
      <div className={styles.container}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={styles.content}>
          <span className={styles.position}>{cmsData.position}</span>
          <h1 className={styles.name}>{cmsData.name}</h1>
          <p className={styles.quote}>"{cmsData.quote}"</p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryCta} onClick={onOpenJoin}>Join the Movement</button>
            <a href="#manifestos" className={styles.secondaryCta}>Read Manifestos</a>
          </div>
        </motion.div>
      </div>
      <div className={styles.scrollIndicator}>
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className={styles.dot} />
      </div>
    </section>
  );
}