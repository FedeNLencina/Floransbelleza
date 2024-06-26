import React from "react";
import { Hero } from "./hero/Hero";
import { AboutHome } from "./aboutHome/AboutHome";
import { ServiceHome } from "./serviceHome/ServiceHome";
import { ServiceHomeProvider } from "../../context/ServiceHomeIconContext";
import { Testimonials } from "./testimonials/Testimonials";
import { Booking } from "./booking/Booking";
import { PictureGalery } from "./pictureGallery/PictureGalery";
import { InstagramFeed } from "./instagramFeed/InstagramFeed";
import { Footer } from "./footer/Footer";
import { ScrollTopButton } from "./scrollTopButton/ScrollTopButton";

export function Home() {
  return (
    <>
      <Hero />
      <AboutHome />
      <ServiceHomeProvider>
        <ServiceHome />
      </ServiceHomeProvider>
      <Testimonials />
      <Booking />
      <PictureGalery />
      <InstagramFeed />
      <Footer />
      <ScrollTopButton offset={200} />
    </>
  );
}
