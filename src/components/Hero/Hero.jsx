import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.card}>
        <p className={styles.kicker}>Portfólio Front-End</p>

        <h1 className={styles.title}>
          Desenvolvedor Front-End em formação, com foco em React e interfaces bem construídas.
        </h1>

        <p className={styles.subtitle}>
          Crio interfaces responsivas e organizadas, com foco em código limpo, componentização e boa experiência.
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href="#projetos">
            Ver projetos
          </a>
          <a className={styles.secondary} href="#contato">
            Falar comigo
          </a>
        </div>

        <div className={styles.tags} aria-label="Tecnologias principais">
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>JavaScript</span>
          <span className={styles.tag}>CSS Modules</span>
          <span className={styles.tag}>Responsividade</span>
        </div>
      </div>
    </section>
  );
}