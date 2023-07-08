import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1>Mr. Murugesan Santhanam</h1>
        <p>A professional MERN-Full Stack Developer</p>
        <a href="https://drive.google.com/file/d/1pA4Q1At3T6VIqpOByiGbbWrkYiPG1KJn/view?usp=drive_link">
          <button className="topContent__downloadButton">
            Download Resume
          </button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workButton">My Work </button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
