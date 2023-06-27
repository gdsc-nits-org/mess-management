import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import styles from "./Navbar.module.scss";

const NavButton = ({ name, link, isMobile, setOpenMenu, icon }) => {
  return (
    <div className={styles.container}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? styles.navActive : "")}
        onClick={() => setOpenMenu(false)}
      >
        {!isMobile && <Icon icon={icon} width="20" height="20" />}
        {name}
      </NavLink>
    </div>
  );
};
export default NavButton;
