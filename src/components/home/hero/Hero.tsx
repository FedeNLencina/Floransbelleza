import React from "react";
import "./hero.css";
import uniasHero1 from "../../../assets/images/backgrounds/UniasHero1Piel.png";
import uniasHero2 from "../../../assets/images/backgrounds/UniasHero2Piel.png";
import uniasHero3 from "../../../assets/images/backgrounds/UniasHero3Piel.png";
import { useWindowDimensions } from "../../../hooks/useWindowDimention";

export function Hero() {
  const { isMobile, isDesktop } = useWindowDimensions();
  return (
    <div className="container-fluid hero">
      <div className="row d-flex justify-content-center rowContainer">
        <div className="col-lg-6 col-12 text-center container-fluid heroInfo">
          <div className="titleContainer">
            <h2 className="heroTitle">La belleza comienza cuando </h2>
            <h2 className="heroTitle">decides ser tu misma</h2>
            <hr className="heroLine" />
          </div>
          {isDesktop &&
            <>
              <div className="heroTextContainer">
                <p className="heroText">
                  Nuestro salon brinda un diseño unico personalizado de uñas,
                  pestañas, tratamientos faciales y depilacion. Nuestra dedicacion
                  se basa en brindar el mejor servicio de belleza para todas
                  nuestras clientas
                </p>
              </div>
              <div className="heroButtonContainer">
                <button type="button" className="btn heroButton">
                  Mas info
                </button>
              </div>
            </>}
        </div>
        <div className="col-lg-6 col-12">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src={uniasHero1} className="carrouselImage" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval="3000">
                <img
                  src={uniasHero2}
                  className="img-fluid carrouselImage"
                  alt="..."
                />
              </div>
              <div className="carousel-item " data-bs-interval="3000">
                <img
                  src={uniasHero3}
                  className="img-fluid carrouselImage"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {isMobile &&
            <>
              <div className="heroTextContainer">
                <p className="heroText">
                  Nuestro salon brinda un diseño unico personalizado de uñas,
                  pestañas, tratamientos faciales y depilacion. Nuestra dedicacion
                  se basa en brindar el mejor servicio de belleza para todas
                  nuestras clientas
                </p>
              </div>
              <div className="heroButtonContainer">
                <button type="button" className="btn heroButton">
                  Mas info
                </button>
              </div>
            </>}
        </div>

      </div>
    </div>
  );
}
