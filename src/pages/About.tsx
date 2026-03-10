import { SectionTitle } from "@/components/SectionTitle";
import styles from "./About.module.scss";
import LindaImage from "@/assets/linda-logo-02.png";

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
            <span className={styles.role}>Product Designer</span>
            <p>
              Desde pequena, sou fascinada por criar e transformar. Comecei
              editando fotos na loja da minha família em Manaus e logo percebi
              que queria unir criatividade com tecnologia para impactar pessoas
              de verdade. Migrei da Ciência da Computação para o Product Design
              justamente para tornar o digital mais humano e acessível.
            </p>
            <p>
              Sou curiosa, colaborativa, adoro aprender coisas novas e acredito
              que boas ideias surgem quando ouvimos diferentes pontos de vista.
              Amo desenhar soluções que facilitem o dia a dia das pessoas e
              ajudam diferentes perfis de usuários, dos mais experientes até
              quem está dando os primeiros cliques.
            </p>
            <div className={styles.quoteBlock}>
              <p>
                Acredito que o design é uma ponte entre pessoas e tecnologia.
                Meu objetivo é criar soluções digitais que facilitem o dia a dia
                de todos — incluindo idosos ou pessoas com pouca familiaridade
                com tecnologia. Quero que cada interação seja inclusiva,
                intuitiva e marcante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
