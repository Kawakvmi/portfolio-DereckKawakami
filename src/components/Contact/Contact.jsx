import styles from "./Contact.module.css";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent("Contato via Portfólio - Dereck Kawakami");
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);

    window.location.href = `mailto:dereckkawakami@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contato" className={styles.section}>
      <h2 className={styles.title}>Contato</h2>
      <p className={styles.subtitle}>Pode me chamar por aqui.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Nome
          <input className={styles.input} name="name" type="text" required placeholder="Seu nome" />
        </label>

        <label className={styles.label}>
          E-mail
          <input className={styles.input} name="email" type="email" required placeholder="seuemail@email.com" />
        </label>

        <label className={styles.label}>
          Mensagem
          <textarea className={styles.textarea} name="message" required placeholder="Escreva sua mensagem..." />
        </label>

        <button className={styles.button} type="submit">
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}