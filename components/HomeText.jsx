import React from 'react'
import styles from "../styles/HomeText.module.css";
import PropTypes from "prop-types";


export const HomeText = (props) => {
  return (
    <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.desc}>{props.desc}</p>
        </div>
  )
}


HomeText.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
  };