import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import { useState, useEffect, useRef } from "react";
import LoadingSection from "@/components/LoadingSection";
import Cards from "@/components/Cards";
import Button from "@/components/Button";
import Work from "@/components/Work";
import Review from "@/components/Review";
import Footer from "@/components/Footer";
import Ready from "@/components/Ready";
export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [navbarOption, setNavbarOption] = useState<"state1" | "state2">(
    "state1"
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      // Add transition class
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.add("navbar-transition");
      }

      setNavbarOption("state2");

      // Re-enable scrolling after 1 second
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
        <link rel="icon" href="/favicon.ico" />
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
