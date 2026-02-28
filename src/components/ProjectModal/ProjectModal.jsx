import styles from "./ProjectModal.module.css";
import projectPlaceholder from "../../assets/project-placeholder.svg";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label="Detalhes do projeto">
      <div className={styles.modal}>
        <div className={styles.top}>
          <div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>

          <button className={styles.close} type="button" onClick={onClose} aria-label="Fechar">
            X
          </button>
        </div>

        <img className={styles.thumb} src={projectPlaceholder} alt="Prévia do projeto" />

        <div className={styles.grid}>
          <div className={styles.block}>
            <h4 className={styles.h4}>Problema</h4>
            <p className={styles.p}>{project.problem}</p>
          </div>

          <div className={styles.block}>
            <h4 className={styles.h4}>Solução</h4>
            <p className={styles.p}>{project.solution}</p>
          </div>

          <div className={styles.block}>
            <h4 className={styles.h4}>Impacto</h4>
            <p className={styles.p}>{project.impact}</p>
          </div>

          <div className={styles.block}>
            <h4 className={styles.h4}>Tecnologias</h4>
            <div className={styles.techs}>
              {project.tech.map((t) => (
                <span key={t} className={styles.tech}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <h4 className={styles.h4}>Destaques</h4>
            <ul className={styles.list}>
              {project.highlights.map((item) => (
                <li key={item} className={styles.li}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h4 className={styles.h4}>Links</h4>
            <div className={styles.links}>
              {project.repoUrl ? (
                <a className={styles.link} href={project.repoUrl} target="_blank" rel="noreferrer">
                  Repositório
                </a>
              ) : (
                <span className={styles.muted}>Repositório: em andamento</span>
              )}

              {project.liveUrl ? (
                <a className={styles.link} href={project.liveUrl} target="_blank" rel="noreferrer">
                  Demo
                </a>
              ) : (
                <span className={styles.muted}>Demo: opcional</span>
              )}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <button className={styles.bottomBtn} type="button" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}