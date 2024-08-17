import React from "react";
import styles from "@/styles/navbar.module.css";

type NavbarProps = {
  option: "state1" | "state2" | "state3";
  refs: {
    headerRef: React.RefObject<HTMLDivElement>;
    section2Ref: React.RefObject<HTMLDivElement>;
    section3Ref: React.RefObject<HTMLDivElement>;
  };
};

const Navbar = ({ option, refs }: NavbarProps) => {
  const navbarClass =
    option === "state1"
      ? styles.navbar1
      : option === "state2"
      ? styles.navbar2
      : styles.navbar3;
  const navbarLinksClass =
    option === "state1"
      ? styles.navbarlink1
      : option === "state2"
      ? styles.navbarlink2
      : styles.navbarlink3;
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className={navbarClass}>
        <div>
          <h2>A2 SECURITY</h2>
        </div>
        <div className={navbarLinksClass}>
          <div>
            <a
              onClick={() => {
                scrollToSection(refs.section2Ref);
              }}
            >
              Work
            </a>
          </div>
          <div>
            <a href="https://nextjs.org/learn">Services</a>
          </div>
          <div>
            <a href="https://vercel.com/templates">How we work</a>
          </div>
          <div>
            <a href="https://vercel.com/new">Testimonials</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
