import React from "react";
import { HomeText } from "../HomeText";
import { ButtonHover } from "../ButtonHover";
import styles from "../../styles/Homeitems/HomeItem9.module.css";

export const HomeItem9 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imgItem} src="img/home/HomeImg8.jpg" alt="" />
      <div className={styles.text}>
        <HomeText title="ANArKH Project" desc="location: South Korea" />
      </div>
    </div>
  );
};
