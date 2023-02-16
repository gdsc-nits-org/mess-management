import React from "react";
import styles from "./Navbar.module.scss";
const Navbutton = (props) => {
  const { name } = props;
  const { link } = props;
  return (
    <a href={link}>
      <button className={styles.navbutton}>{name}</button>
    </a>
  );
};
export default Navbutton;
