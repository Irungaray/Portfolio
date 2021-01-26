import React, { Component } from "react";
import { Link } from 'react-router-dom';

import ProjectDetailsModal from "./ProjectDetailsModal";

import cyberHeader from "../assets/header.png";
import cyberFooter from "../assets/footer.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var seeMore = this.props.resumeBasicInfo.seeMore;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{ marginBottom: 5 }}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
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

        <section id="portfolio">
          <div className="col-md-12">
              <div className="cybr-btn">
                <h1 className="section-title" style={{ color: "black" }}><span>{sectionName}</span></h1>
                <span className="cybr-btn__glitch"><h1 className="section-title"><span>{sectionName}</span></h1></span>
              </div>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projects}</div>
            </div>
            <ProjectDetailsModal
              show={this.state.detailsModalShow}
              onHide={detailsModalClose}
              data={this.state.deps}
            />
          </div>
        </section>

        {/* <div className="text-center button-div">
          <Link to="/Career">
            <button className="cybr-btn">
              {seeMore}
              <span className="cybr-btn__glitch">Click here</span>
            </button>
          </Link>
        </div> */}

        <img
          src={cyberFooter}
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
      </>
    );
  }
}

export default Projects;
