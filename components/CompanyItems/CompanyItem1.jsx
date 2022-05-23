import React from "react";
import styles from "../../styles/Companyitems/CompanyItem1.module.css";
import { ContactUsBlockLink } from "../ContactUsBlockLink";

export const CompanyItem1 = () => {
  return (
      <div className={styles.containerFlex}>
        <div className={styles.textRow}>
          <h2 className={styles.textHeader}>
            The art of visualization is a combination of technical and artistic
            mastery.
          </h2>
          <p className={styles.text}>
            The specialist you need must have skills in design and creativity,
            photography and mood, composition and confidence, symmetry and
            charisma, structure and communication, technology and intelligence.
            so, why should you choose omegarender?
          </p>
          <p className={styles.text}>
            The members of our team own all of these skills and more. The 3d
            artists at omegarender are perfectionists, each with her/his own
            recognizable styles. We have a clear understanding of what the
            client needs and don&apos;t stop until that need is satisfied.
          </p>
        </div>
        <div className={styles.textRow}>
          <h2 className={styles.textHeader}>so what is omegarender?</h2>
          <p className={styles.text}>
            The story begins with one ambitious person. Artem kupriyanenko is
            first and foremost an architect. being an artist, he likes to create
            aesthetic details. he wanted to go deeper into this process. As the
            founder says, visualization is “the creation of amazing”. He brought
            together a team of professionals who were inspired by all
            magnificent things.
          </p>
          <p className={styles.text}>
            Today, the studio is collaborating with 25+ countries. there are
            more than 1000 projects and over 7300 realistic images in our
            portfolio. our team seeks growth, never stops improving, and is
            always scouting for talented and promising artists.
          </p>
        </div>
        <ContactUsBlockLink />
      </div>
  );
};
