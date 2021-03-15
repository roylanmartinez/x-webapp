import React, { useState, useEffect, useRef } from "react";

const Authentication = () => {
  const [state, setstate] = useState({
    login: null,
  });
  const header = useRef();
  const authentication = useRef();

  const handleScroll = () => {
    // scroll effect top div
    authentication.current.style.marginTop = "20px";
    header.current.style.marginTop = `${
      50 + authentication.current.scrollTop * 0.25
    }px`;
  };

  //   useEffect(() => {
  //     console.log("asdf");
  //   }, []);
  return (
    <div
      ref={authentication}
      onScroll={handleScroll}
      className="authentication"
    >
      <img
        // onClick={() => this.props.history.push("/profile/usertest")}
        className="auth_logo"
        src={require("../assets/images/logo.png").default}
        alt="Avatar"
      ></img>
      <div className="auth">
        <div ref={header} className="auth_header">
          <div className="auth_headerBack">
            <div className="auth_register_cont">
              <div
                className={
                  "auth_register" +
                  (state.login === null
                    ? ""
                    : state.login
                    ? " auth_animation_left"
                    : " auth_animation_right")
                }
              >
                <h1 style={{ color: "white" }}>register</h1>
              </div>
            </div>
            <div className="auth_login_cont">
              <div
                className={
                  "auth_login" +
                  (state.login === null
                    ? ""
                    : state.login
                    ? " auth_animation_left_login"
                    : " auth_animation_right_login")
                }
              >
                <h1 style={{ color: "white", marginLeft: "40px" }}>login</h1>
              </div>
            </div>
          </div>
          <div
            onClick={() => setstate({ ...state, login: !state.login })}
            className={
              "auth_headerFront" +
              (state.login === null
                ? ""
                : state.login
                ? " auth_animation_right"
                : " auth_animation_left")
            }
          >
            <div className="auth_headerFront_bottom">
              <div
                className={
                  "auth_headerFront_left" +
                  (state.login === null
                    ? ""
                    : state.login
                    ? " auth_headerFront_left_anim"
                    : " auth_headerFront_left_anim_inv")
                }
                // className="auth_headerFront_left"
              >
                <h4 className="auth_description">
                  Designed for restaurant lovers{" "}
                  <span style={{ fontSize: "16px" }}>❤️</span>
                </h4>
                <h1 className="auth_title">restghfghf</h1>
              </div>
              <div className="auth_headerFront_right">
                <h4 className="auth_description auth_description_register">
                  Are you a restaurant lover?{" "}
                  <span style={{ fontSize: "16px" }}>❤️</span>
                </h4>
                <h1 className="auth_title">restghfghf</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auth_footer"></div>
    </div>
  );
};

export default Authentication;
