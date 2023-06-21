import React, { useRef } from "react";
import { HOME_CONTENT, SOCIALS_LINKS } from "../../utils/constant";
import "./style.css";
import About from "../about";
import Contact from "../contact";
import Experience from "../experience";
const Home = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const scrollDown = (ref) => {
    console.log("ref: ", ref);
    window.scrollTo({
      top: ref.current?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div id="home" className="home-container">
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
          <button
            className="experience-button"
            onClick={() => {
              scrollDown(experienceRef);
            }}
          >
            Experience
          </button>
        </div>
        <div className="home-hero-mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </div>
      <div ref={aboutRef} id="about-details">
        <About scrollDown={scrollDown} ref={contactRef} />
      </div>
      <div>
        <Experience ref={experienceRef} />
      </div>
      <div>
        <Contact ref={contactRef} />
      </div>
    </>
  );
};

export default Home;
