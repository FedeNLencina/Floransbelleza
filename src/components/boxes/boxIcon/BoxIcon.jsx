import React from "react";
import BoxDescription from "../boxDescription/BoxDescription";

export function BoxIcon({ icon, title, description }) {
  return (
    <div className="">
      <div>
        <img src={icon} alt={icon}></img>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
