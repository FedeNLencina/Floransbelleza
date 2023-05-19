import React from "react";
import aboutImage from "../../assets/images/about/Screenshot_298.png";
import "./aboutHome.css";

export function AboutHome() {
  return (
    <div className="container aboutHomeContainer">
      <div className="row">
        <div className="col-6 d-flex justify-content-center align-items-center imgAboutHomeContainer">
          <img src={aboutImage} className="imgAboutHome"></img>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="col-10 aboutHomeTitleContainer">
            <h2 className="aboutHomeTitle">
              Nuestra
              <br></br>
              <span className="dividerAboutHome">historia</span>
            </h2>
            <p>
              Comenzamos como un pequeño salón de spa en Islington, Londres.
              Nuestra idea principal era crear el mejor salón de spa del mundo.
              ¿Puede haber compromisos en el mejor salón del mundo? Nuestra
              respuesta siempre es no, nos preocupamos por la mejor calidad,
              contratamos a los mejores especialistas y brindamos el mejor
              servicio al cliente. Este enfoque nos permitió crecer y crear un
              equipo increíble apasionado por todo lo que hacemos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
