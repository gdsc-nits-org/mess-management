import { Icon } from "@iconify/react";
const FeedbackResponses = (props) => {
  return (
    <>
      <p>
        <Icon icon="mdi:tick" width="20px" height="20px" />
        {props.text}
      </p>
      <p>{props.count}</p>
      <p>{props.lastPost}</p>
    </>
  );
};
export default FeedbackResponses;
