import React, { Component } from "react";

class Searcher extends Component {
  state = {};

  render() {
    return (
      <div className="searcher">
        <div className="wrapperSearcherInput">
          <i className="navbarIcon fas fa-search"></i>
          <input
            placeholder="Thinking? Try the near me button"
            className="inputSearch"
          ></input>
        </div>
        <div className="hrSearch"></div>
        {/* <hr className="hrSearch profile" /> */}
        <h1 style={{ color: "rgb(179, 179, 179)" }}>Resultados</h1>
      </div>
    );
  }
}

export default Searcher;
