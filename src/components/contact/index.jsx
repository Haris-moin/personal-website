import React, { forwardRef } from "react";
import "./style.css";
import { CONTACT_DESCRIPTION, CONTACT_LINKS } from "../../utils/constant";

const Contact = (props, ref) => {
  return (
    <>
      <div id="contact" className="contact-container" ref={ref}>
        <div className="contact-content">
          <div className="contact-content-heading">
            <div className="contact-heading">
              <h1>Contact</h1>
            </div>
            <span className="bottom-border"></span>
          </div>
          <div className="contact-content-desc">
            <p>{CONTACT_DESCRIPTION}</p>
          </div>
          <div className="contact-links">
            {CONTACT_LINKS.map((s) => {
              return (
                <div key={s.title} className="contact-link">
                  <a href={s.value}>
                    <img src={s.icon} alt="" />
                    <h4>{s.title}</h4>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Contact);
