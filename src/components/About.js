import React, { Component } from "react";
import { Icon } from "@iconify/react";

import PolaroidModal from "./PolaroidModal";

import jsIcon from "@iconify/icons-logos/javascript";
import reactIcon from "@iconify/icons-logos/react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      polaroidModalShow: false,
    };
  }

  render() {
    let polaroidModalShow = (data) => {
      this.setState({ polaroidModalShow: true, deps: data });
    };

    let polaroidModalClose = () => this.setState({ polaroidModalShow: false });

    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var name = this.props.resumeBasicInfo.description;
      var techs = this.props.resumeBasicInfo.stack;
      var interests = this.props.resumeBasicInfo.passion;
      var trayectory = this.props.resumeBasicInfo.more;
      var otherStuff = this.props.resumeBasicInfo.notCode;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
        </div>

        <div className="row center mx-auto mb-5">
          {/* aca */}
          <div className="col-md-4 mb-5 center">
            <div onClick={() => polaroidModalShow(otherStuff)}>
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={jsIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* aca */}

          <div className="col-md-8 center">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />

                  <PolaroidModal
                    show={this.state.polaroidModalShow}
                    onHide={polaroidModalClose}
                    data={this.state.deps}
                  />

                  <div className="about">
                    <span className="wave" role="img" aria-label="">
                      {hello} 😎{" "}
                    </span>
                    <br />
                    <br />
                    <h3>{name}</h3>
                    <br />
                    <h3>{techs}</h3>
                    <br />
                    <h3>{interests}</h3>
                    <br />
                    <h3>{trayectory} LINK</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
