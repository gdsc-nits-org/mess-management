import { Icon } from "@iconify/react";
import style from "./Contents.module.scss";

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
          inline={true}
        />
        <Icon
          className={style.icon}
          icon="uiw:like-o"
          width="25"
          height="25"
          inline={true}
        />
      </div>
    </div>
  );
};

export default Dishes;
