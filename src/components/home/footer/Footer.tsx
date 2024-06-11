import React from "react";
import "./footer.css";
import { useWindowDimensions } from "src/hooks/useWindowDimention";

export function Footer() {
  const { isMobile, isDesktop } = useWindowDimensions();
  return (
    <div className="container-fluid footerContainer" id="contacto">
      <div className="container">
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
      </div>
      <div className="d-flex justify-content-around termsText">
        <div className="text-dark">
          © 2022 Floransbelleza. All Rights Reserved
        </div>
        <div className="text-dark">Privacy Policy Terms & Conditions</div>
        {isDesktop && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="waveDesktop"
          >
            <path
              fill="#ffa07a"
              fill-opacity="0.4"
              d="M0,192L120,202.7C240,213,480,235,720,240C960,245,1200,235,1320,229.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        )}
        {isMobile && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="waveMobile"
          >
            <path
              fill="#ffa07a"
              fill-opacity="0.4"
              d="M0,64L60,85.3C120,107,240,149,360,165.3C480,181,600,171,720,154.7C840,139,960,117,1080,122.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
}
