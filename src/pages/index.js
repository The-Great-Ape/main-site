import * as React from 'react';
import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Hero';
import Tokenomics from '../components/Tokenomics';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { main, container, borderGradient } from '../styles/pageStyles.module.css';

library.add(fab, fas);

// markup
const IndexPage = () => {
  return (
    <main className={main}>
      <div className={container}>
        <Navbar />
      </div>
      <div className={borderGradient} />
      <div className={container}>
        <Hero />
        <Tokenomics />
      </div>
    </main>
  );
};

export default IndexPage;
