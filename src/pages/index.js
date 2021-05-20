import * as React from 'react';
import Navbar from '../components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { main, container } from '../styles/pageStyles.module.css';

library.add(fab);

// markup
const IndexPage = () => {
  return (
    <main className={main}>
      <div className={container}>
        <Navbar />
      </div>
    </main>
  );
};

export default IndexPage;
