import * as React from 'react';
import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';
import { navbar } from '../../styles/navigation.module.css';

const Navbar = () => {
  return (
    <nav className={navbar}>
      <SocialLinks />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
