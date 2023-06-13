import { Icon } from "@iconify/react";
import { useState } from "react";
import Options from "./Options";
import style from "./DropDown.module.scss";

const Dropdown = ({ data, index, setIndex }) => {
  const [drop, setDrop] = useState(false);

  const handleClick = () => {
    setDrop((prev) => !prev);
  };

  return (
    <>
      <button className={style.header} onClick={handleClick}>
        <span>{data[index]?.title}</span>
        <Icon
          className={style.arrow}
          style={drop && { transform: "rotate(-180deg)" }}
          icon="material-symbols:arrow-drop-down-rounded"
          height="60"
          width="70"
        />
      </button>
      {drop && <Options {...{ data, setIndex, setDrop }} />}
    </>
  );
};

export default Dropdown;
