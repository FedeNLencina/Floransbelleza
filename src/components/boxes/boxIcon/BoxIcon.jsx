import React, { useContext } from "react";
import { ServiceHomeIconContext } from "../../../context/ServiceHomeIconContext";
import "./boxIcon.css";

export function BoxIcon({ item }) {
  const { descriptionHandler } = useContext(ServiceHomeIconContext);
  console.log("item descripction: ", item.description);

  return (
    <div
      onClick={() => {
        descriptionHandler(item.description);
      }}
      className="text-center divIconContainer"
    >
      <img className="iconImg" src={item.icon} alt={item.icon}></img>
      <p className="iconTitle">{item.title}</p>
    </div>
  );
}
