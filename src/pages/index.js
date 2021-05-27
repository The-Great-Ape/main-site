import * as React from 'react';
import Navbar from '../components/Nav/Navbar';
import Hero from '../components/Hero';
import Tokenomics from '../components/Tokenomics';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { main, container, borderGradient } from '../styles/pageStyles.module.css';
import "./index.css"
import Button from "../components/Button";

library.add(fab, fas);

// markup
const IndexPage = () => {
  return (
    <main className={main}>
      <div className={container}>
        <Navbar />
      </div>
      <Button>
        Read Whitepaper
      </Button>
      <div className={borderGradient} />
      <div className={container}>
        <Hero />
        <Tokenomics />
      </div>
    </main>
  );
};

export default IndexPage;
