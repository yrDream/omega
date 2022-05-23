import React from 'react'
import { HomeText } from '../HomeText'
import styles from "../../styles/HomeItems/HomeItem2.module.css";






export const HomeItem2 = () => {
  return (
    <div className={styles.container} id='homeItem2'>
        <img className={styles.imgItem} src='img/home/HomeImg2.jpg' alt="" />
        <div className={styles.text}>
        <HomeText title='Private villa in Austria' desc='location: Austria' />
        </div>
    </div>
  )
}
