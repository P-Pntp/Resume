import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faTelevision } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <div className="resume-page">
      <a name="myResume" />
      <h1 className="header-font">My Resume</h1>
      <div className="resume">
        <div className="space-area">
          <div className="icon-container">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <p className="sub-topic-font">Music</p>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faTelevision} className="icon" />
            <p className="sub-topic-font">Movie, Series</p>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faPuzzlePiece} className="icon" />
            <p className="sub-topic-font">Puzzle game</p>
          </div>
        </div>
        <div className="resume-container">
          <div className="sub-resume-container">
            <h2 className="topic-font">SKILLS</h2>
            <div className="skill">
              <p className="sub-topic-font">TECHNICAL SKILLS:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascrilit</li>
                <li>React</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
            <div className="skill">
              <p className="sub-topic-font">PERSONAL SKILLS:</p>
              <ul>
                <li>Responsibility</li>
                <li>Teamwork</li>
                <li>Organized</li>
                <li>Analytical</li>
                <li>Enthusiasm</li>
              </ul>
            </div>
            <div className="skill">
              <p className="sub-topic-font">LANGUAGE SKILL:</p>
              <ul>
                <li>English (intermediate)</li>
              </ul>
            </div>
          </div>
          <div className="sub-resume-container">
            <h2 className="topic-font">EDUCATION</h2>
            <ul>
              <li className="none-bullet">2012-2018</li>
              <li className="sub-topic-font">
                King Mongkut's University of Technology Thonburi, Bangkok
              </li>
              <li className="none-bullet">
                Bachelor's degree in Mechanical Engineering
              </li>
            </ul>
            <ul>
              <li className="none-bullet">2009-2011</li>
              <li className="sub-topic-font">
                Assumption Suksa School, Bangkok
              </li>
              <li className="none-bullet">Science-Mathematics</li>
            </ul>
          </div>
          <div className="sub-resume-container">
            <h2 className="topic-font">EXPERIENCE</h2>
            <p className="sub-topic-font">Family Business</p>
            <p>General Manager | 2018-2022</p>
            <ul className="none-bullet">
              <li>- Overseeing daily business operations and cashflow</li>
              <li>- Responsible for manpower planning</li>
              <li>
                - Organizing files, preparing documents, and coordinate with
                accountant
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
