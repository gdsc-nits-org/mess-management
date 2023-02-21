import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={styles[props.type]} onClick={props.onClick}>
      Button
    </button>
  );
};

export default Button;
