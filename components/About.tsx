'use client';
import { motion } from 'framer-motion';
import { cmsData } from '../config/cmsData';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.stickyProfile}>
            <span className={styles.tagline}>The Journey So Far</span>
            <h2>Biography & Experience</h2>
            <p className={styles.profileText}>
              A track record defined by execution. From leading foundational technology initiatives 
              to structuring legislative frameworks for municipal progress, our focus remains on measurable impacts.
            </p>
            <div className={styles.decorativeLine} />
          </div>

          <div className={styles.timeline}>
            {cmsData.biography.map((event, index) => (
              <motion.div 
                key={index}
                className={styles.timelineNode}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.timeBadge}>{event.year}</div>
                <div className={styles.nodeContent}>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}