import * as React from 'react';
import tokenomics from '../images/grid_pie.png';
import * as styles from '../styles/tokenomics.module.css';

export default function Tokenomics() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Tokenomics</h2>
      <h3 className={styles.subHeading}>Total Supply: 1.000.000.000</h3>
      <img src={tokenomics} alt='Tokenomics chart' className={styles.chartImg} />
    </div>
  );
}
