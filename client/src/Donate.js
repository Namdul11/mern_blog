import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Donate = () => {
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

      <div className="text-center my-auto py-5">
        <h1
          className="fw-bold mb-4"
          style={{
            color: "#6d4c41",
            letterSpacing: "1px",
          }}
        >
          Dana – The Joy of Giving
        </h1>

        <p
          className="lead mx-auto mb-5"
          style={{
            maxWidth: "600px",
            color: "#795548",
            lineHeight: "1.8",
          }}
        >
          In the spirit of generosity, your offering supports the continuation
          of the Dhamma and the well-being of all beings. May your act of giving
          bring peace and merit.
        </p>

        <div
          className="card border-0 shadow-sm mx-auto"
          style={{
            maxWidth: "400px",
            backgroundColor: "#fffde7",
            borderRadius: "10px",
          }}
        >
          <div className="card-body p-4">
            <h5
              className="mb-3 fw-semibold"
              style={{ color: "#6d4c41" }}
            >
              Donate via:
            </h5>

            <a
              href="https://paypal.me/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-100 py-2 fw-semibold"
              style={{
                backgroundColor: "#a1887f",
                color: "white",
                borderRadius: "6px",
              }}
            >
              <i className="bi bi-paypal me-2"></i>
              PayPal
            </a>

            <p
              className="small mt-4 mb-0"
              style={{ color: "#8d6e63" }}
            >
              For other donation options, please contact{" "}
              <a
                href="mailto:donations@temple.org"
                style={{ color: "#6d4c41", textDecoration: "underline" }}
              >
                donations@temple.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Donate;
