import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import PolaroidModal from "./PolaroidModal";

import profilePic from "../assets/myProfile.jpg";

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

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>More about me</span>
          </h1>
        </div>

        <div className="row center mx-auto mb-5">
          <div className="col-6 mb-5 center">
            <div onClick={() => polaroidModalShow()}>
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilePic}
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

          <PolaroidModal
            show={this.state.polaroidModalShow}
            onHide={polaroidModalClose}
            data={this.state.deps}
          />

          <div className="HelloThere col-md-6 center" style={{ paddingBottom: "20px" }}>
            <div className="col-md-11">
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
                  <div className="wave">
                    Hello there!
                    <span style={{ fontSize: "40px" }} role="img" aria-label="">
                      😎
                    </span>
                    <br /> <br />
                    Here you can read more about...
                    <br />
                    <br />
                    <h3>Me</h3>
                    <br />
                    <h3>What im doing now</h3>
                    <br />
                    <h3>My previous experience</h3>
                    <br />
                    <h3>
                      Where im heading
                      <span
                        style={{ fontSize: "30px" }}
                        role="img"
                        aria-label=""
                      >
                        🚀
                      </span>
                    </h3>
                    <br />
                    <h3>And also some of my hobbies!</h3>
                    <br />
                    <h3>
                      And you can always go back to the homepage just clicking
                      here ➡
                      <Link to="/">
                        <span
                          style={{ fontSize: "30px" }}
                          role="img"
                          aria-label=""
                        >
                          🏠
                        </span>
                      </Link>
                    </h3>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="AboutMe col-md-6 center" style={{ paddingBottom: "20px" }}>
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
                <div className="wave">
                  About me...
                  <br /> {" "} <br />
                  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquam id temporibus accusamus debitis dolorum nulla, consequuntur illum perferendis architecto voluptatum iusto sed fugiat deserunt saepe consequatur iste. Officiis, esse.</h3>
                  <br/>
                  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquam id temporibus accusamus debitis dolorum nulla, consequuntur illum perferendis architecto voluptatum iusto sed fugiat deserunt saepe consequatur iste. Officiis, esse.</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="WhatImDoing col-md-6 center" style={{ paddingBottom: "20px" }}>
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
                <div className="wave">
                  What im doing now:
                  <br /> {" "} <br />
                  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquam id temporibus accusamus debitis dolorum nulla, consequuntur illum perferendis architecto voluptatum iusto sed fugiat deserunt saepe consequatur iste. Officiis, esse.</h3>
                  <br/>
                  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquam id temporibus accusamus debitis dolorum nulla, consequuntur illum perferendis architecto voluptatum iusto sed fugiat deserunt saepe consequatur iste. Officiis, esse.</h3>
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
