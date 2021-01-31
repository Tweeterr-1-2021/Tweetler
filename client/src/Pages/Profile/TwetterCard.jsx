import React from "react";
import { GoComment } from "react-icons/go";
import { RiRepeat2Fill } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";

import "./cardStyle.css";
import { colors } from "@material-ui/core";

function Card({ tweet, mydata }) {
  console.log(tweet, 'sss', mydata)
  return (
    <div className="social-card">
      <div className="user-pic">
        <img
          className="user-img"
          // src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          src={mydata.image}

          alt="nfl-logo"
        />
      </div>
      <div className="body-tweet">
        <header>

          <div className="text-box">
            <h4>{mydata.name}</h4>
            <p>{tweet.time.split('T')[0]}</p>
            <div>{tweet.tweet}</div>
          </div>
        </header>
        <p style={{ color: "white", marginLeft: "-51px", fontSize: "15px" }}>
          Hello World ^_*
        </p>
        <div className="tweet-ref">
          <img
            className="pic-content"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4Vd8q40566y6_OdxwPz1KK8f-MEFah-gJg&usqp=CAU"
            src={tweet.img}
            // src="https://www.meme-arsenal.com/memes/4f06689941a7f10ec0e532177b55346f.jpg"
            alt="nfl-pic"
          />
        </div>

        <div className="footer-container">
          <div className="footer-icons">
            <GoComment className="icon-pic comment-pic" />
            {/* &nbsp;&nbsp;2 */}
            {tweet.comments.length}
          </div>
          <div className="footer-icons">
            <AiOutlineLike className="icon-pic comment-pic" />
            {/* &nbsp;&nbsp;90 */}
            {tweet.tweet_likes.length}
          </div>
          <div className="footer-icons">
            <BiBookmark className="icon-pic comment-pic" />
            &nbsp;&nbsp;
          </div>
        </div>

        <div class="timeline-comment-box">
          <div className="user-pic">
            <img
              className="user-img"
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="nfl-logo"
            />
          </div>
          <div class="input">
            <form action="">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control rounded-corner"
                  placeholder="   Write a comment..."
                />
                <span class="input-group-btn p-l-10">
                  <button
                    class="btn btn-primary f-s-12 rounded-corner"
                    type="button"
                  >
                    Comment
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
