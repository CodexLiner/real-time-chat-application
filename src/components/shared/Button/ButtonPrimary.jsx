import React from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = (props) => {
  return (
    <div>
      <button onClick={props.onclick} className={styles.button}>
        <span>{props.text}</span>
        <img
          className={styles.arrow}
          src="/images/arrowRight.png"
          alt="arrow"
        />
      </button>
    </div>
  );
};

export default ButtonPrimary;
