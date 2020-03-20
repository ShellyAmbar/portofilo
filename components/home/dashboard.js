import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "../../photos/logo.png";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid className="home-grid" style={{ paddingBottom: 300 }}>
          <Cell col={12}>
            <img src={logo} alt="Logo" style={{ height: 250 }} />
            <div className="banner-text">
              <h1> Front End developer </h1>
              <hr />
              <p style={{ fontSize: 30, margin: 3 }}>
                Android | JAVA | JS |Html |CSS | Angular | React | React Native{" "}
                {""} | Firebase | SQL
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/ShellyAmbar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shelly-ambar-a96382146/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.youtube.com/user/shelllly1/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
