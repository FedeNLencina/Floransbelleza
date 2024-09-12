import React from "react";
import "./pictureGalery.css";
import { TitleContainer } from "./titleContainer/TitleContainer";
import { GalleryPhotos } from "./galleryPhotos/GalleryPhotos";

export function PictureGalery() {
  return (
    <div className="pictureGalleryMainContainer animate__animated animate__fadeInLeft">
      <div className="container">
        <TitleContainer />
        <GalleryPhotos />
      </div>
    </div>
  );
}
