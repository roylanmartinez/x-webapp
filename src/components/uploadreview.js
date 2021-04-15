import React, { useEffect, useState } from "react";

const UploadReview = (props) => {
  const [state, setState] = useState({
    // rating will be the patreon when mouse exits the div
    rating: [true, true, true, true, true],
    ratingHover: [true, true, true, true, true],
    price: [true, true, true, true, true],
    priceHover: [true, true, true, true, true],
    time: [true, true, true, true, true],
    timeHover: [true, true, true, true, true],
    image: 0,
    imageLen: 0,
  });

  const textArea = React.useRef();
  const hiddenUpload = React.useRef();

  const handleHiddenUpload = (event) => {
    hiddenUpload.current.click();
  };

  const handleHiddenChange = (event) => {
    const images = [...Array(event.target.files.length).keys()];
    setState({
      image: images.map((number) =>
        URL.createObjectURL(event.target.files[number])
      ),
      imageLen: event.target.files.length,
    });
  };

  useEffect(() => {
    textArea.focus();
  });
  return (
    <div onClick={props.onClickBackground} className="layer-profileBackground">
      <div className="uploadReviewContainer">
        <div className={"uploadReviewReturn"} onClick={props.onBlur}>
          <i className="fas fa-arrow-left fa-arrow-leftReview"></i>
          <h5 className="uploadReviewContainerTitle"> Upload review</h5>
        </div>

        <div className="editProfileHeader">
          <img
            onClick={props.onBlur}
            className="editProfileHeaderImage ml-5"
            src={require("../assets/images/profileImage.jpeg").default}
            alt="Avatar"
          ></img>
          <h3 onClick={props.onBlur} className="editProfileHeaderText">
            @martitagarcia
          </h3>
        </div>
        <small onClick={props.onBlur} className="editProfileHeaderTextSmall">
          View profile
        </small>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <textarea
            placeholder="What about the Restaurant? You liked it?"
            ref={textArea}
            className="uploadReviewContainerTextArea"
          ></textarea>
        </div>

        <div className="uploadReviewMiddle">
          <div
            onMouseLeave={() => {
              setState({ priceHover: state.price });
            }}
            className="uploadReviewMiddlePunctuationC"
          >
            <div
              onMouseEnter={() => {
                setState({
                  priceHover: [true, false, false, false, false],
                });
              }}
              onClick={() => {
                setState({
                  price: [true, false, false, false, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.priceHover[0] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  priceHover: [true, true, false, false, false],
                });
              }}
              onClick={() => {
                setState({
                  price: [true, true, false, false, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.priceHover[1] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  priceHover: [true, true, true, false, false],
                });
              }}
              onClick={() => {
                setState({
                  price: [true, true, true, false, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.priceHover[2] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  priceHover: [true, true, true, true, false],
                });
              }}
              onClick={() => {
                setState({
                  price: [true, true, true, true, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.priceHover[3] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  priceHover: [true, true, true, true, true],
                });
              }}
              onClick={() => {
                setState({
                  price: [true, true, true, true, true],
                });
              }}
              className={
                "UploadReviewSquares" + (state.priceHover[4] ? " on" : "")
              }
            ></div>
          </div>

          <h5 className="uploadReviewMiddlePuntuation">
            Price was
            <b>
              {`
              ${
                ["bad", "inferior", "satisfactory", "good", "perfect"][
                  state.priceHover.lastIndexOf(true)
                ]
              } `}
            </b>
          </h5>
        </div>

        <div className="uploadReviewMiddle">
          <div
            onMouseLeave={() => {
              setState({ timeHover: state.time });
            }}
            className="uploadReviewMiddlePunctuationC"
          >
            <div
              onMouseEnter={() => {
                setState({
                  timeHover: [true, false, false, false, false],
                });
              }}
              onClick={() => {
                setState({
                  time: [true, false, false, false, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.timeHover[0] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  timeHover: [true, true, false, false, false],
                });
              }}
              onClick={() => {
                setState({
                  time: [true, true, false, false, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.timeHover[1] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  timeHover: [true, true, true, false, false],
                });
              }}
              onClick={() => {
                setState({
                  time: [true, true, true, false, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.timeHover[2] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  timeHover: [true, true, true, true, false],
                });
              }}
              onClick={() => {
                setState({
                  time: [true, true, true, true, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.timeHover[3] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  timeHover: [true, true, true, true, true],
                });
              }}
              onClick={() => {
                setState({
                  time: [true, true, true, true, true],
                });
              }}
              className={
                "UploadReviewSquares" + (state.timeHover[4] ? " on" : "")
              }
            ></div>
          </div>

          <h5 className="uploadReviewMiddlePuntuation">
            Speed was
            <b>
              {`
              ${
                ["bad", "inferior", "satisfactory", "good", "perfect"][
                  state.timeHover.lastIndexOf(true)
                ]
              } `}
            </b>
          </h5>
        </div>
        <div className="uploadReviewMiddle">
          <div
            onMouseLeave={() => {
              setState({ ratingHover: state.rating });
            }}
            className="uploadReviewMiddlePunctuationC"
          >
            <div
              onMouseEnter={() => {
                setState({
                  ratingHover: [true, false, false, false, false],
                });
              }}
              onClick={() => {
                setState({
                  rating: [true, false, false, false, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.ratingHover[0] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  ratingHover: [true, true, false, false, false],
                });
              }}
              onClick={() => {
                setState({
                  rating: [true, true, false, false, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.ratingHover[1] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  ratingHover: [true, true, true, false, false],
                });
              }}
              onClick={() => {
                setState({
                  rating: [true, true, true, false, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.ratingHover[2] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  ratingHover: [true, true, true, true, false],
                });
              }}
              onClick={() => {
                setState({
                  rating: [true, true, true, true, false],
                });
              }}
              className={
                "UploadReviewSquares" + (state.ratingHover[3] ? " on" : "")
              }
            ></div>
            <div
              onMouseEnter={() => {
                setState({
                  ratingHover: [true, true, true, true, true],
                });
              }}
              onClick={() => {
                setState({
                  rating: [true, true, true, true, true],
                });
              }}
              className={
                "UploadReviewSquares" + (state.ratingHover[4] ? " on" : "")
              }
            ></div>
          </div>

          <h5 className="uploadReviewMiddlePuntuation">
            Experience was
            <b>
              {`
              ${
                ["bad", "inferior", "satisfactory", "good", "perfect"][
                  state.ratingHover.lastIndexOf(true)
                ]
              }`}
            </b>
          </h5>
        </div>
        <div
          className={
            "" +
            (state.imageLen === 0
              ? "displayNone"
              : "uploadReviewImagesContainer")
          }
        >
          {
            // It tests if there are images in the image holder, if there are the it would create a div holder
            // for all them
            state.imageLen === 0
              ? ""
              : state.image.map((image) => (
                  <div className={"imagesUploadedReviewContainer"}>
                    <img
                      key={image.id}
                      className={"imagesUploadedReview"}
                      src={image}
                      alt="images uploaded"
                    ></img>
                  </div>
                ))
          }
        </div>
        <div className="buttonUploadWrapper">
          <button
            onClick={handleHiddenUpload}
            className="buttonProfile buttonUpload"
          >
            <h5 className="textButtonProfile textButtonRP1">
              <i className="fas fa-camera fa-camera-buttonUpload"></i> Add photo
            </h5>
          </button>
          <input
            multiple
            ref={hiddenUpload}
            onChange={handleHiddenChange}
            style={{ display: "none" }}
            accept="image/*"
            type="file"
          />
          <button className="buttonProfile buttonUpload">
            <h5 className="textButtonProfile textButtonRP1">
              <i className="fas fa-map-marker-alt fa-map-marker-alt-buttonUpload"></i>
              Store
            </h5>
          </button>
          <button
            className="buttonProfile buttonUpload"
            onClick={() =>
              setState({
                rating: [true, true, true, true, true],
                ratingHover: [true, true, true, true, true],
                price: [true, true, true, true, true],
                priceHover: [true, true, true, true, true],
                time: [true, true, true, true, true],
                timeHover: [true, true, true, true, true],
              })
            }
          >
            <h5 className="textButtonProfile textButtonRP1">
              <i className="far fa-square fa-square-buttonUpload"></i> Rating
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

      <i
        onClick={props.onBlur}
        className="fas fa-times closeLayerEditProfile"
      ></i>
    </div>
  );
};

export default UploadReview;
