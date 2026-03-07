import { PrimaryButton, SecondaryButton } from "@/components/Button";
import styles from "./Home.module.scss";
import lindaImage from "@/assets/linda-logo-01.png";

export const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.imageArea}>
        <img
          src={lindaImage}
          alt="Linda Souza"
          className={styles.responsiveImage}
        />
      </div>

      <div className={styles.descArea}>
        <h1>Oi, eu sou a Linda Souza!</h1>

        <p>
          Product Designer apaixonada por tornar experiências digitais mais
          acessíveis, simples e funcionais
        </p>

        <div className={styles.buttonArea}>
          <PrimaryButton
            action={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver projetos →
          </PrimaryButton>
          <SecondaryButton action={() => window.open("#", "_blank")}>
            Ver currículo PDF →
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};
