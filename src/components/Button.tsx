// components/Button.tsx
import React, { ReactNode } from "react";
import styles from "@/styles/Button.module.css";
import { CgArrowTopRight } from "react-icons/cg";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isTransparent?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  isTransparent = false,
}) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        <div>
          <button
            className={isTransparent ? styles.button2 : styles.button}
            onClick={onClick}
            type={type}
            disabled={disabled}
          >
            {children}
          </button>
        </div>
        <div>
          <button
            className={isTransparent ? styles.button2 : styles.button}
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
