import React from 'react'
import styles from "../styles/Footer.module.css";
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { FooterNavMenu } from './FooterNavMenu';
import { StyckyCallButton } from './StyckyCallButton';
import { StickyButtoUpPage } from './StickyButtoUpPage';

export const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.textWrapper}>
        <p className={styles.text}>
          © copyright 2021 omegarender all rights reserved.
        </p>
        <Link href="/"><a className={styles.link}>terms of use & privacy policy</a></Link>
      </div>

      

      <div className={styles.socialsWrapper}>
      <FooterNavMenu />
        <Link href="/"><a target="_blank" className={styles.socialsItem}><InstagramIcon /></a></Link>
        <Link href="/"><a target="_blank" className={styles.socialsItem}><FacebookIcon /></a></Link>
        <Link href="/"><a target="_blank" className={styles.socialsItem}><LinkedInIcon /></a></Link>
        <Link href="/"><a target="_blank" className={styles.socialsItem}><PinterestIcon /></a></Link>
      </div>

      <StyckyCallButton />
      <StickyButtoUpPage />
    </div>
  )
}
