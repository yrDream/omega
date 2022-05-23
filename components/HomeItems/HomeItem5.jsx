import React from "react";
import { HomeText } from "../HomeText";
import { ButtonHover } from "../ButtonHover";
import styles from "../../styles/HomeItems/HomeItem5.module.css";

export const HomeItem5 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imgItem} src="img/home/HomeImg5.jpg" alt="" />

      <div className={styles.text}>
        <HomeText title="Concept" desc="location: New York, USA" />
      </div>
      
    </div>
  );
};
