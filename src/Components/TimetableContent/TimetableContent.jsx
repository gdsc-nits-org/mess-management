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
            {res.dishes.map((response) => {
              return (
                <td>
                  <Dishes menu={response} />
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
