import { useState, useEffect } from "react";
import { NutrientTable, Dropdown } from "../../Components";

import style from "./Nutrients.module.scss";

const Nutrients = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [index, setIndex] = useState(new Date().getDay());

  useEffect(() => {
    fetch("data/nutrients.json")
      .then((res) => res.json())
      .then((content) => setData(content))
      .catch((error) => setErr(error.name));
  }, []);

  return (
    <div>
      <div className={style.heading}>
        <h1>Food Nutrients</h1>
        <Dropdown {...{ index, setIndex, data }} />
      </div>
      <div className={style.table}>
        <NutrientTable index={index} box={data} err={err} />
      </div>
    </div>
  );
};

export default Nutrients;
