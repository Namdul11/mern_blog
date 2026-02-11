import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./css/App.css"; // Keep your general styling here

const Body = () => {
  return (
    <div className="text-center my-5">
      <h1
        className="fw-bold mb-3"
        style={{
          color: "#6d4c41",
          fontFamily: "'Noto Serif', 'Merriweather', serif",
          letterSpacing: "1px",
        }}
      >
        Dudjom Tersar Homepage
      </h1>
      <p
        className="lead mx-auto"
        style={{
          maxWidth: "650px",
          color: "#795548",
          fontFamily: "'Noto Serif', 'Merriweather', serif",
          lineHeight: "1.8",
        }}
      >
        Welcome to the Dudjom Tersar community — a sacred space dedicated to
        preserving and practicing the profound teachings of the Nyingma lineage.
        May this site serve as a source of wisdom, compassion, and inner peace.
      </p>
    </div>
  );
};

const Section = ({ title, text }) => (
  <div
    className="py-5 text-center"
    style={{
      backgroundColor: "#fffde7",
      marginBottom: "2rem",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    }}
  >
    <div className="container">
      <h3
        className="fw-semibold mb-3"
        style={{
          color: "#6d4c41",
          fontFamily: "'Noto Serif', 'Merriweather', serif",
        }}
      >
        {title}
      </h3>
      <p
        className="mx-auto"
        style={{
          maxWidth: "700px",
          color: "#8d6e63",
          fontFamily: "'Noto Serif', 'Merriweather', serif",
          lineHeight: "1.7",
        }}
      >
        {text}
      </p>
    </div>
  </div>
);

const App = () => {
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

        {/* Filler content sections */}
        <Section
          title="About the Lineage"
          text="The Dudjom Tersar is the collection of revealed teachings (termas) of His Holiness Dudjom Rinpoche, a great master and tertön of the Nyingma school of Tibetan Buddhism. These teachings embody a direct expression of wisdom mind, leading practitioners toward realization and compassion."
        />

        <Section
          title="Upcoming Programs"
          text="Join our online and in-person gatherings with esteemed lamas and instructors. Together we explore the heart essence of the Vajrayana path, integrating ancient wisdom into modern life."
        />

        <Section
          title="Community and Practice"
          text="Our sangha is dedicated to cultivating mindfulness, compassion, and awareness through regular meditation sessions, study programs, and collaborative practice retreats."
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
