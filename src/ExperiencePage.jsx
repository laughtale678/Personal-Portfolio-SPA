import "./ExperiencePage.css";
import Button from "./Button";
import { useState } from "react";

function ExperiencePage() {
  const [content, setContent] = useState("education");

  function Education() {
    return (
      <>
        <div className="education">
          <p className="experience__title">
            Northeastern University|Seattle, WA
          </p>
          <br />
          <p>Master of Science in Computer Software Engineering</p>
          <br />
          <p>2023.01 - Expected 2025.05</p>
          <br />
          <p>
            Relevant Courses: Application Modeling and Design(Java),
            Introduction to Python, Application Engineering and
            Development(Java), Web Design and User Experience Engineering,
            Program Structure and Algorithms, Web Development Tools and Methods.
          </p>
          <br />
          <p>
          Certifications: AWS Certified Cloud Practitioner
          </p>
        </div>
        <div className="education">
          <p className="experience__title">
            Nanjing Audit University|Nanjing, China
          </p>
          <br />
          <p>Bachelor of Science in Economics</p>
        </div>
      </>
    );
  }

  function Work() {
    return (
      <>
        <div className="work">
          <p className="experience__title">
            Jiangsu Jiangnan Rural Commercial Bank
          </p>
          <br />
          <p>Product Manager</p>
          <br />
          <p>2021.06 - 2022.12</p>
          <br />
          <ul className="job-content">
            <li>
              Managed software development lifecycle ( SDLC ) within an agile
              team in the role of a Product Owner.
            </li>
            <li>
              Delivered a credit management platform reconstruction project with
              100+ team members, achieving a 50% reduction in manual work and an
              increase of 60% in productivity.
            </li>
            <li>
              Translated business requirements into user stories and UI/UX by
              collaborating with cross-functional teams.
            </li>
            <li>
              Tested and debugged features with the QA team to troubleshoot
              issues, ensuring the delivery of high-quality software.
            </li>
          </ul>
        </div>
        <div className="work">
          <p className="experience__title">
            Jiangsu Jiangnan Rural Commercial Bank
          </p>
          <p>Customer Manager</p>
          <p>2016.01-2021.05</p>
        </div>
      </>
    );
  }

  return (
    <div className="experience">
      <h1 className="experience__title">Experience</h1>
      <div className="experience__main">
        <div className="experience__tab" aria-label="tablist">
          <Button
            aria="educationTab"
            className={`experience__button ${
              content === "education" ? "active" : ""
            }`}
            onClick={() => setContent("education")}
          >
            <div className="button-content">
              <img
                src="education.png"
                alt="Education icon"
                className="experience__icon"
              />
              <h3>Education</h3>
            </div>
          </Button>
          <Button
            aria="workTab"
            className={`experience__button ${
              content === "work" ? "active" : ""
            }`}
            onClick={() => setContent("work")}
          >
            <div className="button-content">
              <img
                src="experience.png"
                alt="Work icon"
                className="experience__icon"
              />
              <h3>Work</h3>
            </div>
          </Button>
        </div>
        <div className="experience__container">
          {content == "education" && <Education />}
          {content == "work" && <Work />}
        </div>
      </div>
    </div>
  );
}
export default ExperiencePage;
