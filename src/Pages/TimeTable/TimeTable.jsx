import { useState, useEffect } from "react";
import { TimetableContent, TableMb } from "../../Components";
import style from "./TimeTable.module.scss";

const TimeTable = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("data/timetabledata.json")
      .then((response) => response.json())
      .then((content) => setData(content))
      .catch((error) => setErr(error.name));
  }, []);

  return (
    <div className={style.container}>
      <h2>Live TimeTable</h2>
      <TableMb data={data} />
      <table>
        <tr>
          <th className={style.radius1}> </th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Snacks</th>
          <th className={style.radius2}>Dinner</th>
        </tr>
        <TimetableContent data={data} err={err} />
      </table>
    </div>
  );
};

export default TimeTable;
