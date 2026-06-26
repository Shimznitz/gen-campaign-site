'use client';
import { useState, useEffect } from 'react';
import { cmsData } from '../config/cmsData';
import styles from './Countdown.module.css';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(cmsData.electionDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.accentLabel}>Countdown to Decision Day</span>
        <div className={styles.grid}>
          <div className={styles.block}><h3>{timeLeft.days}</h3><span>Days</span></div>
          <div className={styles.block}><h3>{timeLeft.hours}</h3><span>Hours</span></div>
          <div className={styles.block}><h3>{timeLeft.minutes}</h3><span>Minutes</span></div>
          <div className={styles.block}><h3>{timeLeft.seconds}</h3><span>Seconds</span></div>
        </div>
      </div>
    </section>
  );
}