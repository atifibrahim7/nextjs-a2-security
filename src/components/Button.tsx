// components/Button.tsx
import React, { ReactNode } from "react";
import styles from "@/styles/Button.module.css";
import { CgArrowTopRight } from "react-icons/cg";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
}) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        <div>
          <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
          >
            {children}
          </button>
        </div>
        <div>
          <button
            className={styles.arrow}
            onClick={onClick}
            type={type}
            disabled={disabled}
          >
            <CgArrowTopRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
