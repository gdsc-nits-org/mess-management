import Dishes from "./Dishes";
import style from "./Contents.module.scss";

const Contents = ({ data, err }) => {
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
