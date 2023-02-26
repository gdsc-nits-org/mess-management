import styles from "./Input.module.scss";
const Input = (props) => {
  const { width, height, bgColor, textColor, type, Value, onChange, placeholder } = props;
  return (
    <input
      className={styles.input}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        color: textColor,
      }}
      placeholder={placeholder}
      type={type}
      value={Value}
      onChange={(e) => onChange(e)}
    />
  );
};
export default Input;
