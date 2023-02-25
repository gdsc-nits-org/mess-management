import { MdOutlineCalendarToday } from "react-icons/md";
import { BsListUl } from "react-icons/bs";
import { RiAlignLeft, RiLoader2Fill } from "react-icons/ri";
import style from "./NutrientsTableHeader.module.scss";

const NutrientsTableHeader = () => {
  return (
    <div className={style.tableSection}>
      <div className={style.tableSection1}>
        <MdOutlineCalendarToday />
        Day
      </div>
      <div className={style.tableSection2}>
        <RiAlignLeft />
        Dish
      </div>
      <div className={style.tableSection3}>
        <BsListUl />
        Type
      </div>
      <div className={style.tableSection4}>
        <RiLoader2Fill />
        Nutrients
      </div>
    </div>
  );
};

export default NutrientsTableHeader;
