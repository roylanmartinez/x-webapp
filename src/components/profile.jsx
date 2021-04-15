import React, { Component, useState } from "react";
// import UploadReview from "./uploadreview";
import UploadReview from "./ur";
import BigPost from "./bigPost";
import datos_test from "./datos";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  state = {
    profilePhotoPopUp: false,
    layer: null,
  };
  handleBlurPhotoProfile = (event) => {
    if (event.relatedTarget !== null) {
      // If click is not null
      if (event.relatedTarget.className === "profileImageContainer") {
        // If click is not null and it is in profile Image
        this.editProfile.blur();
      } else if (event.currentTarget.contains(event.relatedTarget)) {
        // If click is inside popUp
        this.editProfile.blur();
      } else {
        // If click is not null and it is somewhere else than in Profile Image or popUp
        this.editProfile.blur();
        this.setState({ profilePhotoPopUp: false });
      }
    } else {
      // If click is outside popUp and it is null
      this.editProfile.blur();
      this.setState({ profilePhotoPopUp: false });
    }
  };

  handleCloseLayer = (event) => {
    this.props.history.push("/profile/usertest/");
    this.setState({ layer: null });
  };

  handleCloseOnClick = (event) => {
    // It handles the close effect of the followers div
    // This function to work needs to handle a click inside a div whoose className contains "Background"
    if (event.target.className.includes("Background")) {
      this.handleCloseLayer();
    }
  };

  render() {
    let layer;
    if (
      // if the url finishes with profile/usertest/ or profile/usertest
      /profile\/usertest(|\/)$/.test(window.location.href) &&
      // if there are not div layers over the profile section
      this.state.layer === null
    ) {
      document.body.style.overflow = "unset";
      layer = null;
    } else if (this.state.layer === "viewPhoto") {
      // Block scroll Feature
      document.body.style.overflow = "hidden";
      layer = (
        <LayerViewPhoto closeLayer={this.handleCloseLayer}></LayerViewPhoto>
      );
    } else if (this.state.layer === "uploadReview") {
      // Block scroll Feature
      document.body.style.overflow = "hidden";
      layer = (
        <UploadReview
          onClickBackground={this.handleCloseOnClick}
          onBlur={this.handleCloseLayer}
        ></UploadReview>
      );
    } else if (
      /profile\/usertest\/followers(|\/)$/.test(window.location.href)
    ) {
      // Block scroll Feature
      document.body.style.overflow = "hidden";
      layer = (
        <LayerFollowers
          setStateProfile={this.handleCloseLayer}
          closeLayer={this.handleCloseOnClick}
          type="followers"
          thisPropsHistory={this.props.history}
          onBlur={this.handleCloseLayer}
        ></LayerFollowers>
      );
    } else if (
      /profile\/usertest\/following(|\/)$/.test(window.location.href)
    ) {
      // Block scroll Feature
      document.body.style.overflow = "hidden";
      layer = (
        <LayerFollowers
          setStateProfile={this.handleCloseLayer}
          closeLayer={this.handleCloseOnClick}
          type="following"
          thisPropsHistory={this.props.history}
        ></LayerFollowers>
      );
    } else if (
      /profile\/usertest\/bigpost\/[0-9]+(|\/)$/.test(window.location.href)
    ) {
      // Block scroll Feature
      document.body.style.overflow = "hidden";
      layer = (
        <BigPost
          onClose={this.handleCloseLayer}
          onClickBackground={this.handleCloseOnClick}
          thisPropsHistoryPush={this.props.history.push}
        ></BigPost>
      );
    }
    return (
      <div className="profile">
        {layer}
        <div
          ref={(editProfile) => {
            this.editProfile = editProfile;
          }}
          tabIndex="-1"
          className={
            "layer-editPhoto" +
            (this.state.profilePhotoPopUp ? " onScreen" : "")
          }
          onBlur={this.handleBlurPhotoProfile}
        >
          <button
            onClick={() => this.setState({ layer: "viewPhoto" })}
            className="layer-editPhotoText0"
          >
            <div className="layer-editPhoto0-arrow"></div>View profile photo
          </button>
          <button
            onClick={() => {
              console.log("asd");
              // this.setState({ layer: "editProfile" });
            }}
            className="layer-editPhotoText1"
          >
            <label htmlFor="file-profileImage" className="layer-editPhotoText1">
              Upload profile photo
            </label>
          </button>
          <input id="file-profileImage" type="file" />
          <button
            onClick={() => {
              console.log("asd");
              // this.setState({ layer: "viewPhoto" });
            }}
            className="layer-editPhotoText2"
          >
            Delete profile photo
          </button>
        </div>
        <div className="leftProfile divProfile"></div>
        <div className="rightProfile">
          <div className="rightProfile0 divProfile">
            <h5 className="profileType">Reviewer</h5>
            <div className="profileImageContainerContainer">
              <button
                className="profileImageContainer"
                onClick={() => {
                  // Profile Image Click
                  if (this.state.profilePhotoPopUp === false) {
                    this.setState({ profilePhotoPopUp: true });
                    this.editProfile.focus();
                  } else {
                    this.setState({ profilePhotoPopUp: false });
                  }
                }}
              >
                <img
                  className="profileImage"
                  src={require("../assets/images/profileImage.jpeg").default}
                  alt="Avatar"
                ></img>
                <i className="fas fa-camera fa-camera-profilePhoto"></i>
              </button>
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary buttonRightProfile0"
              onClick={() => {
                this.props.history.push(
                  "/profile/usertest/settings/editprofile"
                );
              }}
            >
              <i className="fas fa-user-cog"></i> Edit profile
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary buttonRightRightProfile0"
              onClick={() => {
                this.props.history.push("/profile/usertest/settings/privacy");
              }}
            >
              <i className="fas fa-cog"></i>
            </button>
            <h1 className="profileName">Name Lastname</h1>
            <h3 className="profileUserName">@username1</h3>

            <small className="profileBiography">asdfasdfasdf</small>
            <div className="containerFollowers">
              <h5 className="followersText">
                <b>10</b> reviews
              </h5>
              <h5
                className="followersText followersProfile"
                onClick={() => {
                  this.setState({ layer: "followers" });
                  this.props.history.push("/profile/usertest/followers");
                }}
              >
                <b>140</b> followers
              </h5>
              <h5
                className="followersText followersProfile"
                onClick={() => {
                  this.setState({ layer: "following" });
                  this.props.history.push("/profile/usertest/following");
                }}
              >
                <b>200</b> following
              </h5>
            </div>
          </div>

          <div className="rightProfile1 divProfile">
            <div
              onClick={() => {
                this.setState({ layer: "uploadReview" });
              }}
              className="wrapperAdd"
            >
              <i className="fas fa-arrow-circle-up fa-arrow-circle-up-RP1"></i>
              <input
                placeholder="Where have you been?"
                className="inputSearch profile"
              ></input>
            </div>
            <div className="hrUpload"></div>
            <div className="buttonUploadWrapper">
              <button className="buttonProfile buttonUpload">
                <h5 className="textButtonProfile textButtonRP1">
                  <i className="fas fa-camera fa-camera-buttonUpload"></i> Add
                  photo
                </h5>
              </button>
              <button className="buttonProfile buttonUpload">
                <h5 className="textButtonProfile textButtonRP1">
                  <i className="fas fa-map-marker-alt fa-map-marker-alt-buttonUpload"></i>
                  Store
                </h5>
              </button>
              <button className="buttonProfile buttonUpload">
                <h5 className="textButtonProfile textButtonRP1">
                  <i className="far fa-square"></i> Rating
                </h5>
              </button>
              <button className="buttonProfile buttonUpload">
                <h5 className="textButtonProfile textButtonRP1">
                  <i className="fas fa-check fa-plus-circle-buttonUpload"></i>
                  Post
                </h5>
              </button>
            </div>
          </div>

          <ProfileSlider
            onOpenBigPost={(datos = null) => {
              this.props.history.push(`/profile/usertest/bigpost/${datos.id}`);
              this.setState({ layer: "bigPost" });
            }}
          ></ProfileSlider>
        </div>
      </div>
    );
  }
}

// Function to convert nominal punctuation to sign punctuation

const punctuation = (number) => {
  if (number === 0 || number === 5) {
    return number === 5 ? "■■■■■" : "▢▢▢▢▢";
  } else {
    return "■".repeat(number) + "▢".repeat(5 - number);
  }
};

// hooks

const LayerViewPhoto = (props) => {
  return (
    <div
      className="layer-profileBackground-ViewPhoto"
      onClick={props.closeLayer}
    >
      <div className="profileImageContainerBig">
        <img
          className="profileImageBig"
          src={require("../assets/images/profileImage.jpeg").default}
          alt="Avatar"
        ></img>
        <h3 className="profileUserName ml-5 mt-5">@usertest</h3>
      </div>
    </div>
  );
};

const ButtonFollow = (props) => {
  const [following, setFollowing] = useState(props.following);

  return (
    <button
      type="button"
      className={
        (following
          ? "btn btn-dark btn-dark-EditProfileLayer"
          : "btn btn-info btn-info-EditProfileLayer") +
        " profileContainerListFollowers-button"
      }
      onClick={() => setFollowing(!following)}
    >
      {following ? "Following" : "Follow"}
    </button>
  );
};

const LayerFollowers = (props) => {
  const [type, setType] = useState(props.type);
  let container;
  if (type === "followers") {
    container = (
      <div className="profileContainerListFollowers">
        {/* {"_hernestofernandez,azucenamartinez1,laurii_martinez,camila_martinez,alfonsorodriguez1,dinamartin11"
                  .repeat(5)
                  .split(",")
                  .reverse()
                  .map((name) => {
                    return (
                      <div className="profileContainerListFollowers-section">
                        <img
                          className="profileContainerListFollowers-image"
                          src={require("../assets/images/profileImage.jpeg")}
                          alt="Avatar"
                        ></img>
                        <h6 className="profileContainerListFollowers-text">
                          {name} <small>asdasd</small>
                        </h6>

                        <ButtonFollow following={true} />
                      </div>
                    );
                  })} */}
        <div className="profileContainerListFollowers-section">
          <img
            className="profileContainerListFollowers-image"
            src={require("../assets/images/profileImage.jpeg").default}
            alt="Avatar"
          ></img>
          <h6 className="profileContainerListFollowers-text">
            Roylan Martinez <small>asdasd</small>
          </h6>

          <ButtonFollow following={true} />
        </div>
      </div>
    );
  } else {
    container = (
      <div className="profileContainerListFollowers">
        {/* {"hernesto fernandez,azucena martinez,laura martinez,camila martinez,alfonso rodriguez,dina martin"
                  .repeat(5)
                  .split(",")
                  .map((name) => {
                    return (
                      <div className="profileContainerListFollowers-section">
                        <img
                          className="profileContainerListFollowers-image"
                          src={require("../assets/images/profileImage.jpeg")}
                          alt="Avatar"
                        ></img>
                        <h6 className="profileContainerListFollowers-text">
                          {name} <small>asdasd</small>
                        </h6>

                        <ButtonFollow following={true} />
                      </div>
                    );
                  })} */}
        <div className="profileContainerListFollowers-section">
          <img
            className="profileContainerListFollowers-image"
            src={require("../assets/images/profileImage.jpeg").default}
            alt="Avatar"
          ></img>
          <h6 className="profileContainerListFollowers-text">
            Betania Martinez
            <small>asdasd</small>
          </h6>

          <ButtonFollow following={true} />
        </div>
      </div>
    );
  }

  return (
    <div onClick={props.closeLayer} className="layer-profileBackground">
      <div className="containerProfileFollowers">
        <div
          className={"uploadReviewReturn"}
          onClick={() => {
            props.thisPropsHistory.push("/profile/usertest");
            props.setStateProfile();
          }}
        >
          <i className="fas fa-arrow-left fa-arrow-leftReview"></i>
          <h5 className="uploadReviewContainerTitle"> Upload review</h5>
        </div>
        <div className="containerProfileFollowersHead">
          <button
            className={
              "buttonLayerFollowing " + (type === "followers" ? "on" : "off")
            }
            onClick={() => {
              setType("followers");
              props.thisPropsHistory.push("/profile/usertest/followers");
            }}
          >
            Followers
          </button>
          <button
            className={
              "buttonLayerFollowing " + (type === "following" ? "on" : "off")
            }
            onClick={() => {
              setType("following");
              props.thisPropsHistory.push("/profile/usertest/following");
            }}
          >
            Following
          </button>
        </div>
        {container}
      </div>
      <i
        onClick={() => {
          props.thisPropsHistory.push("/profile/usertest");
          props.setStateProfile();
        }}
        className="fas fa-times closeLayerEditProfile"
      ></i>
    </div>
  );
};

const ProfileSlider = (props) => {
  const [lastDiv, setLastDiv] = useState("grid");
  let lastDivProfile;
  if (lastDiv === "grid") {
    lastDivProfile = <Review onOpenBigPost={props.onOpenBigPost} />;
  } else if (lastDiv === "list") {
    lastDivProfile = <ProfileReviewHistory />;
  } else if (lastDiv === "favourite") {
    lastDivProfile = <ProfileFavourite />;
  }
  return (
    <React.Fragment>
      <div className="rightProfile2 divProfile">
        <div className="wrapperButtonRP2">
          <button
            className="buttonProfile buttonRP2 "
            onClick={() => setLastDiv("grid")}
          >
            <h5
              className={
                "textButtonProfile textRP2 " +
                (lastDiv === "grid" ? " activeRP2" : "")
              }
            >
              <i className="fas fa-th-large"></i> Reviews
            </h5>
          </button>
          <button
            className="buttonProfile buttonRP2 "
            onClick={() => setLastDiv("list")}
          >
            <h5
              className={
                "textButtonProfile textRP2 " +
                (lastDiv === "list" ? " activeRP2" : "")
              }
            >
              <i className="far fa-bookmark"></i> Saved
            </h5>
          </button>
          <button
            className="buttonProfile buttonRP2 "
            onClick={() => setLastDiv("favourite")}
          >
            <h5
              className={
                "textButtonProfile textRP2 " +
                (lastDiv === "favourite" ? " activeRP2" : "")
              }
            >
              <i className="far fa-heart"></i> Favourite
            </h5>
          </button>
        </div>
      </div>

      {
        // it returns review, history or the liked section
        lastDivProfile
      }
    </React.Fragment>
  );
};

const Review = (props) => {
  return (
    <div className="rightProfile3 divProfile">
      {datos_test.map((datos) => (
        <Media
          key={datos.id}
          onOpenBigPost={props.onOpenBigPost}
          datos={datos}
        />
      ))}
    </div>
  );
};

const Media = (props) => {
  // name, alt, points, video = false
  if (!props.datos.name) {
    // if the is no name then return nothing avoids to search for a media that does not exists
    return null;
  } else if (!props.datos.image) {
    // if the media is a video return specific format

    return (
      <div onClick={props.onOpenBigPost} className="photoRP3">
        <video
          controls
          className="photoRP3Blur"
          src={require(`../assets/videos/${props.name}`).default}
          alt={props.alt}
        ></video>
        <div className="photoRP3Info">
          <h5 className="photoRP3Info-place">
            <i className="fas fa-map-marker-alt"></i> Restaurante Segundo
          </h5>
          <h1 className="photoRP3Info-points">{props.points}</h1>
          <h5 className="photoRP3Info-date">February 6</h5>
        </div>
      </div>
    );
  } else if (props.datos.image) {
    // if the media is a photo return specific format
    return (
      <div
        onClick={() => props.onOpenBigPost(props.datos)}
        className="photoRP3"
      >
        <img
          className="photoRP3Blur"
          src={require(`../assets/images/test${props.datos.image}.jpg`).default}
          alt={props.datos.alt}
        ></img>
        <img
          className="photoRP3"
          src={require(`../assets/images/test${props.datos.image}.jpg`).default}
          alt={props.datos.alt}
        ></img>
        <div className="photoRP3Info">
          <h5 className="photoRP3Info-place">
            <i className="fas fa-map-marker-alt"></i> {props.datos.name}
          </h5>
          <h1 className="photoRP3Info-points">
            {punctuation(props.datos.points)}
          </h1>
          <h5 className="photoRP3Info-date">February 6</h5>
        </div>
      </div>
    );
  }
};

const ProfileReviewHistory = () => {
  return (
    <React.Fragment>
      <div className="rightProfile3 divProfile">
        <div className="historyDiv-RP3">
          <i className="fas fa-map-marker-alt historyDiv-RP3-icon"></i>
          <div>
            <h5 className="historyDiv-RP3-text">Restaurante el Torero</h5>
            <small className="historyDiv-RP3-small">February 6</small>
          </div>
          <h3 className="historyDiv-RP3-points">10</h3>
        </div>
        <div className="historyDiv-RP3">
          <i className="fas fa-map-marker-alt historyDiv-RP3-icon"></i>
          <div>
            <h5 className="historyDiv-RP3-text">Anonymous</h5>
            <small className="historyDiv-RP3-small">February 6</small>
          </div>
          <h3 className="historyDiv-RP3-points">?</h3>
        </div>
        <div className="historyDiv-RP3">
          <i className="fas fa-map-marker-alt historyDiv-RP3-icon"></i>
          <div>
            <h5 className="historyDiv-RP3-text">Doner Kebab Estambul</h5>
            <small className="historyDiv-RP3-small">February 6</small>
          </div>
          <h3 className="historyDiv-RP3-points">5</h3>
        </div>
        <div className="historyDiv-RP3">
          <i className="fas fa-map-marker-alt historyDiv-RP3-icon"></i>
          <div>
            <h5 className="historyDiv-RP3-text">Restaurante Casa Blanca</h5>
            <small className="historyDiv-RP3-small">February 6</small>
          </div>
          <h3 className="historyDiv-RP3-points">7</h3>
        </div>
        <div className="historyDiv-RP3">
          <i className="fas fa-map-marker-alt historyDiv-RP3-icon"></i>
          <div>
            <h5 className="historyDiv-RP3-text">Doner Kebab Estambul</h5>
            <small className="historyDiv-RP3-small">February 6</small>
          </div>
          <h3 className="historyDiv-RP3-points">9</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

const ProfileFavourite = () => {
  return (
    <React.Fragment>
      <div className="rightProfile3 divProfile">
        <div className="historyDiv-RP3">
          <i className="fas fa-heart historyDiv-RP3-icon"></i>
          <div>
            <h5 className="historyDiv-RP3-text">Restaurante el Torero</h5>
            <small className="historyDiv-RP3-small">February 6</small>
          </div>
          <h3 className="historyDiv-RP3-points">10</h3>
        </div>
        <div className="historyDiv-RP3">
          <i className="fas fa-heart historyDiv-RP3-icon"></i>
          <div>
            <h5 className="historyDiv-RP3-text">Doner Kebab Estambul</h5>
            <small className="historyDiv-RP3-small">February 6</small>
          </div>
          <h3 className="historyDiv-RP3-points">5</h3>
        </div>
        <div className="historyDiv-RP3">
          <i className="fas fa-heart historyDiv-RP3-icon"></i>
          <div>
            <h5 className="historyDiv-RP3-text">Restaurante Casa Blanca</h5>
            <small className="historyDiv-RP3-small">February 6</small>
          </div>
          <h3 className="historyDiv-RP3-points">7</h3>
        </div>
        <div className="historyDiv-RP3">
          <i className="fas fa-heart historyDiv-RP3-icon"></i>
          <div>
            <h5 className="historyDiv-RP3-text">Doner Kebab Estambul</h5>
            <small className="historyDiv-RP3-small">February 6</small>
          </div>
          <h3 className="historyDiv-RP3-points">9</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Profile);
