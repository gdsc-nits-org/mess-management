import { Icon } from "@iconify/react";
import { useState } from "react";
import MainContent from "./MainContent";
import { Input, Textarea, Button } from "../../Components";
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
  const [change2, setChange2] = useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      topic: "",
      comments: "",
      receiver: "",
    });
    setChange("");
    setChange1("");
    setChange2(formData.receiver);

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
          <Input
            width="40vw"
            height="40px"
            value={change}
            onChange={(e) => setChange(e.target.value)}
          />
          <br />

          <Textarea
            width="870px"
            height="140px"
            value={change1}
            onChange={(e) => setChange1(e.target.value)}
            placeholder="Comments"
          />
          <div className={style.form_info}>
            <label htmlFor="receiver">Feedback addressed to</label>
            <label htmlFor="feedbackType">Feedback Type</label>

            <Input
              width="27vw"
              height="40px"
              value={change2}
              onChange={(e) => setChange2(e.target.value)}
            />

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
