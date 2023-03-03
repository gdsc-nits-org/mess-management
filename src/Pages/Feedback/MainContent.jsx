import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import style from "./MainContent.module.scss";
import { SearchBar } from "../../Components";
import { FeedbackResponses } from "../../Components";

const MainContent = (props) => {
  const [responses, setResponses] = useState([]);
  const { postCount } = props;

  useEffect(() => {
    fetch("data/responsesdata.json")
      .then((res) => res.json())
      .then((content) => setResponses(content));
  }, []);

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

        {responses.map((res) => {
          return (
            <FeedbackResponses
              key={res.text}
              text={res.text}
              count={postCount[res.topic]}
              lastPost={res.lastPost}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MainContent;
