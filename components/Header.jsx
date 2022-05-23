import {React, useEffect}  from "react";
import styles from "../styles/Header.module.css";
import { HeaderLogo } from "./HeaderLogo";
import { NavMenu } from "./NavMenu";


export const Header = () => {

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('header');
            const scrollTop = window.scrollY;
            scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };

  return (

    <header className={styles.header}>
      <HeaderLogo />
      <NavMenu />
    </header>

  );
};
