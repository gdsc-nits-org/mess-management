import { Icon } from "@iconify/react";
import styles from "./SearchBar.module.scss";
import Input from "../Input/Input";
const SearchBar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input
          width={props.width}
          height={props.height}
          type="text"
          value=""
          placeholder="search here..."
        />
      </div>
      <div className={styles.iconC}>
        <Icon
          onClick={props.onClick}
          icon="material-symbols:search"
          color="#2da4f9"
          width="30"
          height="30"
        />
        {props.calender && (
          <Icon
            onClick={props.onClick2}
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
