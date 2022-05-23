import Link from 'next/link'
import React from 'react'
import styles from "../styles/ContactUsBlockLink.module.css"

export const ContactUsBlockLink = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <Link href="/contacts">
                <a className={styles.linkItem}>
                    <p className={styles.linkText}>contact us with new business inquiry</p>
                    <img className={styles.LinkImg} src="img/svg/arrow-left.svg" alt="" />
                </a>
            </Link>
        </div>
    </div>
  )
}
