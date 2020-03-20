import React, { Component } from "react";
import Colors from "../../statics/colors";
class About extends Component {
  render() {
    return (
      <div id="about" className="about-grid" style={{ padding: 50 }}>
        <h1 style={{ color: Colors.$fucsia, fontSize: 60, lineHeight: 5 }}>
          About Us
        </h1>
        <p
          style={{
            color: Colors.$white,
            fontSize: 40,
            padding: 10,
            lineHeight: 2
          }}
        >
          Founded in 2019, Shelly's-Apps is a tech company focused on the
          development of mobile applications. Our family comes to work every
          morning with one goal in mind: creating mobile apps that people will
          love. We’re experts at decoding the best strategy to drive both
          engagement and business, and we believe that delivering precise,
          tailored tech solutions pave the way for success.
        </p>

        <h1
          style={{
            color: Colors.$fucsia,
            fontSize: 60,
            padding: 10,
            lineHeight: 5
          }}
        >
          Millions of people around the world use our apps every day.
        </h1>
        <p
          style={{
            color: Colors.$white,
            fontSize: 40,
            padding: 10,
            lineHeight: 2
          }}
        >
          We work with clients from diverse fields – top media outlets,
          publishing giants in news, sports and the automotive industry, as well
          as major health-care providers are among our most trusted customers.
          Our product managers, designers, developers and QA engineers are at
          the top of their respective fields. We are around for the long haul.
          Gini-App doesn’t just develop and launch; rather, we continue to
          perfect our apps so that they’re always up-to-date, beautifully
          efficient, and user-friendly.
        </p>
      </div>
    );
  }
}
export default About;
