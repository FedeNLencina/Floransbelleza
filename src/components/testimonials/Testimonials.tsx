import React from "react";
import "./testimonials.css";
import { testimonials } from "../../utils/testimonials";

export function Testimonials() {
  return (
    <div className="testimonialsContainer">
      <div className="text-center testimonialsTitleContainer">
        <h1 className="testimonialsTitle">Nuestros testimionios</h1>
      </div>
      <div className="container">
        <div id="demo" className="carousel slide" data-bs-ride="true">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => {
              return (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="carousel-caption carouselContentContainer">
                    <p>{testimonial.description}</p>

                    <div id="image-caption">{testimonial.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            className="carousel-control-prev"
            data-bs-target="#demo"
            data-bs-slide="prev"
            href="#demo"
            role="button"
            data-slide="prev"
          >
            <i className="fas fa-arrow-left"></i>
          </a>
          <a
            className="carousel-control-next"
            data-bs-target="#demo"
            data-bs-slide="next"
            href="#demo"
            role="button"
            data-slide="next"
          >
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
