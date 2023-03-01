import { Icon } from "@iconify/react";
export const TableContents = (props) => {
  return (
    <>
      <p>
        <Icon icon="mdi:tick" width="20px" height="20px" />
        {props.text}
      </p>
      <p>{props.number}</p>
      <p>{props.lastPost}</p>
    </>
  );
};
