import styles from "./Button.module.scss";

const Button = (props) => {
  return <button className={styles[props.type]}>Button</button>;
};

export default Button;
