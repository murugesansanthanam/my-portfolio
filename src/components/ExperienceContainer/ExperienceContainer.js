import React from "react";
import Experience from "../ExperienceBox/Experience";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <div className="experienceContainer" id="experience">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <Experience number="E-commerce Analyst" title="2+ Years Experience" />
        <Experience
          number="MERN Full-Stack Developer"
          title="8+ Months experience in MERN full stack course."
        />
      </div>
    </div>
  );
};

export default ExperienceContainer;
