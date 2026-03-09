import React from "react";
import styles from "./SectionTitle.module.scss";

export interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className={styles.sectionTitleContainer}>
      <div className={styles.line} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
