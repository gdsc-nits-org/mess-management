import Dishes from "./Dishes";
import style from "./TimetableContent.module.scss";

const TimetableContent = ({ data, err }) => {
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

export default TimetableContent;
