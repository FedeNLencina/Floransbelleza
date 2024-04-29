import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  const route = location.pathname;
  const isHome = route === "/";
  console.log("isHome: ", isHome);

  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-white">
      <div class="container-fluid divNav ">
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
          class="offcanvas offcanvas-end divLinks"
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
          <div class="offcanvas-body linksContainer">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li
                class="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/" className="navLink">
                  Home
                </Link>
              </li>

              <li
                class="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/about" className="navLink">
                  About
                </Link>
              </li>

              <li
                class="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/servicios" className="navLink">
                  Servicios
                </Link>
              </li>
              <li
                class="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/talleres" className="navLink">
                  Talleres
                </Link>
              </li>
              {isHome && (
                <li
                  class="nav-item"
                  aria-current="page"
                  data-bs-toggle="offcanvas"
                >
                  <a href="#contacto" className="navLink">
                    {" "}
                    Contacto
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
