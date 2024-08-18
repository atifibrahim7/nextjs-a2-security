import React, { useState, useEffect } from "react";
import styles from "@/styles/Cards.module.css";
import Button from "./Button";
import Image from "next/image";

const Cards = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${styles.container}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight) {
          setTimeout(() => {
            setIsTransitioning(true);
          }, 1500);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.cardtl}>
          <p>
            Top 10 in <span>Codehawk’s Global Contest.</span> Industry-leading
            security expertise recognized worldwide.
          </p>
          <div className={styles.oval}></div>
          <Image
            src={"/images/cardtlimg.svg"}
            alt="cardtlimg"
            width={300}
            height={100}
            className={styles.img}
          />
        </div>
        <div
          className={`${styles.cardtr} ${
            isTransitioning ? styles.cardtrTransition : ""
          }`}
        >
          {!isTransitioning && (
            <h1>At the forefront of the blockchain security</h1>
          )}
          {isTransitioning && (
            <div>
              <h1>At the forefront of the</h1>
              <span>Blockchain security</span>
              <p>
                Our mission is to support your success by providing strong
                security for your blockchain project, allowing it to thrive in a
                safe and dependable environment while we handle the security
                details.
              </p>
            </div>
          )}
        </div>
        <div className={styles.cardbl}>
          <h2>
            Secured Over <span>$1 Billion </span>
            in Assets
          </h2>
          <div className={styles.glass}></div>
          <p>Explore Our Audit Reports on Github</p>
          <Button className={styles.button}>Our Work</Button>
        </div>
        <div className={styles.cardbmt}>
          <h2>200+ Clients</h2>
          <p>secured worldwide</p>
        </div>
        <div className={styles.cardbmb}>
          <div className={styles.wrapper}>
            <div>
              <h2>300+ Audits</h2>
              <p>completed successfully</p>
            </div>

            <div className={styles.image}>
              <Image
                src={"/images/circle.svg"}
                alt="cardtlimg"
                width={200}
                height={200}
                className={styles.compimg}
              />{" "}
            </div>
          </div>
        </div>
        <div
          className={`${styles.cardbr} ${
            isTransitioning ? styles.cardbrDisappear : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Cards;
