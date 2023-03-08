import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const NavButton = ({ name, link }) => {
  return (
    <NavLink to={link}>
      <button className={styles.navbutton}>{name}</button>
    </NavLink>
  );
};
export default NavButton;
