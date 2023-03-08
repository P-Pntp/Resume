import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div class="navbar-name">PANTIPA'S RESUME</div>
      <div class="navbar-link-container">
        <span>
          <a href="" class="navbar-link">
            About Me
          </a>
        </span>
        <span>
          <a href="" class="navbar-link">
            My Resume
          </a>
        </span>
        <span>
          <a href="" class="navbar-link">
            Additional
          </a>
        </span>
        <span>
          <a href="" class="navbar-link">
            Contact Me
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
