import { PrimaryButton, SecondaryButton } from "@/components/Button";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.bgShapes}>
        <div className={`${styles.shape} ${styles.circle1}`}></div>
        <div className={`${styles.shape} ${styles.circle2}`}></div>
        <div className={`${styles.shape} ${styles.triangle}`}></div>
        <div className={`${styles.shape} ${styles.square}`}></div>
      </div>

      <div className={styles.contactContent}>
        <h2>Vamos conversar?</h2>
        <p>Tem um projeto, ideia ou desafio? Adoraria ouvir!</p>

        <div className={styles.buttonGroup}>
          <PrimaryButton
            action={() => (window.location.href = "mailto:linda@example.com")}
          >
            Enviar e-mail <span>&#8594;</span>
          </PrimaryButton>

          <SecondaryButton
            action={() => window.open("https://linkedin.com", "_blank")}
          >
            Linkedin <span>&#8594;</span>
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};
