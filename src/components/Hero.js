import * as React from 'react';
import logo from '../images/logo.png';
import solanaSzn from '../images/BACKGROUND_HACKATHON.png';
import * as styles from '../styles/hero.module.css';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src={logo} alt='Great Ape hero logo image' className={styles.heroLogo} />
        <h1 className={styles.heroHeading}>SUPPORT FOR SOLANA GATED COMMUNITIES</h1>
        <p className={styles.text}>
          Enabling a participation economy, linking ownership of social accounts to blockchain
          addresses and providing SPL - Token wallets to all community users.
        </p>
      </div>

      <div className={styles.rightSection}>
        <img src={solanaSzn} alt='Solana season hackathon' className={styles.solanaSznImage} />
      </div>
    </div>
  );
}
