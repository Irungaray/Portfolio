import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';


import polaroid from "../assets/polaroidModal/polaroid.jpg"
import polaroid1 from "../assets/polaroidModal/polaroid1.png"
import polaroid2 from "../assets/polaroidModal/polaroid2.jpg"
import polaroid3 from "../assets/polaroidModal/polaroid3.jpg"
import polaroid4 from "../assets/polaroidModal/polaroid4.jpg"

class PolaroidModal extends Component {
  render() {
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
              animation="scaleOutAnimation"
              className="slider-image"
            >
              <div> <img src={polaroid} alt="Me, myself and I" style={{ maxHeight: "399px"}}/> <br /> <h1>BEEP BEEP MOTHERFUCKER!</h1> </div>
              <div> <img src={polaroid1} alt="Me, myself and I" style={{ maxHeight: "399px"}}/> <br /> <h1>BEEP BEEP MOTHERFUCKER!</h1> </div>
              <div> <img src={polaroid2} alt="Me, myself and I" style={{ maxHeight: "399px"}}/> <br /> <h1>BEEP BEEP MOTHERFUCKER!</h1> </div>
              <div> <img src={polaroid3} alt="Me, myself and I" style={{ maxHeight: "399px"}}/> <br /> <h1>BEEP BEEP MOTHERFUCKER!</h1> </div>
              <div> <img src={polaroid4} alt="Me, myself and I" style={{ maxHeight: "399px"}}/> <br /> <h1>BEEP BEEP MOTHERFUCKER!</h1> </div>
              {/* {imgMap} */}
           </AwesomeSlider>
          </div>

          <div className="col-md-12 text-center">
            {/* <h1 style={{ padding: "5px 5px 0 5px" }}>{title}</h1> */}

            {/* <h2 className="modal-description">{description}</h2> */}
          </div>
        </div>
      </Modal>
    );
  }
}

export default PolaroidModal;
