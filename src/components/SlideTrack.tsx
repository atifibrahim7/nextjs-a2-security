import styles from "@/styles/SlideTrack.module.css";
import React from "react";

const logos = [
  "./logos/aave_3.1.png",
  "./logos/chainlink_ccip.jpg",
  "./logos/Curvance.jpg",
  "./logos/dittoEth.png",
  "./logos/dyad.jpg",
  "./logos/ebtc.jpg",
  "./logos/Euler.png",

  "./logos/exactly-protocol.png",
  "./logos/folksfinance.png",
  "./logos/pooltogether.jpg",
  "./logos/sizeCredit.jpg",
  "./logos/sofa.jpg",
  "./logos/stakelink.png",
  "./logos/steadfi.png",
  "./logos/superform.png",
  "./logos/wormhole_ntt.jpg",
  "./logos/zeroland.jpg",
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
