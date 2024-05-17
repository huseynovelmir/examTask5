import React from "react";
import styles from "./style.module.scss";
import girl from "../../assets/images/hero_man.png";
const index = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div>
          <img src={girl} alt="" />
        </div>
        <div className={styles.textArea}>
          <span>60% Discount</span>
          <h1>
            Winer <br /> Collection
          </h1>
          <p>Best Cloth collection by 2020</p>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default index;
