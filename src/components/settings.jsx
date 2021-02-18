import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Settings extends Component {
  state = {
    type: "editProfile",
  };
  componentDidMount() {
    if (
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ] === "editprofile"
    ) {
      // if url matches with editprofile
      this.setState({ type: "editProfile" });
    } else if (
      // if url matches with password

      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ] === "password"
    ) {
      this.setState({ type: "password" });
    } else if (
      // if url matches with privacy

      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ] === "privacy"
    ) {
      this.setState({ type: "privacy" });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("asdasd");
  //   if (
  //     prevProps.isMounted &&
  //     !this.props.isMounted &&
  //     prevState !== this.state
  //   ) {
  //     console.log("asdasd");

  //   } else if (!prevProps.isMounted && this.props.isMounted) {
  //     // this.setState({ shouldRender: true });
  //   }
  // }

  render() {
    let type;
    if (this.state.type === "editProfile") {
      type = (
        <div>
          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile">Name</h6>
            <input className="inputEditProfile"></input>
          </div>
          <div className="editProfileInnerSection">
            <small className="inputEditProfileSmallAdditional">
              By using your real name you can help others to find you. <br></br>
              <b>Rememeber it cannot be changed twice in a month.</b>
            </small>
          </div>

          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile"> User Name</h6>
            <input className="inputEditProfile"></input>
          </div>
          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile"> Bio</h6>
            <textarea className="inputEditProfileTextArea"></textarea>
          </div>
          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile"> Email</h6>
            <input id="asd1" type="email" className="inputEditProfile"></input>
          </div>
          <button type="button" className="btn btn-dark buttonSaveEditProfile">
            Update profile
          </button>
        </div>
      );
    } else if (this.state.type === "password") {
      type = (
        <div>
          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile">Last password</h6>
            <input className="inputEditProfile"></input>
          </div>
          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile">New password</h6>
            <input className="inputEditProfile"></input>
          </div>
          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile">Confirm password</h6>
            <input className="inputEditProfile"></input>
          </div>

          <div className="editProfileInnerSection">
            <small className="inputEditProfileSmallAdditional">
              By using your real name you can help others to find you. <br></br>
              <b>Rememeber it cannot be changed twice in a month.</b>
            </small>
          </div>
          <button type="button" className="btn btn-dark buttonSaveEditProfile">
            Update password
          </button>
        </div>
      );
    } else if (this.state.type === "privacy") {
      type = (
        <form action="">
          <div className="editProfileInnerSection">
            <small className="textEditProfileSmallTitle">
              <b>Your current Profile is Private</b>
            </small>
          </div>
          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile">Public</h6>
            <input
              type="radio"
              name="privacy"
              value="public"
              className="inputRadioEditProfile"
            ></input>
            <small className="inputEditProfileSmallFontRadio">
              Everyone can visit and view your profile
            </small>
          </div>
          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile">Users</h6>
            <input
              type="radio"
              name="privacy"
              value="publicFriends"
              className="inputRadioEditProfile"
            ></input>
            <small className="inputEditProfileSmallFontRadio">
              People with an account in the platform can visit and view your
              profile
            </small>
          </div>
          <div className="editProfileInnerSection">
            <h6 className="textInputEditProfile">Friends</h6>
            <input
              type="radio"
              name="privacy"
              value="private"
              className="inputRadioEditProfile"
            ></input>
            <small className="inputEditProfileSmallFontRadio">
              Just your friends can visit and view your profile
            </small>
          </div>
          <button type="button" className="btn btn-dark buttonSaveEditProfile">
            Update privacy
          </button>
        </form>
      );
    }
    return (
      <div className="layer-profileBackground-EditProfile">
        <div className="editProfileContainer">

          <div className="uploadReviewReturn" onClick={() =>
                  this.props.history.push("/profile/usertest")
                }>
            <i className="fas fa-arrow-left fa-arrow-leftReview"></i>
            <h5 className="uploadReviewContainerTitle"> Upload review</h5>
          </div>


          <div className="editProfileLeftHeaders">
            <button
              className={
                "buttonEditProfileLeft " +
                (this.state.type === "editProfile" ? "on" : "off")
              }
              onClick={() => {
                this.setState({ type: "editProfile" });
                this.props.history.push(
                  "/profile/usertest/settings/editprofile"
                );
              }}
            >
              Edit profile
            </button>
            <button
              className={
                "buttonEditProfileLeft " +
                (this.state.type === "password" ? "on" : "off")
              }
              onClick={() => {
                this.setState({ type: "password" });
                this.props.history.push(
                  "/profile/usertest/settings/password"
                );
              }}
            >
              Password
            </button>
            <button
              className={
                "buttonEditProfileLeft " +
                (this.state.type === "privacy" ? "on" : "off")
              }
              onClick={() => {
                this.setState({ type: "privacy" });
                this.props.history.push(
                  "/profile/usertest/settings/privacy"
                );
              }}
            >
              Privacy
            </button>
          </div>
          
          <div className="editProfileInner">
            <div className="editProfileHeader">
              <img
                onClick={() =>
                  this.props.history.push("/profile/usertest")
                }
                className="editProfileHeaderImage"
                src={require("../assets/images/profileImage.jpeg").default}
                alt="Avatar"
              ></img>
              <h3
                onClick={() =>
                  this.props.history.push("/profile/usertest")
                }
                className="editProfileHeaderText"
              >
                @username1
              </h3>
            </div>
            <small
              onClick={() =>
                this.props.history.push("/profile/usertest")
              }
              className="editProfileHeaderTextSmall"
            >
              View profile
            </small>
            {type}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Settings);
