import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css";

export const Button = ({ value, route }) => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  return (
    <div className="d-flex justify-content-center">
      <button
        class="btn buttonCommon"
        type="button"
        onClick={() => navigateTo(`${route}`)}
      >
        {value}
      </button>
    </div>
  );
};
