import React from "react";
import styles from "./style.module.scss";
const index = () => {
  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Latest Products</h1>
          <ul>
            <Link></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
