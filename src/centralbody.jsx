import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Feednews from "./components/feednews";
import Notifications from "./components/notifications";
import Messages from "./components/messages";
import Searcher from "./components/searcher";
import Map from "./components/map";
import Settings from "./components/settings";
// import Authentication from "./components/authentication";

import { Switch, Route, BrowserRouter } from "react-router-dom";

const CentralBody = (props) => {
  const [state, setState] = useState({
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
    classesButNav: [
      "noLightedR",
      "noLightedR",
      "noLightedR",
      "noLightedR",
      "noLightedR",
      "noLightedR",
    ],
  });

  const squareLeft = React.useRef();

  // Navbar up
  const handleUp = () => {
    // If the page is already on screen
    if (state.positions["behind"] === "onScreen") {
      return;
    }
    // if behind is hidden or if it is ""
    let newPosition = { ...state.positions };
    newPosition["behind"] = "onScreen";
    setState({ ...state, positions: newPosition });
    return;
  };

  // Navbar down
  const handleDown = () => {
    if (
      state.positions["behind"] === "hidden" ||
      state.positions["behind"] === ""
    ) {
      return;
    }
    // if behind is onScreen
    let newPosition = { ...state.positions };
    newPosition["behind"] = "hidden";
    setState({ ...state, positions: newPosition });
    return;
  };

  // For navbar color change
  const handleColor = (index) => {
    // it handles the navbar button colors
    let newArray = [
      "noLightedR",
      "noLightedR",
      "noLightedR",
      "noLightedR",
      "noLightedR",
      "noLightedR",
    ];
    newArray[index] = "lightedR";
    setState({ ...state, classesButNav: newArray });
    handleDown();
  };

  // This functions sets the color pattern for the navbar
  const setBase = () => {
    // console.log(window.location.href.split('/')[3]);
    if (window.location.href.split("/").length === 4) {
      // If the splited url length is 4
      setState({
        ...state,
        classesButNav: [
          "lightedR",
          "noLightedR",
          "noLightedR",
          "noLightedR",
          "noLightedR",
          "noLightedR",
        ],
      });
    } else if (/profile/.test(window.location.href)) {
      // if the url finishes with profile/usertest/ or profile/usertest
      setState({
        ...state,
        classesButNav: [
          "noLightedR",
          "noLightedR",
          "noLightedR",
          "noLightedR",
          "noLightedR",
          "lightedR",
        ],
      });
    }
  };

  // It closes the square of the left
  const closeSquare = () => {
    console.log("close");
    // If it is empty
    if (state.displayLeft === "") {
      return;
    }
    setBase();
    setState({ ...state, displayLeft: "hidden" });
    // setBase();
    return;
  };

  // It opens the square of the left
  const openSquare = (value) => {
    // If value is not defined
    if (value === "") {
      value = "notifications";
    }
    // else

    let newPosition = { ...state.positions };
    newPosition["notifications"] = "";
    newPosition["messages"] = "";
    newPosition["map"] = "";
    newPosition["searcher"] = "";
    newPosition[value] = "onScreen";

    setState({ ...state, positions: newPosition, displayLeft: "onScreen" });
    //Finally focus the square of the left on open
    squareLeft.current.focus();
    return;
  };

  const handleBlurSquare = (event) => {
    if (
      // If click is outside square and click is in not focusable area
      !event.currentTarget.contains(event.relatedTarget) &&
      event.relatedTarget === null
    ) {
      closeSquare();
    } else if (
      // If click is outside square and click is in buttons home or profile
      !event.currentTarget.contains(event.relatedTarget) &&
      ["feedNewsButton", "profileButton"].includes(event.relatedTarget.id)
    ) {
      closeSquare();
    } else if (
      // If click is outside square and click in focusable area that are not the buttons of the navbar
      !event.currentTarget.contains(event.relatedTarget) &&
      !/navbar-button/.test(event.relatedTarget.className)
    ) {
      closeSquare();
    }
  };

  const handleBlurSearcherContainer = (event) => {
    if (
      // If click is outside square
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      handleDown();
    }
  };

  // Which state was selected
  let divInside;
  if (state.positions["messages"] === "onScreen") {
    divInside = <Messages />;
  } else if (state.positions["map"] === "onScreen") {
    divInside = <Map />;
  } else if (state.positions["searcher"] === "onScreen") {
    divInside = <Searcher />;
  } else {
    divInside = <Notifications />;
  }
  // ---

  useEffect(() => {
    // This sets the color pattern of the navbar depending where you are
    setBase();
  }, []);

  return (
    <BrowserRouter>
      {/* The basename is /main because github puts an the repository name after the url  
         It redirects to a particular component. It can go that component with properties  */}
      <div className="PARENT">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              // if user is logged in return <Feednews />

              //else return authentication

              <Feednews />
            )}
          />
          <Route
            path="/profile/usertest/settings"
            render={() => <Settings />}
          />
          <Route path="/profile/usertest" render={() => <Profile />} />
        </Switch>
        <div
          ref={squareLeft}
          className={"square " + state.displayLeft}
          tabIndex="0"
          onBlur={handleBlurSquare}
        >
          {divInside}
        </div>
        <Navbar
          handleColor={handleColor}
          displayLeft={state.displayLeft}
          positions={state.positions}
          onUp={handleUp}
          onOpenSquare={openSquare}
          classesButNav={state.classesButNav}
          onBlurSearcherContainer={handleBlurSearcherContainer}
        />
      </div>
    </BrowserRouter>
  );
};

export default CentralBody;
