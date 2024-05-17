import React from "react";
import styles from "./styles.module.scss";
const index = () => {
  return (
    <div className={styles.category}>
      <div className={styles.container}>
        <h1>Shop by Category</h1>
        <div className={styles.cards}>
          <div className={`${styles.card1} ${styles.card}`}>
            <h3>Owmen`S</h3>
            <button>Best New Deals</button>
            <span>New Collection</span>
          </div>
          <div className={` ${styles.card2} ${styles.card}`}>
            <h3>Owmen`S</h3>
            <button>Best New Deals</button>
            <span>New Collection</span>
          </div>
          <div className={` ${styles.card3} ${styles.card}`}>
            <h3>Owmen`S</h3>
            <button>Best New Deals</button>
            <span>New Collection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
