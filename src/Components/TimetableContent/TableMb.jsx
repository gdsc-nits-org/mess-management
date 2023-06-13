import React, { useState } from "react";
import Dropdown from "../DropDown/DropDown";
import style from "./TimetableContent.module.scss";
import Meal from "./Meal";

const TableMb = ({ data }) => {
  const [index, setIndex] = useState(new Date().getDay());
  return (
    <div className={style.container}>
      <Dropdown {...{ index, setIndex, data }} />
      <Meal index={index} data={data} />
    </div>
  );
};

export default TableMb;