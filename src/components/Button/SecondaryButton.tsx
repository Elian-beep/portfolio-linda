import React from "react";
import styles from "./Button.module.scss";

export interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: () => void;
  children: React.ReactNode;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  action,
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles.secondary}`}
      onClick={action}
      {...props}
    >
      {children}
    </button>
  );
};
