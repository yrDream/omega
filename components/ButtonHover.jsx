import Link from "next/link";
import React from "react";
import styles from "../styles/ButtonHover.module.css";

export const ButtonHover = ({buttonText}) => {
  return (
    <Link href='/'>
      <a className={styles.buttonHover}>{buttonText}</a>
    </Link>
  );
};
