import React from 'react'
import styles from "../../styles/ContactsItems/ContactsItem.module.css";

export const ContactsItem = ({textName, textProf, src, text, textLink}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.textProf}>{textProf}</p>
      <p className={styles.textName}>{textName}</p>
      <a className={styles.link} href={src}>{textLink}</a>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
