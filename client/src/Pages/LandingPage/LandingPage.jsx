import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";
import { GiHummingbird } from "react-icons/gi";
const LandingPage = () => {
  return (
    <div id="tweeter">
      <div id="tweeter-main">
        <div id="tweeter-container">
          <div id="tweeter-landing">
            <GiHummingbird className="tweeter-logo" />
            <div className="tweeter-slogan">
              See what’s happening in the world right now
            </div>

            <div>
              <span>Join tweeter today.</span>
            </div>

            <div className="tweeter-accounts">
              <div className="tweeter-signup">
                <Link
                  to="/signup"
                  style={{ textDecorationLine: "none", color: "white" }}
                >
                  <a>Sign up</a>
                </Link>
              </div>

              <div className="tweeter-login">
                <a href="/login">Log in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="landing-background-container">
          <GiHummingbird
            className="tweeter-logo"
            className="tweeter-background-img"
          />

          <div className="landing-background-feat">
            <div>Follow your interests.</div>
            <div>Hear what people are talking about.</div>
            <div>Join the conversation.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
