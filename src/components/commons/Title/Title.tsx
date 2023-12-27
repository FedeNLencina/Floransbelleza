import React from "react";
import "./title.css";

type TitleProps = {
  titleText: string;
};

export const Title = ({ titleText }: TitleProps) => {
  return (
    <div className="text-center">
      <h2 className="textTitle">{titleText}</h2>
      <hr className="line" />
    </div>
  );
};
