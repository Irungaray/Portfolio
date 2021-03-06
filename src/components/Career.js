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
      <div >
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
                <h3>Here you will find a lot more info about me. Seriously, a lot. So if you get bored, you can always go back to the homepage!</h3>
                <div className="text-left more-about">
                  <p>
                    My full name is Lionel Agustín Irungaray. I'm 22 and live in Concepción del Uruguay, a small town in Entre Ríos, Argentina.
                  </p>
                  <p>
                    I got my first computer back when I was 6 or 8 years old, around 2007-2008, and from then, technology drives me crazy. When I turned 10, I knew to handle a computer better than any adult who actually used it for daily work. Back in the day, computers weren't a "every-home-thing", and 'Internet' sounded like a word from a far away future.
                  </p>
                  <p>
                    Around 10, I started "programming". I learned to do some scripts on Batch and I was amazed by the way I could create and delete folders, get information like the time and the date, print messages on the console and so on, just by typing commands on Window’s notepad. I was pretty a hacker considering the time and my age, don't you think?
                  </p>
                  <p>
                    Now, after doing my time in other fields and having earned personal and professional experience, I'm fully dedicated to software engineering, particularly Web Development.
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

          <div className="col-xl-5">
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
                    I am an autodidact. I always teached myself the things I wanted to know.
                  </p>
                  <p>
                    Besides from technology, when I was younger, in my free time, I learned different crafts that were of my interest, such as welding, blacksmithing, mechanics, etc.
                  </p>
                  <p>
                    I started my own business, "Irungaray Metalúrgica", which has given me the experience, not only of the craft's technical stuff, but on the 'soft' skills that every entrepreneur must have. From the first contact with the client, and the understanding of what he wanted to get done or what problem he wanted to solve, to the logistics of considering and getting the resources that I needed to do each job. Estimating and managing time, calculating the budget, hiring and leading people if it's needed, etc.
                  </p>
                  <p>
                    I carry a backpack full of transversal knowledges that I acquired in different areas and disciplines, which complements one with another and helps me solve every problem that I face.
                  </p>
                  <p>
                    This has helped me a lot to enhance my career as a Developer, since now I rely on all that experience when it comes to the challenges that the software development process presents, such as problem solving techniques, or project structuring.
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>

          {/* <div className="row mx-auto"> */}
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
                Where I'm now
                <div className="text-left more-about">
                  <p>
                    I’m in a constant learning process, as every developer should be. I have chosen React as the main framework to work with, since it is great to create awesome and dynamic Web Apps in just a matter of days.
                  </p>
                  <p>
                    Also I like the MERN Stack because it gives ‘superpowers’ to React, allowing me to create (almost) every project I can imagine.
                  </p>
                  <p>
                    Currently, I’m working on a Startup, “Altaïr Devs”, that me and two associates (and friends of mine) founded last year. It counts with a UI/UX Designer, a Backend Developer, and me as the CEO and Frontend Developer. Our mission is to help local businesses adapt to the new paradigms of technology. We focus on generating Minimum Viable Products (MVP). With this methodology we propose step-by-step product evolution, so we can keep iterating, always keeping in mind the client’s feedback.
                  </p>
                  <p>
                    Since it is a side project, <strong>I'm open and anxious to work</strong> on a fully-consolidated enterprise, so, if you are a recruiter or a potential employer, feel free to contact me so we can have a chat! Down below you will find my networks.
                  </p>
                </div>
                Where I'm heading
                <div className="text-left more-about">
                  <p>
                    I like working alone almost as much as I like working on teams. Having worked on different areas, I was in charge of teams of up to 3 people. This made me gain experience that I apply now on everything that I do.
                  </p>
                  <p>
                    I love to take care of my co-workers. Watch their backs, constantly see if they need help with something, or counsel them if there is something that could be done in a better way.
                  </p>
                  <p>
                    Also, I really like to take advantage of every minute of the day thinking 'How and in which order should we do today's tasks?'
                  </p>
                  <p>
                    That's why I'd love to, in the near future, become a SCRUM Master or a Tech Leader, so I can exploit my interpersonal skills in order to get my co-workers to develop the most of themselves and lead them into productive and joyful journeys of work.
                  </p>
                  <br/>
                  <p className="text-center">
                    “The best people possess a feeling for beauty, the courage to take risks, the discipline to tell the truth, and the capacity for sacrifice.” <br/>
                    ― Ernest Hemingway
                  </p>
                </div>
                <br/>
              </div>
            </div>
          {/* </div> */}
        </div>

        <div className="row center mx-auto">
          <div className="col-md-7 mx-auto polaroid-modal text-center" style={{ paddingBottom: "50px" }}>
            <div className="col-md-12 text-center">
              <h1 style={{ paddingBottom: "15px" }}>And because not everything in life is coding, here you can see me doing some of the other things that I love!</h1>
            </div>

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
