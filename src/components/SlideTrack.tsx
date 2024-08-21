import styles from "@/styles/SlideTrack.module.css";
import React from "react";
import Image from "next/image";
const Slider = () => {
  return (
    <>
      <div className={styles.logos}>
        <div className={styles.logosslide}>
          <img src="./logos/3m.svg" />
          <img src="./logos/barstool-store.svg" />
          <img src="./logos/budweiser.svg" />
          <img src="./logos/buzzfeed.svg" />
          <img src="./logos/forbes.svg" />
          <img src="./logos/macys.svg" />
          <img src="./logos/menshealth.svg" />
          <img src="./logos/mrbeast.svg" />
        </div>

        <div className={styles.logosslide}>
          <img src="./logos/3m.svg" />
          <img src="./logos/barstool-store.svg" />
          <img src="./logos/budweiser.svg" />
          <img src="./logos/buzzfeed.svg" />
          <img src="./logos/forbes.svg" />
          <img src="./logos/macys.svg" />
          <img src="./logos/menshealth.svg" />
          <img src="./logos/mrbeast.svg" />
        </div>
      </div>
    </>
  );
};

export default Slider;
