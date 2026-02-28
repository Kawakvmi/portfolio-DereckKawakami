import styles from "./About.module.css";
import profileImg from "../../assets/profile.png";

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <h2 className={styles.title}>Sobre mim</h2>

      <div className={styles.card}>
        <img className={styles.avatar} src={profileImg} alt="Foto de perfil" />

        <div>
          <p className={styles.p}>
            Sou o Dereck Kawakami, desenvolvedor front-end em formação. Crio interfaces responsivas e organizadas,
            com foco em React, componentização e boas práticas.
          </p>

          <p className={styles.pMuted}>
            Diferencial: unir visão visual (design) com execução técnica e estrutura de código.
          </p>

          <div className={styles.links}>
            <a className={styles.link} href="https://github.com/Kawakvmi" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className={styles.link} href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}