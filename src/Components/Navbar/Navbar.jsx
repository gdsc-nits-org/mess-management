import Navbutton from "./NavButton";
import styles from "./Navbar.module.scss";
const Pages = [
  { name: "Home", path: "/" },
  { name: "MMC", path: "/MMC" },
  { name: "Bill", path: "/Bill" },
  { name: "Token", path: "/Token" },
  { name: "Nutrients", path: "/Nutrients" },
  { name: "Feedback", path: "/Feedback" },
  { name: "Mail", path: "/Mail" },
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
      <div className="navbar">
        <nav>
          {Pages.map((item) => (
            <Navbutton name={item.name} link={item.path} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
