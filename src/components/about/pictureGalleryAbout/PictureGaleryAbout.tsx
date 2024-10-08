import React from "react";
import "./pictureGaleryAbout.css";
import { TitleContainerAbout } from "./titleContainerAbout/TitleContainerAbout";
import { GalleryPhotosAbout } from "./galleryPhotosAbout/GalleryPhotosAbout";

export function PictureGaleryAbout() {
  return (
    <div
      className="pictureGalleryMainContainer"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="container">
        <TitleContainerAbout />
        <GalleryPhotosAbout />
      </div>
    </div>
  );
}
