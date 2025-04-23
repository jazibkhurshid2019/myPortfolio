import React from "react";
import "./skills.css";

function SkillsBar() {
  return (
    <div className="container">
      <div className="skill-box">
        <span className="title">ReactJS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">NextJS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">95%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">CSS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">JavaScript</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">95%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">NodeJS</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">ExpressJS</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillsBar;
