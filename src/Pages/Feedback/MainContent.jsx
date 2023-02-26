import style from "./MainContent.module.scss";

const MainContent = (props) => {
  const { postsOnHygiene, postsOnMenu, postsOnOthers, postsOnQuality, postsOnTimings } =
    props;

  return (
    <div>
      <h1>Feedback</h1>

      <div className={style.grid}>
        <p className={style.thead}>
          <img
            src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-checklist-icon-blue-vector-isolated-on-white-background-png-image_8058567.png"
            alt="checklist"
          />
          Topics
        </p>
        <p className={style.thead}>No. of Posts</p>
        <p className={style.thead}>Last Post</p>

        <p>
          <img
            src="https://i.pinimg.com/736x/18/c2/62/18c262af1f2b8a8d8ba6317474b45067.jpg"
            alt="checklist"
          />
          Quality of food
        </p>
        <p>{postsOnQuality}</p>
        <p>2 weeks ago</p>

        <p>
          <img
            src="https://i.pinimg.com/736x/18/c2/62/18c262af1f2b8a8d8ba6317474b45067.jpg"
            alt="checklist"
          />
          Hygiene issues
        </p>
        <p>{postsOnHygiene}</p>
        <p>1 week ago</p>

        <p>
          <img
            src="https://i.pinimg.com/736x/18/c2/62/18c262af1f2b8a8d8ba6317474b45067.jpg"
            alt="checklist"
          />
          Mess timings
        </p>
        <p>{postsOnTimings}</p>
        <p>1 month ago</p>

        <p>
          <img
            src="https://i.pinimg.com/736x/18/c2/62/18c262af1f2b8a8d8ba6317474b45067.jpg"
            alt="checklist"
          />
          Change in mess menu
        </p>
        <p>{postsOnMenu}</p>
        <p>2 weeks ago</p>
        <p>
          <img
            src="https://i.pinimg.com/736x/18/c2/62/18c262af1f2b8a8d8ba6317474b45067.jpg"
            alt="checklist"
          />
          Others
        </p>
        <p>{postsOnOthers}</p>
        <p>1 day ago</p>
      </div>
    </div>
  );
};
export default MainContent;
