import React from "react";
import { HomeText } from "../HomeText";
import { ButtonHover } from "../ButtonHover";
import styles from "../../styles/Homeitems/HomeItem3.module.css";

export const HomeItem3 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imgItem} src="img/home/HomeImg3.jpg" alt="" />

      <div className={styles.text}>
        <HomeText title="albina baliuk" desc="She will take care of everything that related to the first steps of cooperation." />
        <div className={styles.button}>
        <ButtonHover buttonText="Send message" />
      </div>
      </div>
      
    </div>
  );
};
