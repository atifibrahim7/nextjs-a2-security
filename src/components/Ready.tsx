import React from "react";
import Button from "./Button";
import styles from "../styles/Ready.module.css";
const Ready = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Ready to Secure Your Project?</h1>
          <Button>Schedule an Audit</Button>
        </div>
      </div>
    </div>
  );
};
export default Ready;
