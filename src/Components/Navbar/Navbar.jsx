import NavButton from "./NavButton";
import styles from "./Navbar.module.scss";
const Pages = [
  { name: "Home", path: "/" },
  { name: "Notice", path: "/notice" },
  { name: "Timetable", path: "/timetable" },
  { name: "Feedback", path: "/feedback" },
];

const Navbar = ({ isMobile, openMenu, setOpenMenu }) => {
  return (
    <>
      {isMobile && (
        <button className={styles.menuBtn} onClick={() => setOpenMenu((prev) => !prev)}>
          <img src={`/vectors/${!openMenu ? "open" : "close"}.svg`} alt="menu" />
        </button>
      )}
      <nav
        className={`${isMobile ? styles.navMobile : styles.navLinks} ${
          openMenu ? styles.openMenu : ""
        }`}
      >
        {Pages.map((item) => (
          <NavButton
            name={item.name}
            link={item.path}
            isMobile={isMobile}
            setOpenMenu={setOpenMenu}
          />
        ))}
      </nav>
    </>
  );
};

export default Navbar;
