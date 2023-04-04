import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <img src={Logo} alt="logo" className="logo" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <img
              src={Logo}
              alt="logo"
              className="logo offcanvas-title"
              id="offcanvasNavbarLabel"
            />
            <button
              type="button"
              class="btn-close offcanvas-title"
              id="offcanvasNavbarLabel"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li
                class="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/">Home</Link>
              </li>

              <li
                class="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/about">About</Link>
              </li>

              <li
                class="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/servicios">Servicios</Link>
              </li>
              <li
                class="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
