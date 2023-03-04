/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Button from "../Button/Button";
import styles from "./Card.module.scss";
import open from "../../assets/bookmark(open).svg";
import closed from "../../assets/bookmark(closed).svg";
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
      <div className={styles.img}>
        <img src={active ? closed : open} alt="on" onClick={handleClick} role="button" />
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.date}>
        {formatDistanceToNow(new Date(date), { addSuffix: true })}
      </div>
      <Button onClick={handleOpen} className={styles.Button} type="primary">
        Open
      </Button>
      {modal && <NoticeModal />}
    </div>
  );
};

export default Card;
