import React, { Component } from "react";
import {
  CardActions,
  CardText,
  CardTitle,
  Card,
  Grid,
  Cell,
  Tabs,
  Tab
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div
            id="projects"
            style={{
              alignContent: "center",
              alignItems: "center",
              width: "100%",
              justifyContent: "center"
            }}
          >
            <Grid className="projects-grid">
              <Cell col={3}>
                <Card
                  shadow={30}
                  style={{
                    minWidth: "500",
                    margin: "10px",
                    borderRadius: "10px"
                  }}
                >
                  <CardTitle
                    style={{
                      color: "#0000FF",
                      height: "276px",

                      background:
                        "url(https://lh3.googleusercontent.com/vR_tUvWeeJB_V6wUAJWFNhcvf1T5pWLe_0d1jYOX65ihMBtUnd6XXPNkk-KCJs_bNg=s180-rw) center no-repeat"
                    }}
                  >
                    ChatUp
                  </CardTitle>
                  <CardText
                    style={{
                      color: "#0000FF",
                      width: "300px"
                    }}
                  >
                    A Social Network, connecting with people around the world.
                  </CardText>
                  <CardActions border>
                    <div className="project-links">
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
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/user/shelllly1/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-youtube-square"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </CardActions>
                </Card>
              </Cell>
              <Cell col={3}>
                <Card
                  shadow={30}
                  style={{
                    minWidth: "500",
                    margin: "10px",
                    borderRadius: "10px"
                  }}
                >
                  <CardTitle
                    style={{
                      color: "#0000FF",
                      height: "276px",

                      background:
                        "url(https://lh3.googleusercontent.com/XgqCVan0QM5_aGktPq_YKPQCfIbyLOx-rBzHj7Ki3-rYWKLEY0Zs--1qqZgwtIUo2oQ=s180-rw)  center no-repeat"
                    }}
                  >
                    Tasker
                  </CardTitle>
                  <CardText
                    style={{
                      color: "#0000FF",
                      width: "300px"
                    }}
                  >
                    A task manager with colerfule categorise for every plan.
                  </CardText>
                  <CardActions border>
                    <div className="project-links">
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
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/user/shelllly1/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-youtube-square"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </CardActions>
                </Card>
              </Cell>

              <Cell col={3}>
                <Card
                  shadow={30}
                  style={{
                    minWidth: "500",
                    margin: "10px",
                    borderRadius: "10px"
                  }}
                >
                  <CardTitle
                    style={{
                      color: "#0000FF",
                      height: "276px",

                      background:
                        "url(https://lh3.googleusercontent.com/afrz05IRGM3PCnC3IlpFrJpW3fbshdjcuuRsDyYGhjiosD1-CgU_FK0Dh9PhBoWXlCgu=s180-rw) center no-repeat"
                    }}
                  >
                    LectShares
                  </CardTitle>
                  <CardText
                    style={{
                      color: "#0000FF",
                      width: "300px"
                    }}
                  >
                    An open source of recorded lectchers, orginized for
                    everuone.
                  </CardText>
                  <CardActions border>
                    <div className="project-links">
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
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/user/shelllly1/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-youtube-square"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </CardActions>
                </Card>
              </Cell>

              <Cell col={3}>
                <Card
                  shadow={30}
                  style={{
                    minWidth: "500",
                    margin: "10px",
                    borderRadius: "10px"
                  }}
                >
                  <CardTitle
                    style={{
                      color: "#0000FF",
                      height: "276px",

                      background:
                        "url(https://lh3.googleusercontent.com/XgqCVan0QM5_aGktPq_YKPQCfIbyLOx-rBzHj7Ki3-rYWKLEY0Zs--1qqZgwtIUo2oQ=s180-rw)  center no-repeat"
                    }}
                  >
                    Tasker
                  </CardTitle>
                  <CardText
                    style={{
                      color: "#0000FF",
                      width: "300px"
                    }}
                  >
                    A Social Network
                  </CardText>
                  <CardActions border>
                    <div className="project-links">
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
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/user/shelllly1/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-youtube-square"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </CardActions>
                </Card>
              </Cell>

              <Cell col={3}>
                <Card
                  shadow={30}
                  style={{
                    minWidth: "500",
                    margin: "10px",
                    borderRadius: "10px"
                  }}
                >
                  <CardTitle
                    style={{
                      color: "#0000FF",
                      height: "276px",

                      background:
                        "url(https://lh3.googleusercontent.com/XgqCVan0QM5_aGktPq_YKPQCfIbyLOx-rBzHj7Ki3-rYWKLEY0Zs--1qqZgwtIUo2oQ=s180-rw)  center no-repeat"
                    }}
                  >
                    Tasker
                  </CardTitle>
                  <CardText
                    style={{
                      color: "#0000FF",
                      width: "300px"
                    }}
                  >
                    A Social Network
                  </CardText>
                  <CardActions border>
                    <div className="project-links">
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
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/user/shelllly1/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-youtube-square"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </CardActions>
                </Card>
              </Cell>

              <Cell col={3}>
                <Card
                  shadow={30}
                  style={{
                    minWidth: "500",
                    margin: "10px",
                    borderRadius: "10px"
                  }}
                >
                  <CardTitle
                    style={{
                      color: "#0000FF",
                      height: "276px",

                      background:
                        "url(https://lh3.googleusercontent.com/XgqCVan0QM5_aGktPq_YKPQCfIbyLOx-rBzHj7Ki3-rYWKLEY0Zs--1qqZgwtIUo2oQ=s180-rw) center no-repeat"
                    }}
                  >
                    Tasker
                  </CardTitle>
                  <CardText
                    style={{
                      color: "#0000FF",
                      width: "300px"
                    }}
                  >
                    A Social Network
                  </CardText>
                  <CardActions border>
                    <div className="project-links">
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
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/user/shelllly1/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-youtube-square"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </CardActions>
                </Card>
              </Cell>
            </Grid>
          </div>
        );

      case 1:
        return <div></div>;
      case 2:
        return <div></div>;
      case 3:
        return <div></div>;
      default:
        return <div></div>;
    }
  }

  render() {
    return (
      <div
        className="projects-style"
        style={{ height: "1100px", scroll: "true" }}
      >
        <Tabs
          style={{ color: "#ffff" }}
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "#ffff" }}>Android</Tab>
          <Tab style={{ color: "#ffff" }}>React</Tab>
          <Tab style={{ color: "#ffff" }}>C#</Tab>
          <Tab style={{ color: "#ffff" }}>Java</Tab>
        </Tabs>

        <section>
          <div>{this.toggleCategories()}</div>
        </section>
      </div>
    );
  }
}
export default Projects;
