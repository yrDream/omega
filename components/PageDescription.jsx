import React from "react";
import styles from "../styles/PageDescription.module.css";
import PropTypes from "prop-types";

export const PageDescription = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

PageDescription.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
