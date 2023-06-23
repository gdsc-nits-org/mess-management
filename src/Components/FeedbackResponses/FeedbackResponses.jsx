const FeedbackResponses = (props) => {
  return (
    <>
      <p>{props.text}</p>
      <p>{props.count}</p>
      <p>{props.lastPost}</p>
    </>
  );
};
export default FeedbackResponses;
