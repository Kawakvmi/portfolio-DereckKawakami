import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <a className={styles.brand} href="#inicio">
          Dereck Kawakami
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <a className={styles.link} href="#projetos">
            Projetos
          </a>
          <a className={styles.link} href="#habilidades">
            Habilidades
          </a>
          <a className={styles.link} href="#sobre">
            Sobre
          </a>
          <a className={styles.cta} href="#contato">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}