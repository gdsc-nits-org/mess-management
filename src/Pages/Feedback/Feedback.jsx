import { Icon } from "@iconify/react";
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
  const [change, setChange] = useState("");
  const [change1, setChange1] = useState("");
  const [state, setState] = useState({
    postsOnQuality: 0,
    postsOnHygiene: 0,
    postsOnTimings: 0,
    postsOnMenu: 0,
    postsOnOthers: 0,
  });

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

    setState((prevState) => {
      return {
        ...prevState,
        postsOnQuality:
          selected === "quality"
            ? prevState.postsOnQuality + 1
            : prevState.postsOnQuality,
        postsOnHygiene:
          selected === "hygiene"
            ? prevState.postsOnHygiene + 1
            : prevState.postsOnHygiene,
        postsOnTimings:
          selected === "timings"
            ? prevState.postsOnTimings + 1
            : prevState.postsOnTimings,
        postsOnMenu:
          selected === "menu" ? prevState.postsOnMenu + 1 : prevState.postsOnMenu,
        postsOnOthers:
          selected === "others" ? prevState.postsOnOthers + 1 : prevState.postsOnOthers,
      };
    });
  };

  return (
    <>
      <MainContent
        select={selected}
        postsOnQuality={state.postsOnQuality}
        postsOnHygiene={state.postsOnHygiene}
        postsOnTimings={state.postsOnTimings}
        postsOnMenu={state.postsOnMenu}
        postsOnOthers={state.postsOnOthers}
      />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className={style.newFeedback}>
            <Icon icon="octicon:checklist-16" width="20px" height="20px" />
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
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
        </fieldset>
      </form>
    </>
  );
};
export default Feedback;
