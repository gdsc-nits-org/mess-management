import { Icon } from "@iconify/react";
import style from "./MainContent.module.scss";
import { SearchBar } from "../../Components";
import { TableContents } from "../../Components/TableContents/TableContents";
const MainContent = (props) => {
  const { state } = props;

  return (
    <div>
      <div className={style.title}>
        <p className={style.feedback}>Feedback</p>
        <SearchBar calender="false" width="15rem" height="2rem" />
      </div>
      <div className={style.grid}>
        <p className={style.thead}>
          <Icon icon="octicon:checklist-16" width="20px" height="20px" />
          Topics
        </p>
        <p className={style.thead}>No. of Posts</p>
        <p className={style.thead}>Last Post</p>

        <TableContents
          text="Quality of food"
          number={state.quality}
          lastPost="2 weeks ago"
        />

        <TableContents
          text="Hygiene Issues"
          number={state.hygiene}
          lastPost="2 weeks ago"
        />

        <TableContents
          text="Mess timings"
          number={state.timings}
          lastPost="1 month ago"
        />

        <TableContents
          text="Change in mess menu"
          number={state.menu}
          lastPost="2 weeks ago"
        />

        <TableContents text="Others" number={state.others} lastPost="1 day ago" />
      </div>
    </div>
  );
};
export default MainContent;
