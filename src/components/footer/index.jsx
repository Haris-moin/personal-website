import React, { useEffect, useState } from "react";
import { HOME_CONTENT } from "../../utils/constant";
import "./style.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);
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
        <div className="made-by">
          <p>&copy; {currentYear} Muhammad Haris Moin. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
