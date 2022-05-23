import React from "react";
import { HomeText } from "../HomeText";
import { ButtonHover } from "../ButtonHover";
import styles from "../../styles/HomeItems/HomeItem6.module.css";

export const HomeItem6 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imgItem} src="img/home/HomeImg6.jpeg" alt="" />

      <div className={styles.text}>
        <HomeText title="julia zamelatskaya" desc="She knows everything about each pixel production team produces. She can build an optimal and harmonious process for each customers' idea or task." />
        <div className={styles.button}>
        <ButtonHover buttonText="Send message" />
      </div>
      </div>
      
    </div>
  );
};
