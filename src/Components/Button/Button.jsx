import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={styles[props.type]} onClick={props.handleOpen}>
      {props.text}
    </button>
  );
};

export default Button;
