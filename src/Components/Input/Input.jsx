import styles from "./Input.module.scss";
const Input = (props) => {
  const {
    width,
    height,
    bgColor,
    textColor,
    type,
    searchValue,
    setSearchValue,
    placeholder,
  } = props;
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
      value={searchValue}
      onChange={(val) => setSearchValue(val.target.value)}
    />
  );
};
export default Input;
