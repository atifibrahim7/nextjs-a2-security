// components/LoadingSection.tsx
import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/LoadingSection.module.css";

const LoadingSection = ({ onVisible }: { onVisible: () => void }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            onVisible();
          }, 1500);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onVisible]);

  return (
    <>
      <div className={styles.loadingSection}>
        <div className={styles.flexwrapper}>
          <div className={styles.squaretopleft}></div>
          <div className={styles.squaretopright}></div>
          <div ref={sectionRef} className={styles.squarebottomleft}></div>
          <div className={styles.squarebottomright}></div>
        </div>
      </div>
      <div className={styles.loadingEnd}></div>
    </>
  );
};

export default LoadingSection;
