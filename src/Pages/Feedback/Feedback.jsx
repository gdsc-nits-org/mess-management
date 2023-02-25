import { useState } from "react";
import MainContent from "./MainContent";
import { Input, Button } from "../../Components";
import style from "./Feedback.module.scss";

const Feedback = () => {
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
  const [change, setChange] = useState("");
  const [change1, setChange1] = useState("");

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      topic: "",
      comments: "",
      receiver: "",
    });
    setChange("");
    setChange1("");

    setSelected("--Choose--");
    switch (selected) {
      case "quality":
        setPostsOnQuality(postsOnQuality + 1);
        break;

      case "hygiene":
        setPostsOnHygiene(postsOnHygiene + 1);
        break;

      case "timings":
        setPostsOnTimings(postsOnTimings + 1);
        break;

      case "menu":
        setPostsOnMenu(postsOnMenu + 1);
        break;

      case "others":
        setPostsOnOthers(postsOnOthers + 1);
        break;

      default:
        break;
    }
  };

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
          <Input width="40vw" height="40px" value={change} setVal={setChange} />
          <br />
          <textarea
            rows="10"
            className={style.input}
            placeholder="Comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
          <div className={style.form_info}>
            <label htmlFor="receiver">Feedback addressed to</label>
            <label htmlFor="feedbackType">Feedback Type</label>

            <Input width="30vw" height="40px" value={change1} setVal={setChange1} />

            <select
              className={style.feedbackType}
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {options.map((op) => {
                return <option value={op.value}>{op.label}</option>;
              })}
            </select>
          </div>
          <Button onClick={handleSubmit} type="primary" text="Submit" />
        </fieldset>
      </form>
    </>
  );
};
export default Feedback;
