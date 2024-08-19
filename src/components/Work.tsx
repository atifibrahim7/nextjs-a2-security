import styles from "@/styles/Work.module.css";

const Work = () => {
  return (
    <div className={styles.container}>
      <h1>How we work</h1>
      <p className={styles.para}>
        We follow a <span>simple </span>
        effective <span>4-step </span>
        process to secure your blockchain project.
      </p>

      <div className={styles.grid}>
        <div className={styles.tl}>
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
        <div className={styles.tr}>
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
        <div className={styles.bl}>
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
        <div className={styles.br}>
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
