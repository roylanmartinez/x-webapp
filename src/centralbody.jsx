import React, { Component } from "react";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Feednews from "./components/feednews";
import Notifications from "./components/notifications";
import Messages from "./components/messages";
import Searcher from "./components/searcher";
import Map from "./components/map";
import Settings from "./components/settings";

import { Switch, Route, BrowserRouter } from "react-router-dom";

class CentralBody extends Component {
  state = {
    positions: {
      // upordown stores the info for the up movement and the background onscreen
      // Begind stores the boolean onScreen about the searching movement
      behind: "",
      // Normal divs
      map: "",
      messages: "",
      notifications: "",
      searcher: "",
      profile: "",
    },
    // messages, notifications and map
    displayLeft: "",
    // management of button color changes
    classesButNav: ["noLightedR","noLightedR","noLightedR","noLightedR","noLightedR","noLightedR",],
  };

  // Navbar up
  handleUp = () => {
    // If the page is already on screen
    if (this.state.positions["behind"] === "onScreen") {
      return;
    }
    // if behind is hidden or if it is ""
    let newPosition = { ...this.state.positions };
    newPosition["behind"] = "onScreen";
    this.setState({ positions: newPosition });
    return;
  };

  // Navbar down
  handleDown = () => {
    if (
      this.state.positions["behind"] === "hidden" ||
      this.state.positions["behind"] === ""
    ) {
      return;
    }
    // if behind is onScreen
    let newPosition = { ...this.state.positions };
    newPosition["behind"] = "hidden";
    this.setState({ positions: newPosition });
    return;
  };

  // For navbar color change
  handleColor = (index) => {
    // it handles the navbar button colors
    let newArray = ["noLightedR","noLightedR","noLightedR","noLightedR","noLightedR","noLightedR",
    ];
    newArray[index] = "lightedR";
    this.setState({ classesButNav: newArray });
    this.handleDown();
  };

  // This functions sets the color pattern for the navbar
  setBase = () => {
    // console.log(window.location.href.split('/')[3]);
    if (["", "main"].includes(window.location.href.split('/')[window.location.href.split('/').length - 1])) {
      // If the last element of the splitted url is "" or "main"
      this.setState({
        classesButNav: ["lightedR","noLightedR","noLightedR","noLightedR","noLightedR","noLightedR",],
      });
    } else if (/profile/.test(window.location.href.split('/')[4])) {
      // If the fourth element of the splitted url is "profile"
      this.setState({
        classesButNav: ["noLightedR","noLightedR","noLightedR","noLightedR","noLightedR","lightedR",
        ],
      });
    }
  };

  // It closes the square of the left
  closeSquare = () => {
    // If it is empty
    if (this.state.displayLeft === "") {
      return;
    }
    this.setBase();
    this.setState({ displayLeft: "hidden" });
    this.setBase();
    return;
  };

  // It opens the square of the left
  openSquare = (value) => {
    // If value is not defined
    if (value === "") {
      value = "notifications";
    }
    // else

    let newPosition = { ...this.state.positions };
    newPosition["notifications"] = "";
    newPosition["messages"] = "";
    newPosition["map"] = "";
    newPosition["searcher"] = "";
    newPosition[value] = "onScreen";

    this.setState({ positions: newPosition, displayLeft: "onScreen" });

    //Finally focus the square of the left on open
    this.squareLeft.focus();
    return;
  };

  handleBlurSquare = (event) => {
    if (
      // If click is outside square and click is in not focusable area
      !event.currentTarget.contains(event.relatedTarget) &&
      event.relatedTarget === null
    ) {
      this.closeSquare();
    } else if (
      // If click is outside square and click is in buttons home or profile
      !event.currentTarget.contains(event.relatedTarget) &&
      ["feedNewsButton", "profileButton"].includes(event.relatedTarget.id)
    ) {
      this.closeSquare();
    } else if (
      // If click is outside square and click in focusable area that are not the buttons of the navbar
      !event.currentTarget.contains(event.relatedTarget) &&
      !/navbar-button/.test(event.relatedTarget.className)
    ) {
      this.closeSquare();
    }
  };

  handleBlurSearcherContainer = (event) => {
    if (
      // If click is outside square
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      this.handleDown();
    }
  };

  componentDidMount() {
    // This sets the color pattern of the navbar depending where you are
    this.setBase();
  }

  render() {
    // Which state was selected
    let divInside;
    if (this.state.positions["messages"] === "onScreen") {
      divInside = <Messages />;
    } else if (this.state.positions["map"] === "onScreen") {
      divInside = <Map />;
    } else if (this.state.positions["searcher"] === "onScreen") {
      divInside = <Searcher />;
    } else {
      divInside = <Notifications />;
    }
    // ---

    return (
     
      <BrowserRouter>
        {/* The basename is /main because github puts an the repository name after the url  
         It redirects to a particular component. It can go that component with properties  */}
        <div className="PARENT">
          <Switch>
            <Route exact path="/" render={() => <Feednews />} />
            <Route path="/profile/usertest/settings" render={() => <Settings />} />
            <Route path="/profile/usertest" render={() => <Profile />} />
          </Switch>
          <div
            ref={(squareLeft) => {
              this.squareLeft = squareLeft;
            }}
            className={"square " + this.state.displayLeft}
            tabIndex="0"
            onBlur={this.handleBlurSquare}
          >
            {divInside}
          </div>
          <Navbar
            handleColor={this.handleColor}
            displayLeft={this.state.displayLeft}
            positions={this.state.positions}
            onUp={this.handleUp}
            onOpenSquare={this.openSquare}
            classesButNav={this.state.classesButNav}
            onBlurSearcherContainer={this.handleBlurSearcherContainer}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default CentralBody;
