import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const NavButton = ({ name, link, isMobile, setOpenMenu }) => {
  return (
    <div className={styles.container}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? styles.navActive : "")}
        onClick={() => setOpenMenu(false)}
      >
        {!isMobile && (
          <img
            src={`/vectors/${name.toLowerCase()}.svg`}
            alt={name}
            className={styles.home}
          />
        )}
        {name}
      </NavLink>
    </div>
  );
};
export default NavButton;
