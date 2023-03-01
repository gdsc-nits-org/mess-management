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
  const [inputTopic, setInputTopic] = useState("");
  const [comments, setComments] = useState("");
  const [inputReceiver, setInputReceiver] = useState("");
  const [state, setState] = useState({
    quality: 0,
    hygiene: 0,
    timings: 0,
    menu: 0,
    others: 0,
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
    setInputTopic("");
    setComments("");
    setInputReceiver(formData.receiver);

    setSelected("--Choose--");

    setState((prevState) => {
      const newState = { ...prevState };
      newState[selected] += 1;
      return newState;
    });
  };

  return (
    <>
      <MainContent state={state} />
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
            value={inputTopic}
            onChange={(e) => setInputTopic(e.target.value)}
          />
          <br />

          <Textarea
            width="870px"
            height="140px"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Comments"
          />
          <div className={style.form_info}>
            <label htmlFor="receiver">Feedback addressed to</label>
            <label htmlFor="feedbackType">Feedback Type</label>

            <Input
              width="27vw"
              height="40px"
              value={inputReceiver}
              onChange={(e) => setInputReceiver(e.target.value)}
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
