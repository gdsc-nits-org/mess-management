import NavButton from "./NavButton";
import styles from "./Navbar.module.scss";
const Pages = [
  { name: "Home", path: "/" },
  { name: "Notice", path: "/notice" },
  { name: "Timetable", path: "/timetable" },
  { name: "Feedback", path: "/feedback" },
];

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header1}>
          <img src="" alt="logo" />
          <h1 className={styles.mm}>Mess Management</h1>
        </div>
        <div className={styles.header2}>
          <img src="" alt="profile" />
          <h1 className={styles.user}>Username</h1>
        </div>
      </div>
      <nav>
        {Pages.map((item) => (
          <NavButton name={item.name} link={item.path} />
        ))}
      </nav>
    </>
  );
};

export default Navbar;
