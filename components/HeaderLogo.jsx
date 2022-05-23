import Link from 'next/link';
import React from 'react'
import styles from "../styles/HeaderLogo.module.css";

export const HeaderLogo = () => {
  return (
    <Link href='/'><a className={styles.headerLogo}>New Logo</a></Link>
  )
}
