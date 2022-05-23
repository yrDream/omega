import React from "react";
import styles from "../../styles/Companyitems/CompanyItem2.module.css";

export const CompanyItem2 = () => {
  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.textHeader}>our partners</h2>
          <p className={styles.text}>
            We have extensive experience working for major brands around the
            world. we know how to treat brands carefully and creatively. We
            often work with several offices of the same company, which is a good
            indicator of customer loyalty and shows we have the necessary
            resources to cover the needs of several teams at once without losing
            any quality.
          </p>
        </div>
      </div>
  );
};
