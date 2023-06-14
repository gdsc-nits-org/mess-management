import Dishes from "./Dishes";
import style from "./TimetableContent.module.scss";

const Meal = ({ index, data }) => {
  return (
    <div className={style.gridContainer}>
      {data[index]?.dishes.map((menu) => {
        return (
          <div key={menu.key} className={style.card}>
            <span>{menu.time}</span>
            <Dishes menu={menu} />
          </div>
        );
      })}
    </div>
  );
};

export default Meal;
