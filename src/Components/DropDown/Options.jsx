import style from "./DropDown.module.scss";

const Options = ({ data, setIndex, setDrop }) => {
  const handleClick = (index) => {
    setIndex(index);
    setDrop(false);
  };

  return (
    <div className={style.options}>
      {data.map((opt, index) => (
        <button key={opt.key} className={style.optbtn} onClick={() => handleClick(index)}>
          {opt.title}
        </button>
      ))}
    </div>
  );
};

export default Options;
