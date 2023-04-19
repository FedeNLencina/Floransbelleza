import React from "react";
import "./hero.css";

export function Hero() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner carrousel carousel-fade">
        <div
          id="carousel1"
          class="carousel-item active"
          data-bs-interval="3000"
        ></div>
        <div
          id="carousel2"
          class="carousel-item "
          data-bs-interval="3000"
        ></div>
        <div
          id="carousel3"
          class="carousel-item "
          data-bs-interval="3000"
        ></div>
        <div
          id="carousel4"
          class="carousel-item "
          data-bs-interval="3000"
        ></div>
      </div>
    </div>
  );
}
