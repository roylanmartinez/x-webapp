import React, { Component } from "react";

class Authentication extends Component {
  state = {};

  handleScroll = () => {
    console.log(this.authentication.scrollTop);
    // this.au.style.marginTop = "20px";
    this.header.style.marginTop = `${
      50 + this.authentication.scrollTop * 0.1
    }px`;
  };

  render() {
    return (
      <div
        ref={(authentication) => {
          this.authentication = authentication;
        }}
        onScroll={this.handleScroll}
        className="authentication"
      >
        <img
          // onClick={() => this.props.history.push("/profile/usertest")}
          className="auth_logo"
          src={require("../assets/images/logo.png").default}
          alt="Avatar"
        ></img>
        <div className="auth">
          <div
            ref={(header) => {
              this.header = header;
            }}
            className="auth_header"
          >
            <div className="auth_headerLeft">
              <h4 className="auth_description">
                Designed for restaurant lovers{" "}
                <span style={{ fontSize: "16px" }}>❤️</span>
              </h4>
              <h1 className="auth_title">restaurantfy</h1>
            </div>
            <div className="auth_headerRight"></div>
          </div>
        </div>
        <div className="auth_footer"></div>
      </div>
    );
  }
}

export default Authentication;
