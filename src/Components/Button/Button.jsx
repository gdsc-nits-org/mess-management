import styles from "./Button.module.scss";

const Button = ({ text, type }) => {
  return (
    <button type={type} className={`${styles.btn} ${styles["btn-large"]}`}>
      {text}
    </button>
  );
};

export default Button;
