import { Icon } from "@iconify/react";
import { useState } from "react";
import style from "./TimetableContent.module.scss";

const Dishes = ({ menu }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  return (
    <div className={style.dishes}>
      <ul>
        {menu.meals.map((dish) => {
          return <li> {dish} </li>;
        })}
      </ul>
      <div className={style.icons}>
        <Icon
          className={style.icon}
          icon={like ? "mdi:like" : "mdi:like-outline"}
          width="22"
          height="22"
          inline
          onClick={() => {
            setLike((prev) => !prev);
            setDislike(false);
          }}
        />
        <Icon
          className={style.icon}
          icon={dislike ? "mdi:dislike" : "mdi:dislike-outline"}
          width="22"
          height="22"
          inline
          onClick={() => {
            setDislike((prev) => !prev);
            setLike(false);
          }}
        />
      </div>
    </div>
  );
};

export default Dishes;
