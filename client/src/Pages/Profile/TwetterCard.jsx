import React, { useState, useEffect } from "react"
import Avatar from '@material-ui/core/Avatar';
import "./posts.css"
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LoopIcon from '@material-ui/icons/Loop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavLink, Link } from "react-router-dom"
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import CloudImage from "./uplodimage"
// import Comment from './comment'
// import aaa from "./aaa.png"

import RepeatIcon from "@material-ui/icons/Repeat";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';


import "./cardStyle.css";
import { colors } from "@material-ui/core";

function TweetCard() {

  return (
    <div className="tweet-body">
      <div className="tweet__top" >
        <Link to="/profile" className="twet__top__image">
          <Avatar ><img className=" avatar__image" src='' /></Avatar>
        </Link>

        <div className='top__date'>
          <h4 style={{ margin: "0px" }} >fgfkg</h4>
          <h5 style={{ margin: "0px", color: "gray" }}>dgjdfhgfjdkg</h5>
        </div>
      </div>
      <h4 style={{ color: "gray" }}>
        {/* {tweetResult.caption} */}
        sdfjsdkf
      </h4>
      {
        <img className="tweet__image" src='' />
      }
      <div className="comments-saves ">
        <h5 style={{ marginRight: "10px" }}> comments</h5>
        <h5 style={{ marginRight: "10px" }}> likes</h5>
        <h5>  saves</h5>
      </div>
      <div className='comments-sec'>
        <CommentIcon style={{ width: '35px', height: "35px" }} />
        <FavoriteIcon style={{ width: '35px', height: "35px" }} />
        <BookmarkBorderIcon style={{ width: '35px', height: "35px" }} />

        {/* <MenuOptions text="Retweet" Icon={RepeatIcon} />
        <MenuOptions text="Like" Icon={FavoriteBorderIcon} />
        <MenuOptions text="Save" Icon={BookmarkBorderOutlinedIcon} /> */}
      </div>
      <div className="profile-comment" >
        <Link to="/profile" className="profile-link">
          <Avatar ><img className="avatar__image" src='' /></Avatar>
        </Link>
        {/* <SearchBar tweetid={tweetResult._id} /> */}
      </div>
      <form style={{ width: '90%' }} onSubmit=''>

        <input className='tweet__input' placeholder="add a comment .." type='text' value='{content}' />
      </form>
      {/* {
        tweet && comments.map((comment, i) => <Comment key={i} comment={comment} />)
      } */}
      {/* {
        tweetResult.comments && tweetResult.comments.map(comment => {
            return (
                <CommentLike comment={comment} user={user} />
            )
        })
    } */}
    </div>
  );
}

export default TweetCard;
