import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects({ projects, onOpenProject }) {
  const main = projects.filter((p) => !p.isExtra);
  const extra = projects.filter((p) => p.isExtra);

  return (
    <section id="projetos" className={styles.section}>
      <h2 className={styles.title}>Projetos</h2>
      <p className={styles.subtitle}>
        Pelo menos 3 projetos do curso, com descrição, tecnologias e link para o repositório.
      </p>

      <div className={styles.grid}>
        {main.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
        ))}
      </div>

      {extra.length > 0 && (
        <>
          <h3 className={styles.extraTitle}>Destaque (extra)</h3>
          <div className={styles.grid}>
            {extra.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}