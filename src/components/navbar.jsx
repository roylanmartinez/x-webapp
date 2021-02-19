import React, { Component } from "react";
import Searcher from "./searcher";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    // console.log(this.props.location.pathname);
    return (
      <React.Fragment>
        <div className="navbarWrapper">
          <button
            id={"feedNewsButton"}
            className={"navbar-button " + this.props.classesButNav[0]}
            onClick={() => {
              this.props.handleColor(0);
              this.props.history.push("");
              // this.props.onBlurSquare();
            }}
          >
            <i
              className={
                "navbarIcon fas fa-home " + this.props.classesButNav[0]
              }
            ></i>
            <small className={"nameButton " + this.props.classesButNav[0]}>
              Home
            </small>
          </button>

          <button
            className={"navbar-button " + this.props.classesButNav[1]}
            onClick={() => {
              this.props.handleColor(1);
              this.props.onOpenSquare("map");
            }}
          >
            <i
              className={
                "navbarIcon fas fa-globe-americas " +
                this.props.classesButNav[1]
              }
            ></i>
            <small className={"nameButton " + this.props.classesButNav[1]}>
              Map
            </small>
          </button>
          <button
            className={"navbar-button " + this.props.classesButNav[2]}
            onClick={() => {
              this.props.handleColor(2);
              this.props.onOpenSquare("messages");
            }}
          >
            <i
              className={
                "navbarIcon fas fa-comments " + this.props.classesButNav[2]
              }
            ></i>
            <small className={"nameButton " + this.props.classesButNav[2]}>
              Messages
            </small>
          </button>
          <button
            className={"navbar-button " + this.props.classesButNav[3]}
            onClick={() => {
              this.props.handleColor(3);
              this.props.onOpenSquare("notifications");
            }}
          >
            <i
              className={
                "navbarIcon fas fa-bell " + this.props.classesButNav[3]
              }
            ></i>
            <small className={"nameButton " + this.props.classesButNav[3]}>
              Notifications
            </small>
          </button>
          <button
            className={
              "navbar-button searcherSmall " + this.props.classesButNav[4]
            }
            onClick={() => {
              this.props.handleColor(4);
              this.props.onOpenSquare("searcher");
            }}
            // This button just appears in the small screen.
            // Therefore, behind does not have to intervene in the behavior
          >
            <i
              className={
                "navbarIcon fas fa-search " + this.props.classesButNav[4]
              }
            ></i>
          </button>

          {/* searcher navbar */}
          <div
            onBlur={this.props.onBlurSearcherContainer}
            tabIndex="0"
            className={"searcherContainer " + this.props.positions["behind"]}
            onClick={() => {
              this.props.onUp();
            }}
          >
            <Searcher positions={this.props.positions} />
            <div className={"preResultSearch"}></div>
          </div>
          <button
            id={"profileButton"}
            className={"navbar-button " + this.props.classesButNav[5]}
            onClick={() => {
              this.props.handleColor(5);
              this.props.history.push("/profile/usertest/");
            }}
          >
            <i
              className={
                "navbarIcon fas fa-user " + this.props.classesButNav[5]
              }
            ></i>
            <small className={"nameButton " + this.props.classesButNav[5]}>
              Profile
            </small>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);
