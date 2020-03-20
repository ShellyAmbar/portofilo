import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="contact-section"
        id="contact"
        style={{ padding: 200, height: "100%" }}
      >
        <h1>Contact Me</h1>
        <div className="border"></div>
        <form className="contact-form" action="index.html" method="post">
          <input
            type="text"
            className="contact-form-text"
            placeholder="Your name"
          />
          <input
            type="email"
            className="contact-form-text"
            placeholder="Your email"
          />
          <input
            type="text"
            className="contact-form-text"
            placeholder="Your phone"
          />
          <textarea
            className="contact-form-text"
            placeholder="Your message"
          ></textarea>
          <input type="submit" className="contact-form-btn" value="Send" />
        </form>
      </div>
    );
  }
}
export default Contact;
