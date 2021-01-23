import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

import cyberHeader from "../assets/header.png";

import "../scss/cybr-btn.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      var title = this.props.sharedData.title.toUpperCase();
    }
    return (
      <>
        <img
          src={cyberHeader}
          alt="Cyber Header"
          className="Cyber"
          style={{
            top: "0",
            bottom: "0",
            width: "100%",
            height: "30px",
            objectFit: "cover",
          }}
        />

        <header
          id="home"
          style={{
            // height: window.innerHeight - 140,
            display: "block",
          }}
        >
          <div className="row aligner" style={{ height: "100%" }}>
            <div className="col-md-12">
              <div>
                {/* Cyber Notebook */}
                <div class="cybr-btn">
                  <span
                    className="iconify header-icon"
                    data-icon="la:laptop-code"
                    data-inline="false"
                  ></span>
                  <span></span>
                  <span class="cybr-btn__glitch">
                    <span
                      className="iconify header-icon"
                      data-icon="la:laptop-code"
                      data-inline="false"
                    ></span>
                  </span>
                  <span class="cybr-btn__tag">R25</span>
                </div>

                <br />

                <button class="cybr-btn">
                <h1 className="mb-0"><Typical steps={[name]} wrapper="p" /></h1>
                  <span class="cybr-btn__glitch"><h1 className="mb-0"><p style={{ fontFamily: "Cyber", fontSize: "123%", fontWeight: "500" }}>Irungaray</p></h1></span>
                </button>

                <div class="cybr-btn">
                    {/* <p style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>Frontend Developer</p> */}
                    <Typical
                    className="title-styles"
                    steps={[title]}
                    wrapper="p"
                  />
                  <span class="cybr-btn__glitch"><h1 className="mb-0"><div style={{ fontFamily: "Cyber", fontSize: "65%", fontWeight: "500" }}>MERN Stack</div></h1></span>
                </div>

                <Switch
                  checked={this.state.checked}
                  onChange={this.onThemeSwitchChange}
                  offColor="#212529"
                  onColor="#212529"
                  className="react-switch mx-auto"
                  width={90}
                  height={40}
                  uncheckedIcon={
                    <span
                      className="iconify"
                      data-icon="noto-v1:fire"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "20px",
                        color: "#353239",
                      }}
                    ></span>
                  }
                  checkedIcon={
                    <span
                      className="iconify"
                      data-icon="noto-v1:new-moon"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "10px",
                        color: "#353239",
                      }}
                    ></span>
                  }
                  id="icon-switch"
                />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
