import React from "react";
import Button from "../Button/Button";
import styles from "./Card.module.scss";
const Card = (props) => {
  const { text } = props;
  const { img } = props;
  const { active } = props;
  const { date } = props;
  return (
    <div className={styles.card}>
      <img src={img} style={{ display: active }} alt="on" />
      <div className={styles.text}>{text}</div>
      <div className={styles.date}>{date}</div>
      <Button className={styles.Button}>Button</Button>
    </div>
  );
};

export default Card;