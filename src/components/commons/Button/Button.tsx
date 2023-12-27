import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css";

type ButtonProps = {
  text: string;
  route: string;
};

export const Button = ({ text, route }: ButtonProps) => {
  const navigate = useNavigate();

  const navigateTo = (route: string) => {
    navigate(route);
  };

  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn buttonCommon"
        type="button"
        onClick={() => navigateTo(`${route}`)}
      >
        {text}
      </button>
    </div>
  );
};
