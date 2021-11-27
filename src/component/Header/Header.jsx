import React, { useState } from "react";
import "./header.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import video from "./produc.mp4";
import { IframVideo } from "./IframVideo";

function Header() {
  const [handelVideo, sethandelVideo] = useState(false);
  const playVideo = () => {
    sethandelVideo(true);
  };
  const closeVid = () => {
    sethandelVideo(false);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 m-auto col-md-8">
              <Fade left>
                <h1 className="mb-4">
                  Work on big ideas , <br />
                  Without the busywork
                </h1>
                <p className="text-color-header my-4">
                  Project management software shouldn’t be hard Plan your team’s
                  work, know who’s working on what , and deliver results
                  intuitively with minimal tracking
                </p>
              </Fade>
              <Fade bottom>
                <div className="btns mt-5">
                  <button
                    type="button"
                    className="btn shadow bg-white text-color-header me-4 btn-hover"
                    onClick={playVideo}
                  >
                    Watch Video
                  </button>
                  {handelVideo ? (
                    <>
                      {" "}
                      <IframVideo className="videoo" />
                      <button onClick={closeVid}>x</button>
                    </>
                  ) : (
                    ""
                  )}
                  <button type="button" className="btn shadow btn2-hover">
                    <Link
                      className="btn-link text-decoration-none "
                      to="/SignUp"
                    >
                      Start For free
                    </Link>
                  </button>
                </div>
              </Fade>
            </div>
            <Fade right>
              <div className="col-lg-6 mt-lg-0 mt-4 d-flex justify-content-lg-end">
                <img
                  className="header-img w-75"
                  src="../../assets/header.png"
                  alt=""
                />
              </div>
            </Fade>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
