import React from "react";
import "./contact.css";
import { InstagramFeed } from "@components/home/instagramFeed/InstagramFeed";
import { WhatsAppButton } from "./whatssapButton/WhatssapButton";

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
      <div className="container-fluid contactFirstSection">
        <div className="row contactFirstSectionRow d-flex justify-content-center">
          <div className="col-lg-6 col-12 instagramFeedContainer">
            <InstagramFeed />
          </div>
          <div className="col-lg-6 col-12 mapContactContainer d-flex justify-content-center align-items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.96345481999!2d-58.68292882339613!3d-34.503810752230315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd64a75e6e0d%3A0xaa3599eea6b7e33e!2sFloran&#39;s%20Belleza!5e0!3m2!1ses!2sar!4v1714093218420!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
              className="mapContact"
            ></iframe>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      {/* <ScrollTopButton offset={200} /> */}
    </div>
  );
}
