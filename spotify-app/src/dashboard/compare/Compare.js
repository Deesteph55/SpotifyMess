import React from "react";
import styles from "./Compare.module.css";

export const Compare = ({ pop1, pop2, name1, name2 }) => {
  return (
    <div>
      {pop1 > pop2 ? (
        <div className = {styles.compareHorizontal}>
          <p className={styles.title}>{name1}</p>  <h1 className={styles.gradient}> > </h1> <p> {name2} </p>
        </div>
      ) : (
        <div className = {styles.compareHorizontal}>
          <p className={styles.title}>{name2}</p>  <h1 className={styles.gradient}> > </h1> <p> {name1}</p>
        </div>
      )}
    </div>
  );
};
