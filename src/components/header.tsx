import React from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";
import Button from "./Button";
const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.main}>
              <h1>Blockchain Security Audit Services.</h1>
            </div>
            <div className={styles.description}>
              <p></p>
            </div>
            <Button>Schedule an Audit</Button>
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
