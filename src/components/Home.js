import React, { Component } from "react";
import $ from "jquery";
import "../App.scss";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Career from "./Career";

import cyberFooter from '../assets/footer.png';

class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(pickedLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(oppositeLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = "Irungaray"
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <div className="landing">
          <Header sharedData={this.state.sharedData.basic_info} />
          <div className="col-md-12 mx-auto text-center language">
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$primaryLanguage,
                  window.$secondaryLanguageIconId
                )
              }
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon mr-5"
                data-icon="twemoji-flag-for-flag-united-states"
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$secondaryLanguage,
                  window.$primaryLanguageIconId
                )
              }
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-argentina"
                data-inline="false"
                id={window.$secondaryLanguageIconId}
              ></span>

            </div>
          </div>

          <img
            src={cyberFooter}
            alt="Cyber Header"
            className="Cyber"
            style={{
              top: "0",
              bottom: "0",
              width: "100%",
              height: "30px",
              objectFit: "cover"
            }}
          />
        </div>

        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Career
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default Layout;
