import React from "react";
import styles from "../../styles/Companyitems/CompanyImg.module.css";

export const CompanyImg = ({src}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.imgItem} src={src} alt="" />
    </div>
  );
};
