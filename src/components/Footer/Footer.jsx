import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>© {new Date().getFullYear()} Dereck Kawakami</p>
    </footer>
  );
}