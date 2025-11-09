import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="text-center my-5">
      <h1
        className="fw-bold mb-4"
        style={{
          color: "#6d4c41",
          fontFamily: "'Noto Serif', 'Merriweather', serif",
          letterSpacing: "1px",
        }}
      >
        About Dudjom Tersar Foundation
      </h1>

      <p
        className="lead mx-auto mb-5"
        style={{
          maxWidth: "700px",
          color: "#795548",
          fontFamily: "'Noto Serif', 'Merriweather', serif",
          lineHeight: "1.8",
        }}
      >
        The Dudjom Tersar Foundation is dedicated to preserving and transmitting
        the sacred teachings of the Dudjom Tersar lineage of the Nyingma
        tradition of Tibetan Buddhism. Through study, meditation, and community
        activities, we aspire to cultivate wisdom and compassion for the benefit
        of all beings.
      </p>

      <div
        className="card border-0 shadow-sm mx-auto text-start"
        style={{
          maxWidth: "600px",
          backgroundColor: "#fffde7",
          borderRadius: "10px",
          fontFamily: "'Noto Serif', 'Merriweather', serif",
        }}
      >
        <div className="card-body p-4">
          <h4
            className="fw-semibold mb-3 text-center"
            style={{ color: "#6d4c41" }}
          >
            Foundation Details
          </h4>

          <ul
            className="list-unstyled mb-0"
            style={{ color: "#5d4037", lineHeight: "1.8" }}
          >
            <li>
              <strong>Chairman:</strong> Ven. Lama Pema Dorje Rinpoche
            </li>
            <li>
              <strong>Headquarters:</strong> Boudhanath, Kathmandu, Nepal
            </li>
            <li>
              <strong>Founded:</strong> 1992
            </li>
            <li>
              <strong>Mission:</strong> To uphold the Dudjom Tersar teachings
              and support practitioners through retreats, publications, and
              Dharma education.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <h5
          className="fw-semibold mb-3"
          style={{ color: "#6d4c41", fontFamily: "'Noto Serif', 'Merriweather', serif" }}
        >
          Connect With Us
        </h5>

        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://www.facebook.com/dudjomtersar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            style={{ color: "#3b5998" }}
          >
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a
            href="https://www.instagram.com/dudjomtersar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            style={{ color: "#d81b60" }}
          >
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a
            href="https://twitter.com/dudjomtersar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            style={{ color: "#1da1f2" }}
          >
            <i className="bi bi-twitter fs-4"></i>
          </a>
          <a
            href="mailto:info@dudjomtersarfoundation.org"
            className="text-decoration-none"
            style={{ color: "#795548" }}
          >
            <i className="bi bi-envelope fs-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div
      className="container min-vh-100 d-flex flex-column"
      style={{
        background: "linear-gradient(160deg, #fff8e1, #fbe9e7)",
        fontFamily: "'Noto Serif', 'Merriweather', serif",
        color: "#5d4037",
      }}
    >
      <Nav />
      <div className="container my-auto py-5">
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default About;
