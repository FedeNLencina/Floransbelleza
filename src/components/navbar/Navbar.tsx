import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo/logo.svg";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isAboutPath = currentPath === "/about";
  const [colorChange, setColorchange] = useState(true);

  const isAboutPathAndIsActive = colorChange && isAboutPath;
  const isAboutPathAndIsInactive = !colorChange && isAboutPath;
  const isNotAboutPathAndIsActive = colorChange && !isAboutPath;

  console.log("isAboutPathAndIsActive:", isAboutPathAndIsActive);
  console.log("isAboutPathAndIsInactive:", isAboutPathAndIsInactive);
  console.log("isNotAboutPathAndIsActive:", isNotAboutPathAndIsActive);

  useEffect(() => {
    const changeNavbarColor = (): void => {
      if (isAboutPath) {
        console.log("entre en current path ");
        setColorchange(false);
        if (window.scrollY >= 20) {
          setColorchange(true);
        } else {
          setColorchange(false);
        }
      } else {
        setColorchange(true);
      }
    };
    console.log("current path: ", currentPath);

    changeNavbarColor();

    window.addEventListener("scroll", changeNavbarColor);

    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, [currentPath]);

  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg ${
        (isAboutPathAndIsActive && !isAboutPathAndIsInactive) ||
        isNotAboutPathAndIsActive
          ? "navActive"
          : "navInactive"
      }`}
    >
      <div className="container-fluid d-flex justify-content-center">
        <div className="divNavInnerContainer d-flex justify-content-center align-items-center">
          <div className="logoContainer">
            <img src={Logo} alt="logo" className="logo" />
          </div>
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
            tabIndex={-1}
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
                  <Link
                    to="/"
                    className={`navLink ${
                      (isAboutPathAndIsActive && !isAboutPathAndIsInactive) ||
                      isNotAboutPathAndIsActive
                        ? "linkActive"
                        : "linkInactive"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li
                  className="nav-item"
                  aria-current="page"
                  data-bs-toggle="offcanvas"
                >
                  <Link
                    to="/about"
                    className={`navLink ${
                      (isAboutPathAndIsActive && !isAboutPathAndIsInactive) ||
                      isNotAboutPathAndIsActive
                        ? "linkActive"
                        : "linkInactive"
                    }`}
                  >
                    About
                  </Link>
                </li>

                <li
                  className="nav-item"
                  aria-current="page"
                  data-bs-toggle="offcanvas"
                >
                  <Link
                    to="/servicios"
                    className={`navLink ${
                      (isAboutPathAndIsActive && !isAboutPathAndIsInactive) ||
                      isNotAboutPathAndIsActive
                        ? "linkActive"
                        : "linkInactive"
                    }`}
                  >
                    Servicios
                  </Link>
                </li>
                <li
                  className="nav-item"
                  aria-current="page"
                  data-bs-toggle="offcanvas"
                >
                  <Link
                    to="/talleres"
                    className={`navLink ${
                      (isAboutPathAndIsActive && !isAboutPathAndIsInactive) ||
                      isNotAboutPathAndIsActive
                        ? "linkActive"
                        : "linkInactive"
                    }`}
                  >
                    Talleres
                  </Link>
                </li>
                <li
                  className="nav-item"
                  aria-current="page"
                  data-bs-toggle="offcanvas"
                >
                  <Link
                    to="/contacto"
                    className={`navLink ${
                      (isAboutPathAndIsActive && !isAboutPathAndIsInactive) ||
                      isNotAboutPathAndIsActive
                        ? "linkActive"
                        : "linkInactive"
                    }`}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
