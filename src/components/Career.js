import React, { Component } from "react";

import cyberHeader from "../assets/header.png";
import cyberHeaderUD from "../assets/headerUD.png";

import AwesomeSlider from 'react-awesome-slider';

import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";

import polaroid1 from "../assets/polaroidModal/me1.jpg"
import polaroid2 from "../assets/polaroidModal/me2.jpg"
import polaroid3 from "../assets/polaroidModal/me3.png"
import polaroid4 from "../assets/polaroidModal/me4.jpg"
import polaroid5 from "../assets/polaroidModal/me5.jpg"
import polaroid6 from "../assets/polaroidModal/me6.jpg"
import blacksmith from "../assets/polaroidModal/blacksmith.jpg"
import rider from "../assets/polaroidModal/rider.jpg"
import silverhand from "../assets/polaroidModal/silverhand.jpg"


class Experience extends Component {
  render() {
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

      <div className="col-md-12">
        <div className="col-md-5 mx-auto polaroid-modal text-center" style={{ paddingBottom: "50px" }}>
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

        </div>
      </div>

      {/* MODAL */}
      <div className="col-md-12">
        <div className="col-md-5 mx-auto polaroid-modal text-center" style={{ paddingBottom: "50px" }}>
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
            <div> <img src={polaroid1} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Outdoors Enjoyer</div></div>
            <div> <img src={polaroid2} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Antiquities Collector</div> </div>
            <div> <img src={polaroid4} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Welder</div> </div>
            <div> <img src={blacksmith} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Blacksmith</div> </div>
            <div> <img src={rider} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Rider</div> </div>
            <div> <img src={polaroid3} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Asador Senior</div> </div>
            <div> <img src={polaroid6} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Ferroclub CDU Member</div> </div>
            <div> <img src={polaroid5} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Ciri, my dog</div> </div>
            <div> <img src={silverhand} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">You really got all the way down here? Hope you enjoyed, Samurai!</div> </div>
          </AwesomeSlider>
        </div>

        <div className="col-md-12 text-center">
          <h1 style={{ paddingBottom: "15px" }}>Not everything in life is coding!</h1>
        </div>
      </div>

        <img
          src={cyberHeaderUD}
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

export default Experience;
