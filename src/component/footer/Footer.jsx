import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h5>START A PROJECT</h5>
            <p>We are ready for the challenge</p>
            <p> adobexd@mail.com</p>
          </div>
          <div className="col-lg-3">
            <h5>SAY HELLO</h5>
            <p>497 Evergreen Rd. Roseville, CA 95673 </p>
            <p>+44 345 678 903</p>
          </div>
          <div className="col-lg-3">
            <h5>Subscribe to Astro via Email</h5>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </p>
            <div className="d-flex">
              <input
                className="rounded p-2"
                type="email"
                placeholder="Email Address"
              />
              <button type="button" className="btn footer-btn py-2 ms-3">
                <Link
                  className="footer-btn-link btn-link text-decoration-none text-light text-uppercase navList-color sm-shadow text-center px-3"
                  to="/SignUp"
                >
                  SUBSCRIBE
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <ul className="d-flex list-unstyled justify-content-end">
              <li className="px-2 fs-3">
                <FontAwesomeIcon icon={faGithub} />
              </li>
              <li className="px-2 fs-3">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className="px-2 fs-3">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
