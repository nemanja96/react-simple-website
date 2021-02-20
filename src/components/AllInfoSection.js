import React from "react";
import "./AllInfoSection.css";
import InfoSection from "./InfoSection";

function AllInfoSection() {
  return (
    <div className="all-section">
      <div className="all-section-container">
        <InfoSection
          subtitle="Teamwork"
          title="Our team is our strength"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          btn="Get Started"
        />
        <div className="all-section-img">
          <img src="img/02.jpg" />
        </div>
      </div>
      <div className="all-section-container">
        <div className="all-section-img">
          <img src="img/03.jpg" />
        </div>
        <InfoSection
          subtitle="Workflow"
          title="Produce more. Agonize less"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          btn="Get Started"
        />
      </div>
      <div className="all-section-container">
        <InfoSection
          subtitle="Intelligence"
          title="Every second counts, so every detail matters"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          btn="Get Started"
        />
        <div className="all-section-img">
          <img src="img/04.jpg" />
        </div>
      </div>
    </div>
  );
}

export default AllInfoSection;
