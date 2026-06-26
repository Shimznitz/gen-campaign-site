'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Manifestos from '../components/Manifestos';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';
import JoinModal from '../components/JoinModal';
import AnimatedCounter from '../components/AnimatedCounter';
import { cmsData } from '../config/cmsData';
import styles from './PageLayout.module.css';

export default function Home() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <main style={{ position: 'relative' }}>
      <Navbar onOpenJoin={() => setIsJoinOpen(true)} />
      <Hero onOpenJoin={() => setIsJoinOpen(true)} />
      
      {/* Live Operational Counters Overlay Panel */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          {cmsData.stats.map((stat, idx) => (
            <div key={idx} className={styles.statNode}>
              <h2>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <About />
      <Countdown />
      <Manifestos />
      <Footer />
      
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </main>
  );
}