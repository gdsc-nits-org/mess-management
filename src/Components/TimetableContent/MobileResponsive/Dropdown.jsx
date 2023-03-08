import { Icon } from "@iconify/react";
import { useState } from "react";
import Options from "./Options";
import Meal from "./Meal";
import style from "./Dropdown.module.scss";

const Dropdown = ({ data }) => {
  const [drop, setDrop] = useState(false);
  const [meal, setMeal] = useState(null);

  const handleClick = () => {
    setDrop((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <button className={style.header} onClick={handleClick}>
        <span>{meal !== null ? data[meal].fullDay : "Select Day"}</span>
        <Icon
          className={style.arrow}
          style={drop && { transform: "rotate(-180deg)" }}
          icon="material-symbols:arrow-drop-down-rounded"
          height="60"
          width="70"
        />
      </button>
      {drop && <Options data={data} setMeal={setMeal} setDrop={setDrop} />}
      {meal !== null && <Meal meal={meal} data={data} />}
    </div>
  );
};

export default Dropdown;
