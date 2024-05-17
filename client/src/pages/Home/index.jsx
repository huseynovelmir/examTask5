import React from "react";
import styles from "./style.module.scss";
import Intro from "../../components/intro/index";
import Category from "../../components/category/index";
const Home = () => {
  return (
    <div>
      <Intro />
      <Category />
    </div>
  );
};

export default Home;
