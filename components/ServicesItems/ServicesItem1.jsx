import React from "react";
import styles from "../../styles/ServicesItems/ServicesItem1.module.css";

export const ServicesItem1 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.textHeader}>Architectural vizualization</h2>
      <p className={styles.text}>
        the creation of amazing, life-like static images with the perfect
        atmosphere, angles, and general presentation.
      </p>
    </div>
  );
};
