import React from "react";
import { HOME_CONTENT } from "../../utils/constant";
import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content-container">
          <div className="footer-content">
            <div className="info">
              <h2>Muhammad Haris Moin</h2>
              <p>{HOME_CONTENT.description}</p>
            </div>
          </div>
        </div>
        <di className="made-by">
          <p>© Copyright 2023. Made by MUHAMMAD HARIS MOIN</p>
        </di>
      </div>
    </>
  );
};

export default Footer;
