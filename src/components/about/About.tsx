import React from "react";
import firstSectionImage from "../../assets/images/about/Screenshot_307-min.png";
import "./about.css";
import { PictureGaleryAbout } from "./pictureGalleryAbout/PictureGaleryAbout";
import { Testimonials } from "@components/testimonials/Testimonials";
import { Footer } from "@components/footer/Footer";
import { ScrollTopButton } from "@components/home/scrollTopButton/ScrollTopButton";

export default function About() {
  return (
    <div className="container-fluid aboutContainer">
      <section className="topSection">
        <div className="topSectionBlackBackground"></div>
        <div className="topSectionInfoContainer">
          <h1 className="topSectionTitle">Sobre Floransbelleza</h1>
          <h2 className="topSectionText">Conocenos</h2>
        </div>
      </section>
      <div className="container aboutFirstSection">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="col-12 aboutTitleContainer">
              <h2 className="aboutTitle">
                Quienes
                <br></br>
                <span className="dividerAbout">somos</span>
              </h2>
              <p className="aboutHomeParagraph">
                Hola a todos! Somos Melina y Milagros. Como sabemos que la
                belleza no esta centrada unicamente en manos y pies, ampliamos
                servicios tratamientos faciales, depilacion definitiva y body
                up. Nuestro deseo es que pases un momento agradable cuando dejes
                tus manos en las de nuestros profesionales que están altamente
                capacitados para embellecer tus uñas, enseñarte a protegerlas y
                darte tips para cuidados especiales. es un servicio
                estrategicamente pensado para que puedas tener tus manos y pies
                impecables, siempre! Nos preocupamos por la mejor calidad
                brindamos el mejor servicio al cliente. Este enfoque nos
                permitió crecer y crear un equipo increíble apasionado por todo
                lo que hacemos.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img src={firstSectionImage} className="imgAbout"></img>
          </div>
        </div>
      </div>
      <PictureGaleryAbout />
      <Testimonials />
      <Footer />
      <ScrollTopButton offset={200} />
    </div>
  );
}
