import { Icon } from "@iconify/react";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Button from "../Button/Button";
import styles from "./Card.module.scss";
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
        <Icon
          icon={
            active ? "material-symbols:bookmark-outline" : "material-symbols:bookmark"
          }
          width="19"
          height="25"
          color="#7293bc"
          onClick={handleClick}
        />
      </div>
      <div className={styles.container2}>
        <div className={styles.date}>
          {formatDistanceToNow(new Date(date), { addSuffix: true })}
        </div>
        <Button onClick={handleOpen} className={styles.Button} type="primary">
          Open
        </Button>
      </div>
      {modal && <NoticeModal />}
    </div>
  );
};

export default Card;
