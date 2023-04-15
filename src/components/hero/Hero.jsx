import React from "react";
import "./hero.css"
// import Background from "../../assets/images/backgrounds/backgroundHero2.jpg";
// import Background2 from "../../assets/images/backgrounds/backgroundHero3.jpg";
// import Background1 from "../../assets/images/backgrounds/backgroundHero1.jpg";
import Background3 from "../../assets/images/backgrounds/others/backgroundHero2.jpg";
import Background4 from "../../assets/images/backgrounds/others/BackgroundHero5Pestanias.jpg";
import Background5 from "../../assets/images/backgrounds/others/backgroundHero1.jpg";
import { HeroImage } from "../heroImages/HeroImage";


export function Hero() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner carrousel">
        <div class="carousel-item active" data-bs-interval="2000">
          <HeroImage image={Background3}></HeroImage>
   
        </div>
        <div class="carousel-item " data-bs-interval="2000">
          <HeroImage image={Background4}></HeroImage>
        </div>
        <div class="carousel-item " data-bs-interval="2000">
          <HeroImage image={Background5}></HeroImage>
        </div>
      </div>
    </div>
  );
}
