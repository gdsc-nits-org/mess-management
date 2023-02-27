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
  // const onKeyDownHandler=()=>{
  //   console.log(active)
  // }
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <button onClick={handleClick}>
          <img src={active ? closed : open} alt="on" />
        </button>
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.date}>
        {formatDistanceToNow(new Date(date), { addSuffix: true })}
      </div>
      <button onClick={handleOpen}>
        <Button className={styles.Button} type="primary">
          Open
        </Button>
      </button>
      {modal && <NoticeModal />}
    </div>
  );
};

export default Card;
