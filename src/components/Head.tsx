import React, { useEffect, useRef } from "react";
import styles from "@/styles/Head.module.css";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  const mainRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.slideInLeft);
          }
        });
      },
      { threshold: 0.1 }
    );

    const imgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.slideInRight);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }
    if (imgRef.current) {
      imgObserver.observe(imgRef.current);
    }

    return () => {
      if (mainRef.current) observer.unobserve(mainRef.current);
      if (imgRef.current) imgObserver.unobserve(imgRef.current);
    };
  }, []);

  return (
    <>
      <div ref={mainRef}>
        <div className={styles.main}>
          <div className={styles.left}>
            <h1>Blockchain Security Audit Services.</h1>
            <div className={styles.btn}>
              <Button>Schedule an Audit</Button>
            </div>
          </div>

          <div className={styles.right}>
            <div ref={imgRef} className={styles.img}>
              <Image
                src="/images/block.png"
                alt="block"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
