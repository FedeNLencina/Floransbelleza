import React from "react";
import { BoxIconContainer } from "../containers/boxIconContainer/BoxIconContainer";
import { serviceIcons } from "../../services/serviceHome";
import "./serviceHome.css";
import { ServiceHomeProvider } from "../../context/ServiceHomeIconContext";

export function ServiceHome() {
  return (
    <div className="container-fluid serviceHomeContainer">
      <ServiceHomeProvider>
        <BoxIconContainer items={serviceIcons} />
      </ServiceHomeProvider>
    </div>
  );
}
