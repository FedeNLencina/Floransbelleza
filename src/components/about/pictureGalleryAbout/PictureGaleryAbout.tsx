import React from "react";
import "./pictureGaleryAbout.css";
import { TitleContainerAbout } from "./titleContainerAbout/TitleContainerAbout";
import { GalleryPhotosAbout } from "./galleryPhotosAbout/GalleryPhotosAbout";

export function PictureGaleryAbout() {
  return (
    <div className="pictureGalleryMainContainer">
      <div className="container">
        <TitleContainerAbout />
        <GalleryPhotosAbout />
      </div>
    </div>
  );
}
