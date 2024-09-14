import React from "react";
import "./pictureGalery.css";
import { TitleContainer } from "./titleContainer/TitleContainer";
import { GalleryPhotos } from "./galleryPhotos/GalleryPhotos";

export function PictureGalery() {
  return (
    <div
      className="pictureGalleryMainContainer"
      data-aos="flip-left"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="container">
        <TitleContainer />
        <GalleryPhotos />
      </div>
    </div>
  );
}
