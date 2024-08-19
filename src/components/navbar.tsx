import React from "react";
import styles from "@/styles/navbar.module.css";

type NavbarProps = {
  refs: {
    headerRef: React.RefObject<HTMLDivElement>;
    section2Ref: React.RefObject<HTMLDivElement>;
    section3Ref: React.RefObject<HTMLDivElement>;
  };
};

const Navbar = ({ refs }: NavbarProps) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <h2>A2 SECURITY</h2>
          </div>
          <div className={styles.links}>
            <div>
              <a
                onClick={() => {
                  scrollToSection(refs.headerRef);
                }}
              >
                Work
              </a>
            </div>

            <div>
              <a
                onClick={() => {
                  scrollToSection(refs.section2Ref);
                }}
              >
                How we work
              </a>
            </div>
            <div>
              <a
                onClick={() => {
                  scrollToSection(refs.section3Ref);
                }}
              >
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
