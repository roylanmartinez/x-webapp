import React, { Component } from "react";

class Authentication extends Component {
  state = {};

  handleScroll = () => {
    console.log(this.au1.scrollTop);
    // this.au.style.marginTop = "20px";
    this.au.style.paddingTop = `${this.au1.scrollTop * 2}px`;
    // console.log(this.au.style.marginTop);
  };

  render() {
    return (
      <div
        ref={(au1) => {
          this.au1 = au1;
        }}
        onScroll={this.handleScroll}
        className="authentication"
      >
        <div className="auth">
          <div
            ref={(au) => {
              this.au = au;
            }}
            className="auth_header"
          >
            <div className="auth_headerLeft">
              <h4 className="auth_description">
                Designed for restaurant lovers
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
