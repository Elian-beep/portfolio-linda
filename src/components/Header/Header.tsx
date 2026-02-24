import { useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Linda.UX</div>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      {/* Mobile Menu Sidebar */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
