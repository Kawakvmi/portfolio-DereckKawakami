import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="habilidades" className={styles.section}>
      <h2 className={styles.title}>Habilidades</h2>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h3 className={styles.h3}>Front-End</h3>
          <ul className={styles.list}>
            <li>HTML5, CSS3, Responsividade</li>
            <li>SCSS e organização de estilos</li>
            <li>JavaScript</li>
            <li>React (componentização)</li>
            <li>CSS Modules</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h3 className={styles.h3}>Integração e Dados</h3>
          <ul className={styles.list}>
            <li>Fetch API</li>
            <li>CRUD (GET, POST, DELETE)</li>
            <li>Consumo de APIs REST</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h3 className={styles.h3}>Ferramentas</h3>
          <ul className={styles.list}>
            <li>Git e GitHub</li>
            <li>VS Code</li>
            <li>Deploy no GitHub Pages</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
