import { useState, useEffect } from "react";
import { NutrientTable } from "../../Components";
import style from "./Nutrients.module.scss";

const Nutrients = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("data/timetabledata.json")
      .then((res) => res.json())
      .then((content) => setData(content))
      .catch((error) => setErr(error.name));
  }, []);

  return (
    <div>
      <div className={style.heading}>
        <h1>Food Nutrients</h1>
      </div>
      <div className={style.table}>
        <NutrientTable box={data} err={err} />
      </div>
    </div>
  );
};

export default Nutrients;
