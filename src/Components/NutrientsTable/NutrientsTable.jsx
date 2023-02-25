import style from "./NutrientsTable.module.scss";

const NutrientTable = (props) => {
  const { box } = props;

  return (
    <div className={style.table}>
      {box.map((bx) => (
        <div className={style.tableSection}>
          <div className={style.tableSection1}>{bx.day}</div>
          <div className={style.tableSection2}>{bx.dish}</div>
          <div className={style.tableSection3}>
            <span
              style={{
                backgroundColor: bx.type === "Non-Veg" ? "red" : "green",
                borderRadius: 5,
                padding: 5,
                fontSize: 13,
              }}
            >
              {bx.type}
            </span>
          </div>
          <div className={style.tableSection4}></div>
        </div>
      ))}
    </div>
  );
};

export default NutrientTable;
