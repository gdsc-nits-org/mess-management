import { useState } from "react";
import MainContent from "./MainContent";
import style from "./Feedback.module.scss";

export default function Feedback() {
  const [formData, setFormData] = useState({
    topic: "",
    comments: "",
    receiver: "",
  });
  const [selected, setSelected] = useState("--Choose--");
  const [postsOnQuality, setPostsOnQuality] = useState(0);
  const [postsOnHygiene, setPostsOnHygiene] = useState(0);
  const [postsOnTimings, setPostsOnTimings] = useState(0);
  const [postsOnMenu, setPostsOnMenu] = useState(0);
  const [postsOnOthers, setPostsOnOthers] = useState(0);

  const options = [
    {
      label: "--Choose--",
      value: "choose",
    },
    {
      label: "Quality of Food",
      value: "quality",
    },
    {
      label: "Hygiene Issues",
      value: "hygiene",
    },
    {
      label: "Mess timings",
      value: "timings",
    },
    {
      label: "Change in mess menu",
      value: "menu",
    },
    {
      label: "Others",
      value: "others",
    },
  ];

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(type, event) {
    event.preventDefault();
    setFormData({
      topic: "",
      comments: "",
      receiver: "",
    });
    setSelected("--Choose--");
    const posts = {
      quality: setPostsOnQuality(postsOnQuality + 1),
      hygiene: setPostsOnHygiene(postsOnHygiene + 1),
      timings: setPostsOnTimings(postsOnTimings + 1),
      menu: setPostsOnMenu(postsOnMenu + 1),
      others: setPostsOnOthers(postsOnOthers + 1),
    };
    return posts[type];
  }

  //   setSelected("--Choose--");
  //   switch (selected) {
  //     case "quality":
  //       setPostsOnQuality(postsOnQuality + 1);
  //       break;

  //     case "hygiene":
  //       setPostsOnHygiene(postsOnHygiene + 1);
  //       break;

  //     case "timings":
  //       setPostsOnTimings(postsOnTimings + 1);
  //       break;

  //     case "menu":
  //       setPostsOnMenu(postsOnMenu + 1);
  //       break;

  //     case "others":
  //       setPostsOnOthers(postsOnOthers + 1);
  //       break;
  //     default:
  //       break;
  //   }

  return (
    <>
      <MainContent
        select={selected}
        postsOnQuality={postsOnQuality}
        postsOnHygiene={postsOnHygiene}
        postsOnTimings={postsOnTimings}
        postsOnMenu={postsOnMenu}
        postsOnOthers={postsOnOthers}
      />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className={style.newFeedback}>
            <img
              src="https://cdn.vectorstock.com/i/1000x1000/40/16/check-list-icon-green-vector-19784016.webp"
              alt="checklist"
              width="20px"
              height="20px"
            />
            Create New Feedback
          </legend>
          <label htmlFor="topic">Feedback Topic</label>
          <br />
          <input
            className={style.input}
            type="text"
            placeholder="Topic"
            onChange={handleChange}
            name="topic"
            value={formData.topic}
          />
          <br />

          <textarea
            rows="10"
            className={style.input}
            value={formData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name="comments"
          />
          <br />
          <div className={style.form_info}>
            <label htmlFor="receiver">Feedback addressed to</label>
            <label htmlFor="feedbackType">Feedback Type</label>

            <input
              type="text"
              placeholder="Feedback addressed to"
              onChange={handleChange}
              name="receiver"
              value={formData.receiver}
            />

            <select
              className={style.feedbackType}
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <button className={style.submit} onClick={handleSubmit.bind(selected)}>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}
