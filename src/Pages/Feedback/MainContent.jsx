import style from "./Form.module.scss";

export default function MainContent(props) {
  // let [postsOnQuality, setPostsOnQuality] = React.useState(0);
  // let [postsOnHygiene, setPostsOnHygiene] = React.useState(0)
  // let [postsOnTimings, setPostsOnTimings] = React.useState(0)
  // let [postsOnMenu, setPostsOnMenu] = React.useState(0)
  // let [postsOnOthers, setPostsOnOthers] = React.useState(0)

  const { postsOnHygiene, postsOnMenu, postsOnOthers, postsOnQuality, postsOnTimings } =
    props;

  
  return (
    <div>
      <h1>Feedback</h1>
      <table className={style.table} border="4">
        <thead>
          <tr>
            <th>
              <img
                src="https://cdn.vectorstock.com/i/1000x1000/40/16/check-list-icon-green-vector-19784016.webp"
                alt="checklist"
                width="20px"
                height="20px"
              />
              Topics
            </th>
            <th>No. of Posts</th>
            <th>Last Post</th>
          </tr>
        </thead>
        <tbody className={style.tableBody}>
          <tr>
            <td>
              <img
                src="https://png.pngtree.com/png-clipart/20210321/original/pngtree-green-check-mark-icon-flat-style-vector-png-image_6109374.jpg"
                alt="checklist"
                width="20px"
                height="20px"
              />
              Quality of food
            </td>
            <td>{postsOnQuality}</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img
                src="https://png.pngtree.com/png-clipart/20210321/original/pngtree-green-check-mark-icon-flat-style-vector-png-image_6109374.jpg"
                alt="checklist"
                width="20px"
                height="20px"
              />
              Hygiene issues
            </td>
            <td>{postsOnHygiene}</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img
                src="https://png.pngtree.com/png-clipart/20210321/original/pngtree-green-check-mark-icon-flat-style-vector-png-image_6109374.jpg"
                alt="checklist"
                width="20px"
                height="20px"
              />
              Mess timings
            </td>
            <td>{postsOnTimings}</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img
                src="https://png.pngtree.com/png-clipart/20210321/original/pngtree-green-check-mark-icon-flat-style-vector-png-image_6109374.jpg"
                alt="checklist"
                width="20px"
                height="20px"
              />
              Change in mess menu
            </td>
            <td>{postsOnMenu}</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img
                src="https://png.pngtree.com/png-clipart/20210321/original/pngtree-green-check-mark-icon-flat-style-vector-png-image_6109374.jpg"
                alt="checklist"
                width="20px"
                height="20px"
              />
              Others
            </td>
            <td>{postsOnOthers}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
