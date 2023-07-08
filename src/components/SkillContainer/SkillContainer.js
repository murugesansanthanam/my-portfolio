import React from "react";
import { Element } from "react-scroll";
import "./SkillContainer.css";
import Image from "../../assets/image-6.jpg";
import LinearProgress from "@material-ui/core/LinearProgress";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
        <img src={Image} alt="" />
      </div>
      <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillSet">
          <h5>HTML</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h5>CSS</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h5>JavaScript</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h5>Bootstrap</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h5>React JS</h5>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h5>Node JS</h5>
          <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h5>Express JS</h5>
          <div className="skillContainer__slider skillContainer__slider7">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h5>Mongo DB</h5>
          <div className="skillContainer__slider skillContainer__slider8">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
