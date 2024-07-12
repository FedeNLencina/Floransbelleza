import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isAboutPath = currentPath === "/about";
  console.log("location: ", location);
  console.log("current path: ", currentPath);
  console.log("isAboutPath: ", isAboutPath);
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-white">
      <div className="container-fluid divNav ">
        <img src={Logo} alt="logo" className="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end divLinks"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <img
              src={Logo}
              alt="logo"
              className="logo offcanvas-title"
              id="offcanvasNavbarLabel"
            />
            <button
              type="button"
              className="btn-close offcanvas-title"
              id="offcanvasNavbarLabel"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body linksContainer">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li
                className="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/" className="navLink">
                  Home
                </Link>
              </li>

              <li
                className="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/about" className="navLink">
                  About
                </Link>
              </li>

              <li
                className="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/servicios" className="navLink">
                  Servicios
                </Link>
              </li>
              <li
                className="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/talleres" className="navLink">
                  Talleres
                </Link>
              </li>
              <li
                className="nav-item"
                aria-current="page"
                data-bs-toggle="offcanvas"
              >
                <Link to="/contacto" className="navLink">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
