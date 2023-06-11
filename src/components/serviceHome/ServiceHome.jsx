import React from "react";
import { BoxIconContainer } from "../containers/boxesIconContainer/BoxIconContainer";
import { serviceIcons } from "../../services/serviceHome";
import "./serviceHome.css";

export function ServiceHome() {
  return (
    <div className="container-fluid serviceHomeContainer">
      <BoxIconContainer items={serviceIcons} />
    </div>
  );
}
