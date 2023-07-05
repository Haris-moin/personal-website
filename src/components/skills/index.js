import React from "react";
import { SKILLS } from "../../utils/constant";
import "./style.css";

function Skills() {
  return (
    <div className="skills-conatiner">
      <div className="skills-heading">
        <h1>My Skills</h1>
      </div>
      <div className="skills">
        {SKILLS.map(({ key, value, url }) => (
          <div key={key} className="skill">
            <img src={url} alt={key} />
            <div className="skill-name">{value}</div>
            {/* <Tag color="lightgrey" className="tag">
          {value}
        </Tag> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
