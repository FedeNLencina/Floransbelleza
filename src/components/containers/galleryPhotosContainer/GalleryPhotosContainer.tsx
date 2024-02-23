import { GalleryPhotoListItem } from "src/types/GalleryPhotoListItem";
import { GalleryPhotoList } from "../../lists/galleryPhotoList/GalleryPhotoList";
import { galleryPhotoList } from "../../../utils/galleryPhotos";
import React, { useState } from "react";

export function GalleryPhotosContainer() {
  const [galleryPhotosList, setGalleryPhotosList] =
    useState<Array<GalleryPhotoListItem>>(galleryPhotoList);

  return (
    <div>
      <GalleryPhotoList galleryPhotoList={galleryPhotosList} />
    </div>
  );
}
