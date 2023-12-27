import React, { useContext } from "react";
import {
  ServiceHomeIconContext,
  ServiceHomeIconContextType,
} from "../../../context/ServiceHomeIconContext";
import "./boxIcon.css";
import { ServiceInfoHome } from "src/types/ServiceInfoHome";

type BoxIconProps = {
  item: ServiceInfoHome;
};

export function BoxIcon({ item }: BoxIconProps) {
  const contextValue = useContext(ServiceHomeIconContext);

  const { descriptionHandler } = contextValue || {
    descriptionHandler: () => {},
  };

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
