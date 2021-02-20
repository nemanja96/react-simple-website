import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items company-description">
            <h2>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div class="footer-link-items">
            <h2>Our Services</h2>
            <Link to="/">Pricing</Link>
            <Link to="/">Tracking</Link>
            <Link to="/">Terms of services</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Our Company</h2>
            <Link to="/">Reporting</Link>
            <Link to="/">Get in Touch</Link>
            <Link to="/">Management</Link>
          </div>
          <div className="footer-link-items address">
            <h2>Address</h2>
            <p>123 King St,</p>
            <p>VC3000, US</p>
            <p>888-123-234567</p>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src="./img/logo.png" />
            </Link>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              aria-label="Facebook"
            >
              <img src="img/facebook.png" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              aria-label="Linkedin"
            >
              <img src="img/linkedin.png" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              aria-label="Youtube"
            >
              <img src="img/youtube.png" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              aria-label="Twitter"
            >
              <img src="img/twitter.png" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
