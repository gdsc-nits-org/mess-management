import { Icon } from "@iconify/react";
import style from "./MainContent.module.scss";

const MainContent = (props) => {
  const { postsOnHygiene, postsOnMenu, postsOnOthers, postsOnQuality, postsOnTimings } =
    props;

  return (
    <div>
      <h1>Feedback</h1>

      <div className={style.grid}>
        <p className={style.thead}>
          <Icon icon="octicon:checklist-16" width="20px" height="20px" />
          Topics
        </p>
        <p className={style.thead}>No. of Posts</p>
        <p className={style.thead}>Last Post</p>

        <p>
          <Icon icon="mdi:tick" width="20px" height="20px" />
          Quality of food
        </p>
        <p>{postsOnQuality}</p>
        <p>2 weeks ago</p>

        <p>
          <Icon icon="mdi:tick" width="20px" height="20px" />
          Hygiene issues
        </p>
        <p>{postsOnHygiene}</p>
        <p>1 week ago</p>

        <p>
          <Icon icon="mdi:tick" width="20px" height="20px" />
          Mess timings
        </p>
        <p>{postsOnTimings}</p>
        <p>1 month ago</p>

        <p>
          <Icon icon="mdi:tick" width="20px" height="20px" />
          Change in mess menu
        </p>
        <p>{postsOnMenu}</p>
        <p>2 weeks ago</p>
        <p>
          <Icon icon="mdi:tick" width="20px" height="20px" />
          Others
        </p>
        <p>{postsOnOthers}</p>
        <p>1 day ago</p>
      </div>
    </div>
  );
};
export default MainContent;
