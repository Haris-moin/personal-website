import React, { forwardRef } from "react";
import "./style.css";
import ExperienceCard from "../experience-card";
import { EXPERIENCES } from "../../utils/constant";

function Experience(props, ref) {
  return (
    <>
      <div ref={ref} className="exp-container">
        <div className="main-heading">
          <h1>EXPERIENCE</h1>
          <span className="bottom-border"></span>
          <p>
            Here you will find information about my experience, what I do, and
            my current skills mostly in terms of programming and technology
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
      </div>
    </>
  );
}

export default forwardRef(Experience);
