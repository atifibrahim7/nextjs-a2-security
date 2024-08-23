import Cards from "@/components/Cards";
import Header from "@/components/header";
import Work from "@/components/Work";
import styles from "@/styles/Home.module.css";
import Review from "@/components/Review";
import Footer from "@/components/Footer";
import Ready from "@/components/Ready";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect, useRef } from "react";
export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.add("navbar-transition");
      }

      setTimeout(() => {}, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>A2 Security</title>
        <meta name="description" content="Landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/a2.svg" />
      </Head>
      <div className={styles.mainbg}>
        <main className={`${styles.main} ${inter.className}`}>
          <Navbar refs={{ headerRef, section2Ref, section3Ref }} />
          <Header />
          <div ref={headerRef}>
            <Cards />
          </div>
          <div ref={section2Ref}>
            <Work />
          </div>
          <div ref={section3Ref}>
            <Review />
          </div>
          <Ready />
        </main>
      </div>

      <Footer refs={{ headerRef, section2Ref, section3Ref }} />
    </>
  );
}
