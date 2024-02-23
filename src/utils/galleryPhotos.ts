import nail from "../assets/images/unias/nailServiceCardProduct.png";
import nail2 from "../assets/images/unias/nail2ServiceCardProduct.png";
import nail3 from "../assets/images/unias/nail3ServiceCardProduct.png";
import nail4 from "../assets/images/unias/nail4ServiceCardProduct.png";
import nail5 from "../assets/images/unias/nail5ServiceCardProduct.png";
import nail6 from "../assets/images/unias/nail6ServiceCardProduct.png";
import { ServiceListItem } from "src/types/ServiceListItem";
import { GalleryPhotoListItem } from "src/types/GalleryPhotoListItem";

const galleryPhoto1 =
  "https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80";
const galleryPhoto2 =
  "https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
const galleryPhoto3 =
  "https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
const galleryPhoto4 =
  "https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

export const galleryPhotoList: GalleryPhotoListItem[] = [
  {
    id: 1,
    title: "Manicure",
    imagePath: galleryPhoto1,
    description:
      "Nuestros tratamientos de manicura estimulan el crecimiento de las uñas y suavizan la piel seca y sin brillo. Tambien ofrecemos los mejores diseños personalizados para que tus manos puedan lucirse en cualquier momento.",
  },
  {
    id: 2,
    title: "Pedicure",
    imagePath: galleryPhoto2,
    description:
      "Nuestros tratamientos de manicura estimulan el crecimiento de las uñas y suavizan la piel seca y sin brillo. Tambien ofrecemos los mejores diseños personalizados para que tus manos puedan lucirse en cualquier momento.",
  },
  {
    id: 3,
    title: "NailsArt",
    imagePath: galleryPhoto3,
    description:
      "Nuestros tratamientos de manicura estimulan el crecimiento de las uñas y suavizan la piel seca y sin brillo. Tambien ofrecemos los mejores diseños personalizados para que tus manos puedan lucirse en cualquier momento.",
  },
  {
    id: 4,
    title: "Skin Care",
    imagePath: galleryPhoto4,
    description:
      "Nuestros tratamientos de manicura estimulan el crecimiento de las uñas y suavizan la piel seca y sin brillo. Tambien ofrecemos los mejores diseños personalizados para que tus manos puedan lucirse en cualquier momento.",
  },
];
