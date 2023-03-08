import Dishes from "../Dishes";
import style from "./Dropdown.module.scss";

const DishesMb = ({ menu }) => {
  return (
    <div className={style.card}>
      <span>{menu.time}</span>
      <Dishes menu={menu} />
    </div>
  );
};

export default DishesMb;
