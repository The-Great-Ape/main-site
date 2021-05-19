import * as React from 'react';
import SocialLinks from './SocialLinks';
import { navbar } from '../styles/navigation.module.css';

const Navbar = () => {
  return (
    <nav className={navbar}>
      <SocialLinks />
    </nav>
  );
};

export default Navbar;
