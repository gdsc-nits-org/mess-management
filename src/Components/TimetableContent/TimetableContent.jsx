import Dishes from "./Dishes";
import style from "./TimetableContent.module.scss";

const TimetableContent = ({ data, err }) => {
  if (err) {
    return <div>{err}</div>;
  }

  return (
    <>
      {data.map(({ day, dishes, key }) => {
        return (
          <tr key={key} className={style.content}>
            <th>{day}</th>
            {dishes.map((dish) => {
              return (
                <td>
                  <Dishes menu={dish} />
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export default TimetableContent;
