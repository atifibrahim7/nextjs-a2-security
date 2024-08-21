import styles from "@/styles/Review.module.css";
import Image from "next/image";
const Review = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          What Our Clients Have to Say About Our work
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.roundedcornersborder}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <Image
                src={"images/pfp.svg"}
                alt="Partner"
                width={70}
                height={70}
                className={styles.partner}
              />
            </div>
            <div>
              <h3>Ahsan Rao</h3>
            </div>
            <div>
              <div className={styles.colorstart}>
                <span>&quot;</span>
              </div>
              <p>
                Their audit process was thorough and efficient. We were
                impressed by their attention to detail and how quickly they
                identified and addressed potential vulnerabilities. Thanks to
                their work, we feel much more confident in our project’s
                security.
              </p>
              <div className={styles.colorend}>
                <span>&quot;</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.roundedcornersborder}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <Image
                src={"images/pfp.svg"}
                alt="Partner"
                width={70}
                height={70}
                className={styles.partner}
              />
            </div>
            <div>
              <h3>Ahsan Rao</h3>
            </div>
            <div>
              <div className={styles.colorstart}>
                <span>&quot;</span>
              </div>
              <p>
                Their audit process was thorough and efficient. We were
                impressed by their attention to detail and how quickly they
                identified and addressed potential vulnerabilities. Thanks to
                their work, we feel much more confident in our project’s
                security.
              </p>
              <div className={styles.colorend}>
                <span>&quot;</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.roundedcornersborder}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <Image
                src={"images/pfp.svg"}
                alt="Partner"
                width={70}
                height={70}
                className={styles.partner}
              />
            </div>
            <div>
              <h3>Ahsan Rao</h3>
            </div>
            <div>
              <div className={styles.colorstart}>
                <span>&quot;</span>
              </div>
              <p className={styles.para}>
                Their audit process was thorough and efficient. We were
                impressed by their attention to detail and how quickly they
                identified and addressed potential vulnerabilities. Thanks to
                their work, we feel much more confident in our project’s
                security.
              </p>
              <div className={styles.colorend}>
                <span>&quot;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
