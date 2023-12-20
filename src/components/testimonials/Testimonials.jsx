import React from "react";
import "./testimonials.css";
import { testimonials } from "../../utils/testimonials";

export function Testimonials() {
  return (
    <div class="testimonialsContainer">
      <div class="text-center testimonialsTitleContainer">
        <h1 class="testimonialsTitle">Nuestros testimionios</h1>
      </div>
      <div class="container">
        <div id="demo" class="carousel slide" data-bs-ride="true">
          <div class="carousel-inner">
            {testimonials.map((testimonial, index) => {
              return (
                <div
                  key={index}
                  class={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div class="carousel-caption carouselContentContainer">
                    <p>{testimonial.description}</p>

                    <div id="image-caption">{testimonial.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            class="carousel-control-prev"
            data-bs-target="#demo"
            data-bs-slide="prev"
            href="#demo"
            role="button"
            data-slide="prev"
          >
            <i class="fas fa-arrow-left"></i>
          </a>
          <a
            class="carousel-control-next"
            data-bs-target="#demo"
            data-bs-slide="next"
            href="#demo"
            role="button"
            data-slide="next"
          >
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
