import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Linda.UX</div>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        <Link to="/">Sobre mim</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/services">Diferencial e interesse</Link>
        <Link to="/resume">Currículo PDF</Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className={styles.dot}></span>
        ))}
      </button>

      {/* Mobile Menu Sidebar */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          <Link to="/" onClick={toggleMenu}>
            Sobre mim
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            Projetos
          </Link>
          <Link to="/services" onClick={toggleMenu}>
            Diferencial e interesse
          </Link>
          <Link to="/resume" onClick={toggleMenu}>
            Currículo PDF
          </Link>
        </nav>
      </div>
    </header>
  );
};
