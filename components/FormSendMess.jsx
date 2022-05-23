import { Button, Input } from "@mui/material";
import React from "react";
import styles from "../styles/FormSendMess.module.css";
import { ButtonHover } from "./ButtonHover";

export const FormSendMess = () => {
  return (
    <form className={styles.form} action="">
      <div className={styles.container}>
        <Input placeholder="NAME" required />
        <Input placeholder="EMAIL" required />
        <Input placeholder="PHONE" required />
        <Input placeholder="YOUR TEXT" required />
        
      </div>
      <ButtonHover buttonText='SEND'/>
    </form>
  );
};
