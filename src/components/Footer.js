import React, { Component } from "react";

import cyberFooter from "../assets/footerFooter.png";
import cyberFooterUD from "../assets/footerFooterUD.png";

import "../scss/cybr-btn.scss"

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <div key={network.name} className="list-inline-item mx-3">
            <li className="list-inline-item mx-3">
              <div className="cybr-btn" style={{ fontSize: "100%"}}>
              <span className="m-4"><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.class}></i></a></span>
                <span className="cybr-btn__glitch"><span key={network.name} className="m-4"><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.class}></i></a></span></span>
              </div>
            </li>
          </div>
        );
      });
    }

    return (
      <footer>
        <img
          src={cyberFooterUD}
          alt="Cyber Header"
          className="Cyber"
          style={{
            top: "0",
            bottom: "0",
            width: "100%",
            height: "17px",
            objectFit: "initial",
          }}
        />

        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <h1 style={{ fontFamily: "Cyber", letterSpacing: "3px"}}>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo ? (
                  <p>{this.props.sharedBasicInfo.name} - Altaïr Devs</p>
                ) : (
                  "???"
                )}
              </h1>
            </div>
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
            height: "38px",
            objectFit: "cover",
          }}
        />
      </footer>
    );
  }
}

export default Footer;
