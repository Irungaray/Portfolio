import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";

import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      var title = this.props.data.title;
      var description = this.props.data.description;
      var disclaimer = this.props.data.disclaimer;
      var url = this.props.data.url;
      var repo = this.props.data.repo;

      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });

        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
          });
        }
      }
    }

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>

          <div className="col-md-12 text-center">
            <h1 style={{ padding: "5px 5px 0 5px" }}>{title}</h1>

            <div style={{ padding: "10px" }}>
              <h1 style={{ letterSpacing: "10px"}}>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-href"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                ) : null}

                {repo ? (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-href"
                  >
                    <i className="fab fa-github" style={{ width: "20px" }}></i>
                  </a>
                ) : null}
              </h1>
            </div>

            <h2 className="modal-description">{description}</h2>

            {disclaimer ? (
              <h2 className="modal-description">{disclaimer}</h2>
            ) : null}

            <div className="col-md-12 text-center">
              <ul
                className="list-inline mx-auto"
                style={{ fontSize: "15px"}}
              >
                {tech}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
