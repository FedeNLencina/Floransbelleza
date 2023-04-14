import React from "react";
import "./hero.css"
import Background from "../../assets/images/backgrounds/backgroundHero2.jpg";
import Background2 from "../../assets/images/backgrounds/backgroundHero3.jpg";
import Background1 from "../../assets/images/backgrounds/backgroundHero1.jpg";


export function Hero() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src={Background} class="d-block" alt="..." />
        </div>
        <div class="carousel-item " data-bs-interval="2000">
          <img src={Background2} class="d-block" alt="..." />
        </div>
        <div class="carousel-item " data-bs-interval="2000">
          <img src={Background1} class="d-block" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
