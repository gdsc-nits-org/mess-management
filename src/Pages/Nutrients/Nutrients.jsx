import NutrientTable from "../../Components/NutrientsTable/NutrientsTable";
import NutrientsTableHeader from "../../Components/NutrientsTableHeader/NutrientsTableHeader";
import style from "./Nutrients.module.scss";

const Nutrients = () => {
  const item = [
    { day: "Sunday", dish: "Dish 1", type: "Non-Veg", id: 1 },
    { day: "Monday", dish: "Dish 2", type: "Non-Veg", id: 2 },
    { day: "Tuesday", dish: "Dish 3", type: "Veg", id: 3 },
    { day: "Wednesday", dish: "Dish 4", type: "Non-Veg", id: 4 },
    { day: "Thursday", dish: "Dish 5", type: "Veg", id: 5 },
    { day: "Friday", dish: "Dish 6", type: "Non-Veg", id: 6 },
    { day: "Saturday", dish: "Dish 7", type: "Non-Veg", id: 7 },
  ];

  return (
    <div>
      <div className={style.heading}>
        <h1>Food Nutrients</h1>
      </div>
      <div className={style.table}>
        <NutrientsTableHeader />
        <NutrientTable box={item} />
      </div>
    </div>
  );
};

export default Nutrients;
