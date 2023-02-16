import React from "react";
import "./Navbutton.scss";
const Navbutton = (props) => {
  const { name } = props;
  const { link } = props;
  return (
    <a href={link}>
      <button className="navbutton">{name}</button>
    </a>
  );
};
export default Navbutton;
