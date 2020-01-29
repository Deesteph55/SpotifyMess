import React from "react";
import { Grid } from "semantic-ui-react";
import styles from "./everything.module.css";

export const Compare = ({ pop1, pop2, name1, name2 }) => {
  const sign = ">";
  return (
    <div>
      {pop1 > pop2 ? (
        <div>
          <h1 className={styles.title}>{name1}</h1>  <h1 className={styles.gradient}> > </h1> <h1> {name2} </h1>
        </div>
      ) : (
        <div>
          <h1 className={styles.title}>{name2}</h1>  <h1 className={styles.gradient}> > </h1> <h1> {name1}</h1>
        </div>
      )}
    </div>
  );
};
