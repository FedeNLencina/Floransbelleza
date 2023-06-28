import React from "react";
import "./title.css";

export const Title = ({ titleText }) => {
  return (
    <div className="text-center">
      <h2 className="textTitle">{titleText}</h2>
      <hr className="line" />
    </div>
  );
};
