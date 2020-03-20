import React, { Component } from "react";
import Colors from "../../statics/colors";

class MoreAbout extends Component {
  render() {
    return (
      <div id="more_about" className="about-grid" style={{ padding: 50 }}>
        <div style={{ width: "100%", margin: "auto" }}>
          <h1 style={{ color: Colors.$white }}>
            Where thecnology and strategy meets..
          </h1>
        </div>
        <div style={{ width: "100%", margin: "auto" }}>
          <p style={{ color: Colors.$white, fontSize: 40 }}>
            We create a modern products for every purpose,
          </p>
          <p style={{ color: Colors.$white, fontSize: 45 }}>
            for everyone, everywhere.
          </p>
        </div>
      </div>
    );
  }
}
export default MoreAbout;
