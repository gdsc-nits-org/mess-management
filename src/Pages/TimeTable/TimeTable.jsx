import { Contents } from "../../Components";
import style from "./TimeTable.module.scss";

const TimeTable = () => {
  return (
    <div className={style.container}>
      <h2>Live TimeTable</h2>
      <table>
        <tr>
          <th className={style.radius1}></th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Snacks</th>
          <th className={style.radius2}>Dinner</th>
        </tr>
        <Contents />
      </table>
    </div>
  );
};

export default TimeTable;
