import React, { useState, useEffect } from "react";
import styles from "@/styles/Cards.module.css";
import Button from "./Button";
import Image from "next/image";
import Slider from "./SlideTrack";
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
          <Image
            src={"/images/cardtloval.svg"}
            alt="cardtlimg"
            width={100}
            height={100}
            className={styles.img}
          />
        </div>
        <div className={styles.cardtr}>
          <>
            <div>
              <h1>At the forefront of the</h1>
              <span>Blockchain security.</span>
              <p>
                Secured Over
                <em>$1 Billion </em>
                in Assets
              </p>
            </div>
            <div>
              <div className={styles.line}></div>
              <p>Trusted by</p>
              <div className={styles.wrapslider}>
                <Slider />
              </div>
            </div>
          </>
        </div>
        <div className={styles.cardbl}>
          <h2>See how we have safeguarded top blockchain projects</h2>
          <p>Explore Our Audit Reports on Github</p>
          <Button isTransparent>Explore Work</Button>
        </div>
        <div className={styles.cardbmt}>
          <h2>200+ Clients</h2>
          <p>secured worldwide</p>
        </div>
        <div className={styles.cardbmb}>
          <div>
            <h2>300+ Audits</h2>
            <p>completed successfully</p>
          </div>
        </div>
        <div className={`${styles.cardbr} ${styles.cardbrDisappear}`}></div>
      </div>
    </div>
  );
};

export default Cards;
