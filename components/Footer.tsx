'use client';
import { cmsData } from '../config/cmsData';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandColumn}>
          <div className={styles.logo}>ALAO '27</div>
          <p className={styles.slogan}>{cmsData.slogan}</p>
        </div>
        
        <div className={styles.linksColumn}>
          <h4>Campaign Pillars</h4>
          <ul>
            <li><a href="#home">Platform Matrix</a></li>
            <li><a href="#about">The Candidate</a></li>
            <li><a href="#manifestos">Policy Statements</a></li>
          </ul>
        </div>

        <div className={styles.contactColumn}>
          <h4>HQ Contact</h4>
          <p>{cmsData.contact.address}</p>
          <p className={styles.metaInfo}>{cmsData.contact.email}</p>
          <p className={styles.metaInfo}>{cmsData.contact.phone}</p>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Campaign Organization. All Rights Protected Under Electoral Law.</p>
      </div>
    </footer>
  );
}