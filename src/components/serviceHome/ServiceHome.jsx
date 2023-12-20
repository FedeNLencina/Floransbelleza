import React from "react";
import { BoxIconContainer } from "../containers/boxIconContainer/BoxIconContainer";
import { serviceIcons } from "../../utils/serviceHome";
import "./serviceHome.css";
import { ServiceHomeProvider } from "../../context/ServiceHomeIconContext";
import { Button } from "../commons/Button/Button";
import { Title } from "../commons/Title/Title";

export function ServiceHome() {
  return (
    <div className="container-fluid serviceHomeContainer">
      <Title titleText="Nuestros servicios" />
      <ServiceHomeProvider>
        <BoxIconContainer items={serviceIcons} />
      </ServiceHomeProvider>
      <Button value="Ver servicios" route="/servicios" />
    </div>
  );
}
