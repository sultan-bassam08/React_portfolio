import React from "react";
import { Animate } from "react-simple-animate";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "./styles.scss";
import MyPdf from '../../resume/SULTAN B BKERAT-CV.pdf';

const Home = () => {
  function handleNavigateLinkedin() {
    window.open(
      "https://www.linkedin.com/in/sultan-b-bkerat-98b1b6199/",
      "_blank"
    );
  }
  function handleNavigateGithub() {
    window.open(
      "https://github.com/sultan-bassam08/desktop-tutorial/",
      "_blank"
    );
  }
  function handleNavigateInsta() {
    window.open(
      "https://www.instagram.com/",
      "_blank"
    );
  }
  function handleNavigateFacebook() {
    window.open(
      "https://www.facebook.com/",
      "_blank"
    );
  }
  function handleNavigateGmail() {
    window.open(
      "https://mail.google.com/",
      "_blank"
    );
  }

    

  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hi, I'm Sultan Bkerat
          <br />
          FullStack Developer && Business analyst
        </h1>
      </div>
      <Animate
        play
        duration={2}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <a href={MyPdf} download="SULTAN B BKERAT-CV.pdf">Download resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <FaLinkedin onClick={handleNavigateLinkedin} size={32} />
            <br />
            <FaGithub onClick={handleNavigateGithub} size={32} />
            <br />
            <FaInstagram onClick={handleNavigateInsta} size={32} />
            <br />
            <FaFacebook onClick={handleNavigateFacebook} size={32} />
            <br />
            <FaEnvelope onClick={handleNavigateGmail} size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
