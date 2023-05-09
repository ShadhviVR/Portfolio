import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        
        {/* CONTENT 1 */}
        <Slide direction="left" triggerOnce>
          <div className="contact__content">
            <h3 className="section__title">Contact Me</h3> <br /><br />
            {/* CARD 1 */}
            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send conact__card-icon"></i>
                <h3 className="conact__card-title">Email</h3>
                <span className="contact__card-data">
                  v.r.shadhvi@gmail.com
                </span>
                <a
                  href="mailto:v.r.shadhvi@gmail.com"
                  target="_blank"
                  className="contact__button"
                  rel="noreferrer"
                >
                  Send a message{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div> <br />
              {/* CARD 2 */}
              <div className="contact__info">
                <div className="contact__card">
                  <i className="bx bxl-linkedin conact__card-icon"></i>
                  <h3 className="conact__card-title">Linkedin</h3>
                  <span className="contact__card-data">Shadhvi VEHEYSANA RAMADOSS</span>
                  <a
                    href="https://www.linkedin.com/in/shadhvi-ramadoss/"
                    className="contact__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Send a message{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
