import React from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";
import Button from "./Button";
const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
        <div className={`${styles.circle} ${styles.circle4}`}></div>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.main}>
              <h1>Blockchain Security Audit Services.</h1>
            </div>
            <div className={styles.description}>
              <p>
                <span>A2 Security</span> combine high-end security research with
                a real-world attacker mentality to reduce risk and fortify code.
              </p>
            </div>
          <Button>Contact Us</Button>
          </div>
          <div className={styles.img}>
            <Image src="/images/block.svg" alt="block" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
