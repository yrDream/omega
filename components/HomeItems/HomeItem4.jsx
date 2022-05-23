import React from "react";
import { HomeText } from "../HomeText";
import { ButtonHover } from "../ButtonHover";
import styles from "../../styles/Homeitems/HomeItem4.module.css";

export const HomeItem4 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imgItem} src="img/home/HomeImg4.jpg" alt="" />
      <div className={styles.text}>
        <HomeText title="F1 Miami" desc="location: Miami, USA" />
      </div>
    </div>
  );
};
