import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Button from "../Button/Button";
import styles from "./Card.module.scss";
import open from "../../assests/bookmark(open).svg";
import closed from "../../assests/bookmark(closed).svg";
import NoticeModal from "./NoticeModal";
const Card = ({ text, date }) => {
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setActive((prev) => {
      return !prev;
    });
  };
  const handleOpen = () => {
    setModal((prev) => {
      return !prev;
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.img} onClick={handleClick}>
        <img src={active ? closed : open} alt="on" />
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.date}>
        {formatDistanceToNow(new Date(date), { addSuffix: true })}
      </div>
      <Button handleOpen={handleOpen} className={styles.Button} text="open" />
      {modal && <NoticeModal />}
    </div>
  );
};

export default Card;
