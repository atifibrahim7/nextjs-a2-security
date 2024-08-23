import React from "react";
import styles from "@/styles/Footer.module.css";
type NavbarProps = {
  refs: {
    headerRef: React.RefObject<HTMLDivElement>;
    section2Ref: React.RefObject<HTMLDivElement>;
    section3Ref: React.RefObject<HTMLDivElement>;
  };
};
const Footer = ({ refs }: NavbarProps) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
              <a
                onClick={() => {
                  scrollToSection(refs.headerRef);
                }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection(refs.section2Ref);
                }}
              >
                Process
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  scrollToSection(refs.section3Ref);
                }}
              >
                Testimonials
              </a>
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
