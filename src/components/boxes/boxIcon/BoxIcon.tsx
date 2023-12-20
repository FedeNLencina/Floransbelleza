import React, { useContext } from "react";
import { ServiceHomeIconContext } from "../../../context/ServiceHomeIconContext";
import "./boxIcon.css";
import { Service } from "src/types/ServiceInfoHome";

type BoxIconProps = {
  item: Service;
};

export function BoxIcon({ item }: BoxIconProps) {
  const { descriptionHandler } = useContext(ServiceHomeIconContext);
  console.log("item descripction: ", item.description);

  return (
    <div
      onClick={() => {
        descriptionHandler(item.description);
      }}
      className="text-center divIconContainer"
    >
      <img className="iconImg" src={item.icon.path} alt={item.title}></img>
      <p className="iconTitle">{item.title}</p>
    </div>
  );
}
