import { SectionTitle } from "@/components/SectionTitle";
import styles from "./About.module.scss";
import LindaImage from '@/assets/linda-logo-02.png';

export const About = () => {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <SectionTitle title="Sobre mim" />

        <div className={styles.aboutGrid}>
          <div className={styles.imagePlaceholder}>
            <img src={LindaImage} alt="Linda Souza" />
          </div>
          <div className={styles.textPlaceholder}>
            <h3>Linda Souza</h3>
            <p>Product Designer</p>
            <p>Desde pequena, sou fascinada por...</p>
          </div>
        </div>
      </div>
    </section>
  );
};
