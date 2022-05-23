import PropTypes from "prop-types";
import React from 'react'
import styles from "../../styles/TeamItems/TeamItem.module.css";

export const TeamItem = ({imgSrc, textName, textProf, text}) => {
  return (
    <div className={styles.wrapper}>
        <img className={styles.image} src={imgSrc} alt="" />
        <div className={styles.description}>
            <p className={styles.textName}>{textName}</p>
            <p className={styles.textProf}>{textProf}</p>
            <p className={styles.text}>{text}</p>
        </div>
    </div>
  )
}

TeamItem.propTypes = {
    imgSrc: PropTypes.string,
    textName: PropTypes.string,
    textProf: PropTypes.string,
    text: PropTypes.string
  };