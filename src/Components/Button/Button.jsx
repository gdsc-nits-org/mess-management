import styles from "./Button.module.scss";

const Button = ({ text, type, handleOpen }) => {
  return (
    <button
      type={type}
      onClick={handleOpen}
      className={`${styles.btn} ${styles["btn-large"]}`}
    >
      {text}
    </button>
  );
};

export default Button;
