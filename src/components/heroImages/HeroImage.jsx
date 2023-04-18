import React from "react";
import "./heroImage.css";

export function HeroImage(props) {
  return (
    <img
      src={props.image}
      class="d-block carrouselImage  img-fluid"
      alt="..."
    />
  );
}
