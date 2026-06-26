'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cmsData } from '../config/cmsData';
import styles from './Manifestos.module.css';

export default function Manifestos() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="manifestos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Strategic Blueprint</h2>
          <p>Click on any manifesto vertical to read our actionable implementation strategy.</p>
        </div>

        <div className={styles.grid}>
          {cmsData.manifestos.map((item) => (
            <motion.div layout key={item.id} className={styles.card} onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}>
              <motion.div className={styles.icon}>{item.icon}</motion.div>
              <motion.h3 layout="position">{item.title}</motion.h3>
              <motion.p layout="position" className={styles.brief}>{item.brief}</motion.p>
              
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className={styles.expandedContent}>
                    <p>{item.full}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}