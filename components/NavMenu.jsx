import React from 'react'
import Link from "next/link"
import styles from "../styles/NavMenu.module.css";
import { ButtonHover } from './ButtonHover';

export const NavMenu = () => {
  return (
    <div className={styles.menuWrapper}>
        <nav>
            <Link href='/'><a className={styles.navItem} >Home</a></Link>
            <Link href='/gallery'><a className={styles.navItem}>Gallery</a></Link>
            <Link href='/service'><a className={styles.navItem}>Service</a></Link>
            <Link href='/company'><a className={styles.navItem}>Company</a></Link>
            <Link href='/team'><a className={styles.navItem}>Team</a></Link>
            <Link href='/contacts'><a className={styles.navItem}>Contacts</a></Link>
        </nav>
        <ButtonHover buttonText='discuss the task' />
      </div>
      
  )
}
