import React from "react";
import { HomeText } from "../HomeText";
import styles from "../../styles/HomeItems/HomeItem1.module.css";





export const HomeItem1 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imgItem} src="img/home/HomeImg1.jpg" alt="" />

      <div className={styles.text}>
        <HomeText title="Office Centre" desc="location: South Korea" />
      </div>
    </div>
  );
};
