import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

function ContactMe() {
  return (
    <div className="contact-me-page">
      <a name="contactMe" />
      <h1 className="header-font">Contact Me</h1>
      <div className="contact-me">
        <div className="space-area">
          <div className="icon-container">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <p className="sub-topic-font">xxx-xxx-xxxx</p>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p className="sub-topic-font">x.xxxxxx@gmail.com</p>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faMapLocation} className="icon" />
            <p className="sub-topic-font">xx/xx xxxx xxxx Bangkok</p>
          </div>
        </div>
        <form className="contact-form" onSubmit="">
          <div className="input-container">
            <label className="topic-font-grey" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name here"
              onChange=""
            />
          </div>
          <div className="input-container">
            <label className="topic-font-grey" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email here"
              onChange=""
            />
          </div>
          <div className="input-container">
            <label className="topic-font-grey" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="Enter your message here"
              onChange=""
              rows={6}
              cols={30}
            />
          </div>
          <div className="form-actions">
            <button className="submit" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
