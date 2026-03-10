import type { ProjectType } from "@/data/projects";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className={styles.imagePlaceholder}></div>
        )}
        <span className={styles.tag}>{project.tag}</span>
      </div>
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} className={styles.link}>
          Ver case completo <span>&#8594;</span>
        </a>
      </div>
    </div>
  );
};
