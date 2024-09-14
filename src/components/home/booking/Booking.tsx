import React from "react";
import "./booking.css";

export function Booking() {
  return (
    <div
      className="bookingContainer w-100"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="blackBackground"></div>
      <div className="container d-flex flex-column justify-content-center">
        <div className="bookingContentContainer text-center">
          <h2 className="bookingTitle">Reserva tu turno online</h2>
          <p className="bookingParagraph">
            En nuestra agenda online se encuentran nuestros servicios y
            disponibilidad de los mismos. No te quedes sin tu turno!
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <a
            href="https://www.tuturno.io/floransbelleza"
            target="_blank"
            className="btn bookingButton"
          >
            Reserva online
          </a>
        </div>
      </div>
    </div>
  );
}
