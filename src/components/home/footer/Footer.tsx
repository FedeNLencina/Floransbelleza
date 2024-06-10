import React from "react";
import "./footer.css";

export function Footer() {
  return (
    <div className="container footerContainer" id="contacto">
      <div className="row">
        <div className="col-8 col-lg-4">
          <div className="footerContacts mb-30">
            <h5 className="h5-md">Location</h5>
            <p className="">Floransbelleza</p>
            <p className="addressText">Remedios de escalada 2193 </p>
            <p className="addressText">Villa de mayo </p>
          </div>
        </div>
        <div className="col-4 col-lg-4">
          <div className="footerContacts mb-30">
            <h5 className="h5-md">Contacts</h5>
            <div className="contactIconsContainer d-flex justify-content-start">
              <a
                href="https://www.instagram.com/floransbelleza/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram contactIcon"></i>
              </a>
              <a href="https://wa.link/0w0a34" target="_blank">
                <i className="fa-brands fa-whatsapp contactIcon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.96345481999!2d-58.68292882339613!3d-34.503810752230315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd64a75e6e0d%3A0xaa3599eea6b7e33e!2sFloran&#39;s%20Belleza!5e0!3m2!1ses!2sar!4v1714093218420!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
      <div className="d-flex justify-content-between termsText">
        <div className="">© 2022 Floransbelleza. All Rights Reserved</div>
        <div className="">Privacy Policy Terms & Conditions</div>
      </div>
    </div>
  );
}
