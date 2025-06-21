// Description: Header component for the application
import React, { useState } from 'react';
import style from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={style.header}>
      <h1 className={style.logo}>Crie seu site</h1>

      <button
        className={`${style.menuToggle} ${menuOpen ? style.open : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`${style.nav} ${menuOpen ? style.open : ''}`}>
        <ul className={style.navList}>
          <li><a className={style.navLink} href="#home">Home</a></li>
          <li><a className={style.navLink} href="#about">About</a></li>
          <li><a className={style.navLink} href="#templates">Templates</a></li>
          <li><a className={style.navLink} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
