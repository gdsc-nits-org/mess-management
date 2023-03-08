import style from "./Dropdown.module.scss";

const Options = ({ data, setMeal, setDrop }) => {
  const handleClick = (index) => {
    setMeal(index);
    setDrop(false);
  };

  return (
    <div className={style.options}>
      {data.map((opt, index) => {
        return (
          <button className={style.optbtn} onClick={() => handleClick(index)}>
            {opt.fullDay}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
