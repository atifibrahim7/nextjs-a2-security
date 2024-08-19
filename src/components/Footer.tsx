// components/Footer.tsx
import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>
      <div className={styles.footerContainer}>
        <div className={styles.leftSection}>
          <h2>A2 SECURITY</h2>
        </div>
        <div className={styles.middleSection}>
          <ul className={styles.links}>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className={styles.rightSection}>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
