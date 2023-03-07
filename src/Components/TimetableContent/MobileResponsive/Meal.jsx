import DishesMb from "./DishesMb";
import style from "./Dropdown.module.scss";

const Meal = ({ meal, data }) => {
  return (
    <div className={style.gridContainer}>
      {data[meal].dishes.map((menu) => {
        return <DishesMb menu={menu} />;
      })}
    </div>
  );
};

export default Meal;
