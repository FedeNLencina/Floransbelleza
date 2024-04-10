import React from "react";
import aboutImage from "../../../assets/images/about/Screenshot_298.png";
import "./aboutHome.css";
import { useWindowDimensions } from "src/hooks/useWindowDimention";

export function AboutHome() {
  const { isMobile, isDesktop } = useWindowDimensions();
  return (
    <div className="container aboutHomeContainer">
      <div className="row">
        {isDesktop && (
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center imgAboutHomeContainer">
            <img src={aboutImage} className="imgAboutHome"></img>
          </div>
        )}

        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
          <div className="col-10 aboutHomeTitleContainer">
            <h2 className="aboutHomeTitle">
              Quienes
              <br></br>
              <span className="dividerAboutHome">somos</span>
            </h2>
            <p className="aboutHomeParagraph">
              Comenzamos como un pequeño salón de manicuria en Villa de Mayo,
              ofrecieron los mejores servicios personalizados de manicuria y
              pestañas. Como sabemos que la belleza no esta centrada unicamente
              en manos y pies, ampliamos servicios tratamientos faciales,
              depilacion definitiva y body up. Nuestro deseo es que pases un
              momento agradable cuando dejes tus manos en las de nuestros
              profesionales que están altamente capacitados para embellecer tus
              uñas, enseñarte a protegerlas y darte tips para cuidados
              especiales. es un servicio estrategicamente pensado para que
              puedas tener tus manos y pies impecables, siempre! Nos preocupamos
              por la mejor calidad brindamos el mejor servicio al cliente. Este
              enfoque nos permitió crecer y crear un equipo increíble apasionado
              por todo lo que hacemos.
            </p>
          </div>
        </div>

        {isMobile && (
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center imgAboutHomeContainer">
            <img src={aboutImage} className="imgAboutHome"></img>
          </div>
        )}
      </div>
    </div>
  );
}
