import React from "react";
import { Button, Tag } from "antd";
import { ABOUT_DESCRIPTION, SKILLS } from "../../utils/constant";
import "./style.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="main-heading">
          <h1>ABOUT ME</h1>
          <span className="bottom-border"></span>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="about-details">
          <div className="about-description-container">
            <div className="about-description-heading">
              <h1>Get to know me!</h1>
            </div>
            <div className="about-description">{ABOUT_DESCRIPTION}</div>

            <div className="contact-button-container">
              <button className="contact-button">Contact</button>
            </div>
          </div>
          <div className="skills-conatiner">
            <div className="skills-heading">
              <h1>My Skills</h1>
            </div>
            <div className="skills">
              {SKILLS.map(({ key, value }) => (
                <div key={key} className="skill">
                  <Tag color="lightgrey" className="tag">
                    {" "}
                    {value}
                  </Tag>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
