import styles from "./Differentials.module.scss";
import starsIcon from "@/assets/stars_icon.svg";
import plantIcon from "@/assets/psychiatry_icon.svg";

export const Differentials = () => {
  return (
    <section id="differentials" className={styles.differentialsSection}>
      <div className={styles.differentialsContent}>
        <div className={styles.cardLeft}>
          <div className={styles.iconWrapper}>
            <img src={starsIcon} alt="Stars Icon" />
          </div>
          <h3>O que me diferencia</h3>
          <p>
            Coragem para assumir desafios complexos desde o início, olhar
            inclusivo para diferentes perfis de usuário e paixão por unir
            criatividade, organização e colaboração.
          </p>
        </div>

        <div className={styles.cardRight}>
          <div className={styles.iconWrapper}>
            <img src={plantIcon} alt="Plant Icon" />
          </div>
          <h3>Onde quero chegar</h3>
          <p>
            Quero aprofundar meu conhecimento em UX Research e seguir impactando
            segmentos como educação, fintech, social e e-commerce — sempre
            com design minimalista, funcional e acolhedor.
          </p>
        </div>
      </div>
    </section>
  );
};
