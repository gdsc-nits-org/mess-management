import { Icon } from "@iconify/react";
import style from "./TimetableContent.module.scss";

const Dishes = ({ menu }) => {
  return (
    <div className={style.dishes}>
      <ul>
        {menu.map((res) => {
          return <li>{res} </li>;
        })}
      </ul>
      <div className={style.icons}>
        <Icon
          className={style.icon}
          icon="cil:comment-bubble"
          width="25"
          height="25"
          inline
        />
        <Icon className={style.icon} icon="uiw:like-o" width="25" height="25" inline />
      </div>
    </div>
  );
};

export default Dishes;
