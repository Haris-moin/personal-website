import { Card, Divider, Space } from "antd";
import React from "react";
import "./style.css";

function ExperienceCard({ experience }) {
  return (
    <div className="experience-card-container">
      <Card title={experience.title} className="experience-card">
        <div className="experience-org">
          <h2 className="org">{experience.organization}</h2>
          <div className="experience-count">
            <span>{experience.startDate}</span> to
            <span> {experience.endDate}</span>
          </div>
        </div>
        <Divider />
        <div className="tech-info">
          <h4 className="experience-tech">Technology :</h4>

          <ul className="experience-list">
            {experience.technology.map((t) => (
              <li key={t.key}>{t.value}, </li>
            ))}
          </ul>
        </div>
        <Divider />
        <div className="resp-info">
          <h4>Responsibilities :</h4>
          <ul>
            {experience.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default ExperienceCard;
