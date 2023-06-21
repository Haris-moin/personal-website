import React, { forwardRef } from "react";
import { ABOUT_DESCRIPTION, SKILLS } from "../../utils/constant";
import "./style.css";
import Skills from "../skills";

const About = ({ scrollDown }, ref) => {
  return (
    <>
      <div id="about" className="about-container">
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
              <button
                className="contact-button"
                onClick={() => {
                  scrollDown(ref);
                }}
              >
                Contact
              </button>
            </div>
          </div>
          <div className="skills-section">
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(About);
