import styles from "@/styles/SlideTrack.module.css";
import React from "react";

const logos = [
  "./logos/3m.svg",
  "./logos/barstool-store.svg",
  "./logos/budweiser.svg",
  "./logos/buzzfeed.svg",
  "./logos/forbes.svg",
  "./logos/macys.svg",
  "./logos/menshealth.svg",
  "./logos/mrbeast.svg",
];

const Slider: React.FC = () => {
  return (
    <>
      <div className={styles.logos}>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={styles.logosslide}>
              {logos.map((logo, idx) => (
                <img key={idx} src={logo} alt={`logo-${idx}`} />
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default Slider;
