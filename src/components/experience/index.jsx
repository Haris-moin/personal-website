import React, { forwardRef } from "react";
import "./style.css";
import ExperienceCard from "../experience-card";
import { EXPERIENCES, REUME_URL } from "../../utils/constant";

function Experience(props, ref) {
  return (
    <>
      <div id="experience" ref={ref} className="exp-container">
        <div className="main-heading">
          <h1>EXPERIENCE</h1>
          <span className="bottom-border"></span>
          <p>
            My Story of Growth: Experience, Expertise, and Proficiency in
            Programming and Technology
          </p>
        </div>
        <div className="exp-list-container">
          <div className="experience-card-list">
            {EXPERIENCES.map((e, i) => (
              <div key={i}>
                <ExperienceCard experience={e} />
              </div>
            ))}
          </div>
        </div>
        <div className="btn-container">
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="resume-button"
            href={REUME_URL}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default forwardRef(Experience);
