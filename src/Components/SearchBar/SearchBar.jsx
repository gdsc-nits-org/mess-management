import { Icon } from "@iconify/react";
import styles from "./SearchBar.module.scss";
import Input from "../Input/Input";
const SearchBar = ({
  searchValue,
  setSearchValue,
  width,
  height,
  onClick,
  onClick2,
  calender,
}) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input
          width={width}
          height={height}
          type="text"
          placeholder="search here..."
          searchValue={searchValue}
          onChange={handleChange}
        />
      </div>
      <div className={styles.iconC}>
        <Icon
          onClick={onClick}
          icon="material-symbols:search"
          color="#2da4f9"
          width="30"
          height="30"
        />
        {calender && (
          <Icon
            onClick={onClick2}
            icon="uis:calender"
            color="#2da4f9"
            width="28"
            height="28"
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
