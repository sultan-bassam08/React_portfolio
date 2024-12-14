import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiSpreadsheet } from "react-icons/bi"; // Excel/Spreadsheet style
import { AiOutlineLineChart } from "react-icons/ai"; // Data Analysis chart
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";

import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">Fullstak developer | Busniess Analyst</h3>
            <p>
            I am a passionate Full-Stack Developer and Business Analyst with expertise in designing, developing, and analyzing user-centric applications. Combining my technical skills in frontend and backend development with my ability to translate business needs into actionable solutions, I excel at building efficient and scalable systems. I thrive in collaborative environments and enjoy solving complex problems through innovative solutions that drive business success.
            </p>
            
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent grid-layout">
  <div className="grid-item">
    <BiSpreadsheet size={60} color="var(--selected-theme-main-color)" />
    <p>Data Management</p>
  </div>
  <div className="grid-item">
    <AiOutlineLineChart size={60} color="var(--selected-theme-main-color)" />
    <p>Data Analysis</p>
  </div>
  <div className="grid-item">
    <FaDatabase size={60} color="var(--selected-theme-main-color)" />
    <p>Database Systems</p>
  </div>
  <div className="grid-item">
    <FaDev size={60} color="var(--selected-theme-main-color)" />
    <p>Development</p>
  </div>
</div>

          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
