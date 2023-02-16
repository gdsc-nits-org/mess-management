import React, { useState } from "react";
import styles from "./Input.module.scss";
const Input = (props) => {
  const { width } = props;
  const { height } = props;
  const { bgColor } = props;
  const { textColor } = props;
  const { type } = props;
  const [value, setVal] = useState(props.value);
  return (
    <input
      className={styles.input}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        color: textColor,
      }}
      type={type}
      value={value}
      onChange={(val) => setVal(val.target.value)}
    />
  );
};
export default Input;
