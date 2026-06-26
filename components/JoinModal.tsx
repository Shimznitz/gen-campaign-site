'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './JoinModal.module.css';

export default function JoinModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', state: '', lga: '', occupation: '', interest: 'Supporter' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const res = await fetch('/api/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) setStatus('success');
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={styles.modal} onClick={e => e.stopPropagation()}>
        {status === 'success' ? (
          <div className={styles.successWrapper}>
            <div className={styles.checkmark}>✓</div>
            <h2>Welcome to the movement.</h2>
            <p>Your entry has been registered successfully. Expect verification updates via WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3>Join the Movement</h3>
            <input type="text" placeholder="Full Name" required onChange={e => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email Address" required onChange={e => setFormData({...formData, email: e.target.value})} />
            <input type="tel" placeholder="WhatsApp Number (e.g. +234...)" required onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
            <div className={styles.row}>
              <input type="text" placeholder="State" required onChange={e => setFormData({...formData, state: e.target.value})} />
              <input type="text" placeholder="LGA" required onChange={e => setFormData({...formData, lga: e.target.value})} />
            </div>
            <input type="text" placeholder="Occupation" required onChange={e => setFormData({...formData, occupation: e.target.value})} />
            <select onChange={e => setFormData({...formData, interest: e.target.value})}>
              <option value="Supporter">Join as Supporter</option>
              <option value="Volunteer">Join as Volunteer</option>
              <option value="Media">Join as Media Advocate</option>
              <option value="Donor">Join as Donor</option>
            </select>
            <button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Processing...' : 'Submit Credentials'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}