import { useState, useEffect } from "react";
import Dishes from "./Dishes";
import style from "./Contents.module.scss";

const Contents = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("data/timetabledata.json")
      .then((res) => res.json())
      .then((content) => setData(content))
      .catch((error) => setErr(error.name));
  }, []);

  if (err) {
    return <div>{err}</div>;
  }

  return (
    <>
      {data.map((res) => {
        return (
          <tr className={style.content}>
            <th>{res.day}</th>
            {res.dishes.map((res) => {
              return (
                <td>
                  <Dishes menu={res} />
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export default Contents;
