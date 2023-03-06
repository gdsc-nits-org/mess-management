import React from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { BsListUl } from "react-icons/bs";
import { RiAlignLeft, RiLoader2Fill } from "react-icons/ri";
import Donut from "../DonutChart/DonutChart";
import style from "./NutrientsTable.module.scss";

const NutrientTable = (props) => {
  const { box } = props;

  return (
    <div className={style.table}>
      <div className={style.tableHeader}>
        <div className={style.tableSection1}>
          <MdOutlineCalendarToday />
          <div className={style.text}>Day</div>
        </div>
        <div className={style.tableSection2}>
          <RiAlignLeft />
          <div className={style.text}>Dish</div>
        </div>
        <div className={style.tableSection3}>
          <BsListUl />
          <div className={style.text}>Type</div>
        </div>
        <div className={style.tableSection4}>
          <RiLoader2Fill />
          <div className={style.text}>Nutrients</div>
        </div>
      </div>

      {box.map((bx) => (
        <div className={style.tableContent}>
          <div className={style.tableSection}>
            <div className={style.tableSection1}>{bx.day}</div>
            <div className={style.tableSection2}>{bx.dish}</div>
            <div className={style.tableSection3}>
              <span
                style={{
                  backgroundColor: bx.type === "Non-Veg" ? "#cd2a3b" : "#d4f9d2",
                  borderRadius: 5,
                  padding: 5,
                  fontSize: 13,
                }}
              >
                {bx.type}
              </span>
            </div>
            <div className={style.tableSection4}>
              <Donut series={bx.series} />
            </div>
          </div>
          <div className={style.breakLine}></div>
        </div>
      ))}
    </div>
  );
};

export default NutrientTable;
