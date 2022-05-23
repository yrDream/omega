import React from "react";
import styles from "../../styles/CompanyItems/CompanyItem3.module.css";
import { CompanyImg } from "./CompanyImg";

export const CompanyItem3 = () => {
  return (
      <div className={styles.container}>

        <div className={styles.imgRow}>
          <CompanyImg  src="img/company/companyImg1.png"/>
          <CompanyImg  src="img/company/companyImg2.png"/>
          <CompanyImg  src="img/company/companyImg3.png"/>
          <CompanyImg  src="img/company/companyImg4.png"/>
          <CompanyImg  src="img/company/companyImg5.png"/>
          <CompanyImg  src="img/company/companyImg6.png"/>
          <CompanyImg  src="img/company/companyImg7.png"/>
        </div>

        <div className={styles.imgRow}>
          <CompanyImg  src="img/company/companyImg8.png"/>
          <CompanyImg  src="img/company/companyImg9.png"/>
          <CompanyImg  src="img/company/companyImg10.png"/>
          <CompanyImg  src="img/company/companyImg11.png"/>
          <CompanyImg  src="img/company/companyImg12.png"/>
          <CompanyImg  src="img/company/companyImg13.png"/>
          <CompanyImg  src="img/company/companyImg14.png"/>
        </div>

        <div className={styles.imgRow}>
          <CompanyImg  src="img/company/companyImg15.png"/>
          <CompanyImg  src="img/company/companyImg16.png"/>
          <CompanyImg  src="img/company/companyImg17.png"/>
          <CompanyImg  src="img/company/companyImg18.png"/>
          <CompanyImg  src="img/company/companyImg19.png"/>
          <CompanyImg  src="img/company/companyImg20.png"/>
          <CompanyImg  src="img/company/companyImg21.png"/>
        </div>

      </div>
  );
};
