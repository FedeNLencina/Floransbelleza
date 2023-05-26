import React from "react";
import { BoxIconContainer } from "../containers/boxesIconContainer/BoxIconContainer";
import { serviceIcons } from "../../services/serviceHome";

export function ServiceHome() {
  return (
    <div className="container">
      <BoxIconContainer items={serviceIcons} />
    </div>
  );
}
