import { useState } from "react";
import styles from "./Header.module.scss";
import logoDesktop from "../../assets/logo-desktop.svg";
import logoMobile from "../../assets/logo-mobile.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <a
        href="#home"
        onClick={(e) => scrollToSection(e, "home")}
        className={styles.logoContainer}
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={logoDesktop} />
          <img src={logoMobile} alt="Linda.UX Logo" />
        </picture>
      </a>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
          Sobre mim
        </a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
          Projetos
        </a>
        <a href="#services" onClick={(e) => scrollToSection(e, "services")}>
          Diferencial e interesse
        </a>
        <a href="#resume" onClick={(e) => scrollToSection(e, "resume")}>
          Currículo PDF
        </a>
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
          <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
            Sobre mim
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
            Projetos
          </a>
          <a href="#services" onClick={(e) => scrollToSection(e, "services")}>
            Diferencial e interesse
          </a>
          <a href="#resume" onClick={(e) => scrollToSection(e, "resume")}>
            Currículo PDF
          </a>
        </nav>
      </div>
    </header>
  );
};
