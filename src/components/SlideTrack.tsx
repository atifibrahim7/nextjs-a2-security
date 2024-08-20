import styles from "@/styles/SlideTrack.module.css";
import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slidetrack}>
        <div className={styles.slide}>
          <Image src="/images/google.png" alt="Logo" width={100} height={100} />
        </div>
        <div className={styles.slide}>
          <Image src="/images/google.png" alt="Logo" width={100} height={100} />
        </div>
        <div className={styles.slide}>
          <Image src="/images/google.png" alt="Logo" width={100} height={100} />
        </div>
        <div className={styles.slide}>
          <Image src="/images/google.png" alt="Logo" width={100} height={100} />
        </div>
        <div className={styles.slide}>
          <Image src="/images/google.png" alt="Logo" width={100} height={100} />
        </div>
        <div className={styles.slide}>
          <Image src="/images/google.png" alt="Logo" width={100} height={100} />
        </div>
        <div className={styles.slide}>
          <Image src="/images/google.png" alt="Logo" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
