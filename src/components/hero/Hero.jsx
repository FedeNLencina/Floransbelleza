import React from "react";
import "./hero.css";
import uniasHero1 from "../../assets/images/backgrounds/UniasHero1Piel.png";
import uniasHero2 from "../../assets/images/backgrounds/UniasHero2Piel.png";
import uniasHero3 from "../../assets/images/backgrounds/UniasHero3Piel.png";

export function Hero() {
  return (
    <div className="container-fluid hero">
      <div className="row d-flex justify-content-center">
        <div className="col-5 text-center container-fluid titleContainer">
          <h2 className="heroTitle">La belleza comienza</h2>
          <h2 className="heroTitle">cuando decides ser</h2>
          <h2 className="heroTitle">tu misma</h2>
          <p>
            Our Nail Salon brings unique and custom nail designs to all
            customers of LA area. We are a team of nail artists specializing on
            complete nail care.
          </p>
        </div>
        <div className="col-7">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <img src={uniasHero1} class="carrouselImage" alt="..." />
              </div>
              <div class="carousel-item " data-bs-interval="3000">
                <img
                  src={uniasHero2}
                  class="img-fluid carrouselImage"
                  alt="..."
                />
              </div>
              <div class="carousel-item " data-bs-interval="3000">
                <img
                  src={uniasHero3}
                  class="img-fluid carrouselImage"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
