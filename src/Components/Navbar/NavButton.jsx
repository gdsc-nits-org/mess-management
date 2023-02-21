import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const NavButton = (props) => {
  const { name } = props;
  const { link } = props;
  return (
    <NavLink to={link}>
      <button className={styles.navbutton}>{name}</button>
    </NavLink>
  );
};
export default NavButton;
