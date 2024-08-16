import React from "react";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <h2>A2 Security</h2>
        <div className={styles.navbarlinks}>
          <div>
            <a href="https://nextjs.org/docs">Work</a>
          </div>
          <div>
            <a href="https://nextjs.org/learn">Services</a>
          </div>
          <div>
            <a href="https://vercel.com/templates">How we work</a>
          </div>
          <div>
            <a href="https://vercel.com/new">Testimonials</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
