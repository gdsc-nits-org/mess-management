import styles from "./Textarea.module.scss";
const Textarea = (props) => {
  const { width, height, value, bgColor, textColor, onChange, placeholder } = props;

  return (
    <textarea
      className={styles.textarea}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        color: textColor,
      }}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};
export default Textarea;
