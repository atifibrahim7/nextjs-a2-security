import React, { useEffect } from "react";
import styles from "@/styles/Work.module.css";

const Work = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target.classList.contains(styles.tl) ||
                entry.target.classList.contains(styles.bl)
                ? styles["slide-in-left"]
                : styles["slide-in-right"]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll(
      `.${styles.tl}, .${styles.tr}, .${styles.bl}, .${styles.br}`
    );
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>How we work</h1>
      <p className={styles.para}>
        We follow a <span>simple </span>
        effective <span>4-step </span>
        process to secure your blockchain project.
      </p>

      <div className={styles.grid}>
        <div className={`${styles.tl} ${styles["slide-left"]}`}>
          <div className={styles.head}>
            <h2>01. Understanding your Needs</h2>
          </div>
          <div className={styles.line}></div>
          <div>
            <h3>What we do</h3>
            <p>
              We start by discussing your project’s unique requirements and
              goals. This helps us understand the specific challenges and
              security needs of your blockchain system.
            </p>
          </div>
          <div>
            <h3>What You Get</h3>
            <p>
              Effective solutions that enhance the security of your blockchain
              project, reducing risk and increasing confidence.
            </p>
          </div>
        </div>
        <div className={`${styles.tr} ${styles["slide-right"]}`}>
          <div className={styles.head}>
            <h2>02. Conduct Thorough Audits</h2>
          </div>
          <div className={styles.line}></div>
          <div>
            <h3>What we do</h3>
            <p>
              We start by discussing your project’s unique requirements and
              goals. This helps us understand the specific challenges and
              security needs of your blockchain system.
            </p>
          </div>
          <div>
            <h3>What You Get</h3>
            <p>
              Effective solutions that enhance the security of your blockchain
              project, reducing risk and increasing confidence.
            </p>
          </div>
        </div>
        <div className={`${styles.bl} ${styles["slide-left"]}`}>
          <div className={styles.head}>
            <h2>03. Implement Solutions</h2>
          </div>
          <div className={styles.line}></div>
          <div>
            <h3>What we do</h3>
            <p>
              We start by discussing your project’s unique requirements and
              goals. This helps us understand the specific challenges and
              security needs of your blockchain system.
            </p>
          </div>
          <div>
            <h3>What You Get</h3>
            <p>
              Effective solutions that enhance the security of your blockchain
              project, reducing risk and increasing confidence.
            </p>
          </div>
        </div>
        <div className={`${styles.br} ${styles["slide-right"]}`}>
          <div className={styles.head}>
            <h2>04. Continuous Support </h2>
          </div>
          <div className={styles.line}></div>
          <div>
            <h3>What we do</h3>
            <p>
              We start by discussing your project’s unique requirements and
              goals. This helps us understand the specific challenges and
              security needs of your blockchain system.
            </p>
          </div>
          <div>
            <h3>What You Get</h3>
            <p>
              Effective solutions that enhance the security of your blockchain
              project, reducing risk and increasing confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
