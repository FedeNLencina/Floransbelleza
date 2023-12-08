import React from "react";
import "./testimonials.css";
import { testimonials } from "../../services/testimonials";

export function Testimonials() {
  return (
    <div class="testimonialsContainer">
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
            {/* <div class="carousel-caption">
              <p>
                If Shai Reznik's TDD videos don't convince you to add automated
                testing your code, I don't know what will.This was the very best
                explanation of frameworks for brginners that I've ever seen.
              </p>
              <img src="https://i.imgur.com/lE89Aey.jpg" />
              <div id="image-caption">Nick Doe</div>
            </div> */}

            {/* <div class="carousel-item ">
              <div class="carousel-caption">
                <p>
                  If Shai Reznik's TDD videos don't convince you to add
                  automated testing your code, I don't know what will.This was
                  the very best explanation of frameworks for brginners that
                  I've ever seen.
                </p>
                <img src="https://i.imgur.com/QptVdsp.jpg" class="img-fluid" />
                <div id="image-caption">Cromption Greves</div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-caption">
                <p>
                  If Shai Reznik's TDD videos don't convince you to add
                  automated testing your code, I don't know what will.This was
                  the very best explanation of frameworks for brginners that
                  I've ever seen.
                </p>
                <img src="https://i.imgur.com/jQWThIn.jpg" class="img-fluid" />
                <div id="image-caption">Harry Mon</div>
              </div>
            </div> */}
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
