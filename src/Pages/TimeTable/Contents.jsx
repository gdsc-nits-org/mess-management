import Dishes from "./Dishes";
import style from "./TimeTable.module.scss";

//data from backend
const data = [
  {
    day: "MON",
    dishes: [
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2", "Dish3", "Dish3"],
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2", "Dish3"],
    ],
  },
  {
    day: "TUE",
    dishes: [
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2"],
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2", "Dish3"],
    ],
  },
  {
    day: "WED",
    dishes: [
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2"],
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2", "Dish3"],
    ],
  },
  {
    day: "THURS",
    dishes: [
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2"],
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2", "Dish3"],
    ],
  },
  {
    day: "FRI",
    dishes: [
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2"],
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2", "Dish3"],
    ],
  },
  {
    day: "SAT",
    dishes: [
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2"],
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2", "Dish3"],
    ],
  },
  {
    day: "SUN",
    dishes: [
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2"],
      ["Dish1", "Dish2", "Dish3"],
      ["Dish1", "Dish2", "Dish3"],
    ],
  },
];

const Contents = () => {
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
