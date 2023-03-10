import profileImg from "./image/profilePicture.png";

function Header() {
  return (
    <div className="header-page">
      <a name="header" />
      <div className="header-container">
        <div>
          <img
            className="profile-picture"
            src={profileImg}
            alt="Pantipa's picture"
          />
        </div>
        <div className="sub-header-container">
          <h1 className="header-font">Pantipa Preechaworachot</h1>
          <div className="description-container">
            <div className="description-item">
              <p>
                <span className="sub-topic-font">Born in</span>
                <br />
                Bangkok, Thailand
              </p>
            </div>
            <div className="description-item">
              <p>
                <span className="sub-topic-font">Date of birth</span>
                <br />
                28-10-1993
              </p>
            </div>
          </div>
          <p className="sub-topic-font">
            " High responsibility is what I would describe myself. Also, I am a
            curious person with a passion of learning every single aspect of my
            job and always eager to learn more. "
          </p>
        </div>
      </div>
      <a name="aboutMe" />
      <h1 className="header-font">About Me</h1>
      <div className="about-me-container">
        <div className="space-area"></div>
        <div className="sub-about-me-container">
          <p>
            I graduated with a bachelor's degree in Mechanical Engineering from
            King Mongkut's University of Technology Thonburi. When I studied at
            the university I joined in KMUTT formula students club. I have been
            learned Full-Stack Software Developer Bootcamp with{" "}
            <a href="https://www.techupth.com/" className="link">
              TechUp
            </a>
            . I enjoy listening music, watching movie and playing puzzle games.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
