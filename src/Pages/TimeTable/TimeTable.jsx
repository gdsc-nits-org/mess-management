import Contents from "./Contents";
import style from "./TimeTable.module.scss";

const TimeTable = () => {
  return (
    <div className={style.container}>
      <h2>Live TimeTable</h2>
      <table>
        <tr>
          <th></th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Snacks</th>
          <th>Dinner</th>
        </tr>
        <Contents />
      </table>
    </div>
  );
};

export default TimeTable;
