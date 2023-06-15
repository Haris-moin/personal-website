import React from "react";
import { HOME_CONTENT, SOCIALS_LINKS } from "../../utils/constant";
import "./style.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <div className="home-socials-container">
            <div className="home-socials">
              <div className="home-social">
                <a
                  href={SOCIALS_LINKS.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src="assets/linkedin-dark.svg" alt="" />
                </a>
              </div>
              <div className="home-social">
                <a href={SOCIALS_LINKS.github} rel="noreferrer" target="_blank">
                  <img src="assets/github-dark.svg" alt="" />
                </a>
              </div>
              <div className="home-social">
                <a
                  href={SOCIALS_LINKS.twitter}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="social-img"
                    src="assets/twitter-dark.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="home-social">
                <a
                  href={SOCIALS_LINKS.facebook}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="social-img"
                    src="assets/facebook-dark.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="home-content">
            <div className="home-content-heading">
              <h1>{HOME_CONTENT.heading}</h1>
              <span className="bottom-border"></span>
            </div>
            <div className="home-content-desc">
              <p>{HOME_CONTENT.description}</p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="experience-button">Experience</button>
        </div>
        <div className="home-hero-mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
