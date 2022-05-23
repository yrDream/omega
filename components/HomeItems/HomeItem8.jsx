import React from 'react'
import { HomeText } from '../HomeText'
import styles from "../../styles/Homeitems/HomeItem8.module.css";


export const HomeItem8 = () => {
  return (
    <div className={styles.container}>
        <img className={styles.imgItem} src='img/home/HomeImg7.jpg' alt="" />
        <div className={styles.text}>
        <HomeText title='444 Madison Avenue' desc='location: New York, USA' />
        </div>
    </div>
  );
};
