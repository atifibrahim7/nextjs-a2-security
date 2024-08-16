import React from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className="wrapper">
          <div className={styles.main}>
            <h1>Blockchain Security Audit Services.</h1>
          </div>
          <div className={styles.description}>
            <p>
              A2 Security combine high-end security research with a real-world
              attacker mentality to reduce risk and fortify code.
            </p>
          </div>
        </div>
        <div className={styles.img}>
          <Image
            src="/images/block.svg"
            alt="block"
            width={1500}
            height={1500}
            layout="responsive"
          />
          <img src="/images/block.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
