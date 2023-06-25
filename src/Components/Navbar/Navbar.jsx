import { useState } from "react";
import { Icon } from "@iconify/react";
import NavButton from "./NavButton";
import styles from "./Navbar.module.scss";
const Pages = [
  { name: "Home", path: "/", icon: "ic:round-home" },
  { name: "Notice", path: "/notice", icon: "pepicons-pop:bulletin-notice" },
  { name: "Timetable", path: "/timetable", icon: "mdi:timetable" },
  { name: "Feedback", path: "/feedback", icon: "ic:round-feedback" },
  { name: "Nutrients", path: "/nutrients", icon: "ic:round-feedback" },
];

const Navbar = ({ isMobile }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {isMobile && (
        <button className={styles.menuBtn} onClick={() => setOpenMenu((prev) => !prev)}>
          <Icon
            icon={`${!openMenu ? "ci:hamburger-md" : "maki:cross"}`}
            width="30"
            height="30"
          />
        </button>
      )}
      <nav
        className={`${isMobile ? styles.navMobile : styles.navLinks} ${
          openMenu ? styles.openMenu : ""
        }`}
      >
        {Pages.map((item) => (
          <NavButton
            key={item.name}
            name={item.name}
            link={item.path}
            icon={item.icon}
            isMobile={isMobile}
            setOpenMenu={setOpenMenu}
          />
        ))}
      </nav>
    </>
  );
};

export default Navbar;
