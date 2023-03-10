function Navbar() {
  return (
    <nav className="navbar">
      <a href="#header" class="navbar-name">
        PANTIPA'S RESUME
      </a>
      <div class="navbar-link-container">
        <span>
          <a href="#aboutMe" class="navbar-link">
            About Me
          </a>
        </span>
        <span>
          <a href="#myResume" class="navbar-link">
            My Resume
          </a>
        </span>
        <span>
          <a href="#additional" class="navbar-link">
            Additional
          </a>
        </span>
        <span>
          <a href="#contactMe" class="navbar-link">
            Contact Me
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
