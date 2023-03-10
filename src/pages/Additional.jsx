function Additional() {
  return (
    <div className="additional-page">
      <a name="additional" />
      <h1 className="header-font">Additional</h1>
      <h1 className="topic-font-grey">Additional passions</h1>
      <div className="item-row">
        <div className="item-box">
          <div className="image">Image</div>
          <p>
            <span className="sub-topic-font">Front-End Developer</span>
            <br />
            (Sass, Bootstrap, Tailwind)
          </p>
        </div>
        <div className="item-box">
          <div className="image">Image</div>
          <p>
            <span className="sub-topic-font">Back-End Developer</span>
            <br />
            (NodeJS, Laravel, Codeigniter)
          </p>
        </div>
        <div className="item-box">
          <div className="image">Image</div>
          <p>
            <span className="sub-topic-font">UI/UX Designer</span>
            <br />
            (Figma, Zeplin, Adobe XD)
          </p>
        </div>
      </div>
      <h1 className="topic-font-grey">My portfolio</h1>
      <div className="item-row">
        <div className="item-box">
          <p className="sub-topic-font">Project's name</p>
          <div className="image">Image</div>
        </div>
        <div className="item-box">
          <p className="sub-topic-font">Project's name</p>
          <div className="image">Image</div>
        </div>
        <div className="item-box">
          <p className="sub-topic-font">Project's name</p>
          <div className="image">Image</div>
        </div>
      </div>
    </div>
  );
}

export default Additional;
