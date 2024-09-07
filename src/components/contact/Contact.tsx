import React from "react";
import "./contact.css";
import { ScrollTopButton } from "@components/home/scrollTopButton/ScrollTopButton";

export default function Contact() {
  return (
    <div className="container-fluid contactContainer">
      <section className="topSection">
        <div className="topSectionBlackBackground"></div>
        <div className="topSectionInfoContainer">
          <h1 className="topSectionTitle">Comenza tu cambio!</h1>
          <h2 className="topSectionText">Conocenos</h2>
        </div>
      </section>
      <div className="container contactFirstSection">
        <div className="row">
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6 "></div>
        </div>
      </div>
      <ScrollTopButton offset={200} />
    </div>
  );
}
