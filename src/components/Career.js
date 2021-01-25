import React, { Component } from "react";
import { Link } from 'react-router-dom'

import cyberHeader from "../assets/header.png";
import cyberHeaderUD from "../assets/headerUD.png";

import Typical from "react-typical";
import AwesomeSlider from "react-awesome-slider";

import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";

import polaroid1 from "../assets/polaroidModal/me1.jpg";
import polaroid2 from "../assets/polaroidModal/me2.jpg";
import polaroid3 from "../assets/polaroidModal/me3.png";
import polaroid4 from "../assets/polaroidModal/me4.jpg";
import polaroid5 from "../assets/polaroidModal/me5.jpg";
import polaroid6 from "../assets/polaroidModal/me6.jpg";
import blacksmith from "../assets/polaroidModal/blacksmith.jpg";
import rider from "../assets/polaroidModal/rider.jpg";
import silverhand from "../assets/polaroidModal/silverhand.jpg";

class Career extends Component {
  render() {
    return (
      <div>
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

        <div className="text-center">
          <Link to="/Career">
            <button className="cybr-btn" style={{ fontSize: "50px", width: "80vw"}}>
              <p>Lionel Irungaray</p>
              <span className="cybr-btn__glitch">Click to go back</span>
            </button>
          </Link>
        </div>

        <div className="row center mx-auto" style={{ marginTop: "30px" }}>
          <div className="col-xl-5">
            <div className="col-md-12 mx-auto polaroid-modal text-center" style={{ paddingBottom: "50px" }}>
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
              <div className="wave" style={{ backgroundColor: "#f3f3f3" }}>
                More about me
                <h3>Currently, this section is only available in english :(</h3>
                <h2>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  nesciunt praesentium obcaecati est rerum, iure repudiandae
                  aperiam odit soluta voluptatem quo, laudantium suscipit id,
                  debitis commodi maxime ducimus quidem aut.
                </h2>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem qui eligendi aliquid rem facilis atque veniam
                  adipisci, et ipsum repellendus quis possimus laborum a
                  doloribus labore dolore vitae. Provident, in.Voluptas quod
                  obcaecati quos non, commodi officia mollitia possimus deleniti
                  repellendus cumque provident, temporibus atque nostrum, culpa
                  ducimus distinctio dicta soluta. Dolore excepturi voluptates
                  ullam dolorum sapiente veritatis ab reprehenderit.
                </h2>
                <h1>
                  Wanna go back to the homepage? click here ➡
                  <Link to="/">
                    <span style={{ fontSize: "30px" }} role="img" aria-label="">
                      🚀
                    </span>
                  </Link>
                </h1>
                <br />
              </div>
            </div>
          </div>

          <div className="row md-auto">
            <div className="col-md-12 mx-auto polaroid-modal text-center" style={{ paddingBottom: "50px"}}>
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
              <div className="wave" style={{ backgroundColor: "#f3f3f3" }}>
                Autodidact
                <h3>
                  Trayectory
                  <span style={{ fontSize: "30px" }} role="img" aria-label="">
                    🚀
                  </span>
                </h3>
                <br />
              </div>
            </div>

            <div className="col-md-12 mx-auto polaroid-modal text-center" style={{ paddingBottom: "50px" }}>
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
              <div className="wave" style={{ backgroundColor: "#f3f3f3" }}>
                Where im heading
                <span style={{ fontSize: "40px" }} role="img" aria-label="">
                  😎
                </span>
                <h3>
                  Trayectory
                  <span style={{ fontSize: "30px" }} role="img" aria-label="">
                    🚀
                  </span>
                </h3>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="row center mx-auto">
          <div className="col-md-7 mx-auto polaroid-modal text-center" style={{ paddingBottom: "50px" }}>
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

        <div className="text-center button-div">
          <Link to="/">
            <button className="cybr-btn">
              Go back?
              <span className="cybr-btn__glitch">Click here</span>
            </button>
          </Link>
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
      </div>
    );
  }
}

export default Career;
