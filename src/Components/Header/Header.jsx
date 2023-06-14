import styles from "./Header.module.scss";

const Header = ({ isMobile }) => {
  return (
    <div className={styles.header}>
      <div className={isMobile ? styles.mobile_header : styles.header1}>
        <img src="" alt="logo" />
        <h1>Mess Management</h1>
      </div>
      {!isMobile && (
        <div className={styles.header2}>
          <img src="" alt="profileImg" />
          <h4>Username</h4>
        </div>
      )}
    </div>
  );
};

export default Header;
