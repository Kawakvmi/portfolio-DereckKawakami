import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
      </header>

      <p className={styles.desc}>{project.description}</p>

      <div className={styles.techs} aria-label="Tecnologias">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className={styles.tech}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.actions}>
        <button className={styles.primary} type="button" onClick={() => onOpen(project.id)}>
          Ver detalhes
        </button>

        {project.repoUrl ? (
          <a className={styles.secondary} href={project.repoUrl} target="_blank" rel="noreferrer">
            Repositório
          </a>
        ) : (
          <span className={styles.disabled}>Em andamento</span>
        )}
      </div>
    </article>
  );
}