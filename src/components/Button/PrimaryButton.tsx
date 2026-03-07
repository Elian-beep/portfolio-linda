import React from "react";
import styles from "./Button.module.scss";

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: () => void;
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  action,
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles.primary}`}
      onClick={action}
      {...props}
    >
      {children}
    </button>
  );
};
