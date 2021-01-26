import React, { Component } from "react";
import { Link } from 'react-router-dom'

import cyberHeader from "../assets/header.png";
import cyberHeaderUD from "../assets/headerUD.png";

import AwesomeSlider from "react-awesome-slider";

import AwesomeSliderStyles from "../scss/light-slider.scss";
// import AwesomeSliderStyles2 from "../scss/dark-slider.scss";

import polaroid1 from "../assets/polaroidModal/me1.jpg";
import polaroid2 from "../assets/polaroidModal/me2.jpg";
import polaroid3 from "../assets/polaroidModal/me3.png";
import polaroid4 from "../assets/polaroidModal/me4.jpg";
import polaroid5 from "../assets/polaroidModal/me5.jpg";
import polaroid6 from "../assets/polaroidModal/me6.jpg";
import blacksmith from "../assets/polaroidModal/blacksmith.jpg";
import rider from "../assets/polaroidModal/rider.jpg";
import photograph from "../assets/polaroidModal/photographer.jpg";
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

          <Link to="/">
            <div className="text-center">
                <button className="cybr-btn" style={{ fontSize: "50px", width: "80vw"}}>
                  <p>Lionel Irungaray</p>
                  <span className="cybr-btn__glitch">Click to go back</span>
                </button>
            </div>
          </Link>

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
              <div className="wave" style={{ backgroundColor: "#f3f3f3", padding: "0 30px 0 30px"}}>
                More about me
                <h3>Currently, this section is only available in english :(</h3>
                <div className="text-left more-about">
                  <p>
                    My full name is Lionel Agustín Irungaray. I'm 22 and live in Concepción del Uruguay,
                    a small town in Entre Ríos, Argentina.
                  </p>
                  <p>
                    I got my first computer back when I was 6 or 8 years old, around 2007-2008,
                    and from then, technology drives me crazy.
                  </p>
                  <p>
                    When I turned 10, I knew to handle computers better than any adult who actually used them for daily work.
                    Obviously, computers werent a "every-home-thing" back in the day, and 'Internet' sounded like a word from a far away future.
                  </p>
                  <p>
                    Around that age, I started scavenging on forums about hacking stuff, and so I started "programming". I learned to do some scripts on Batch and I was amazed by the way I could create and delete folders, get information like the time and the date, print messages on the console and so on, just by typing commands on a notepad.
                    I was a real hacker considering the time and my age, dont you think?
                  </p>
                </div>
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

          <div className="row md-auto" style={{ maxWidth: "50%"}}>
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
              <div className="wave" style={{ backgroundColor: "#f3f3f3", padding: "0 30px 0 30px"}}>
                Autodidact
                <div className="text-left more-about">
                  <p>
                  Just as I said before, I always teached myself the things I wanted to know.
                  </p>
                  <p>
                  Later, in my adolescence, I deviated a couple of years from the tech industry and incursioned into other fields.
                  </p>
                  <p>
                  In my free time, after school, I learned different crafts that were of my interest, such as welding, blacksmithing, motor mechanics, etc.
                  </p>
                  <p>
                    I started my own business, "Irungaray Metalúrgica", which has given me the experience, not only of the craft's technical stuff, but on the 'soft' habilities that every entrepeneur must have. From the first contact with the client, and the understanding of what he wanted to get done or what problem he wanted to solve, to the logistics of considering and getting the resources that I needed to do each job. Estimating and managing time, calculating the budget, hiring and leading people if its needed, etc.
                  </p>
                </div>
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
              <div className="wave" style={{ backgroundColor: "#f3f3f3", padding: "0 30px 0 30px"}}>
                Where im heading
                <div className="text-left more-about">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum facere itaque repellat doloribus consequuntur illo dolorem porro. Officia voluptates temporibus, iure molestias cum dolor doloribus enim quaerat nihil aut deleniti.Ab qui debitis architecto quos aspernatur repudiandae, asperiores magni, deserunt laboriosam, nobis adipisci a? Eligendi accusamus dolorem architecto autem maiores sit numquam laboriosam vitae, doloremque pariatur aut dignissimos quaerat. Autem!
                  </p>
                </div>
                <br/>
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
              cssModule={[AwesomeSliderStyles]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              <div> <img src={polaroid1} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Outdoors Enjoyer</div></div>
              <div> <img src={polaroid2} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Antiquities Collector</div> </div>
              <div> <img src={polaroid4} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Welder</div> </div>
              <div> <img src={blacksmith} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Blacksmith</div> </div>
              <div> <img src={rider} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Rider</div> </div>
              <div> <img src={photograph} alt="Me, myself and I"/> <br /> <div className="polaroid-modal__div">Photographer</div> </div>
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
