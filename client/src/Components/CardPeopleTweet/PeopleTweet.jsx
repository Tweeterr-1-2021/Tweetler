import "./peopletweet.css";
import React, { useEffect, useState } from 'react'
import { GoComment } from "react-icons/go";
import { AiOutlineRetweet } from "react-icons/ai";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { BiImage } from "react-icons/bi";
import Comment from './comment'

const PeopleTweet = ({ tweet }) => {
  // console.log(',,,', tweet)
  const [newComment, SetNewComment] = useState('')
  const [actuallComment, SetActuallComment] = useState('')
  const [likes, setLikes] = useState([])
  const [bookMark, setBookMark] = useState([])



  const makeComment = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tweet_Id: tweet.id, user_Id: tweet.id, comment: tweet.comment })
    }
    fetch('http://127.0.0.1:8000/comment/', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        SetNewComment('')
        SetActuallComment([...tweet.comment, data])
      })
  }

  const addToFavourite = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tweet_Id: tweet.id, user_Id: tweet.id, comment: tweet.comment })
    }
    fetch('http://127.0.0.1:8000/favourite/', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setBookMark([...tweet.tweet_Bookmark, data])
      })
  }

  const makeLike = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tweet_Id: tweet.id, user_Id: tweet.id })
    }
    fetch('http://127.0.0.1:8000/like/', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLikes(...tweet.tweet_likes, data)
      })
  }


  console.log('tweet', tweet)
  return (
    <div className="box-peopletweet">
      <div>
        <img
          src={tweet.userImage}
          alt="..."
          className="pic-People"
        />
      </div>
      <div className="div-name">
        <p id="pname">{tweet.user}</p>
        <p id="twdate">{tweet.time.split('T')[0] + '  ,' + tweet.time.split('T')[1].split('.')[0]}</p>
      </div>
      <p id="tweet-content">
        {tweet.tweet}
      </p>
      <img
        src={tweet.img}
        alt="..."
        className="pictweet-People"
      />
      <div className="div-comment">
        <div className="div-commentt">
          <GoComment id="comt" />
        </div>
        <p id="commn">Comment</p>
      </div>
      <Button id="retweet-btn">
        <AiOutlineRetweet id="pic-retwt" />
        <p id="retwt"> Retweets</p>
      </Button>
      <div className="div-like">
        <div className="div-likke">
          <FavoriteIcon id="lik" />
        </div>
        <p id="Like"> &nbsp; Like</p>
      </div>
      <div className="div-book">
        <div className="div-boook">
          <BookmarkIcon id="bok" />
        </div>
        <p id="Book"> &nbsp; Save</p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          alt="..."
          className="pic-areaa"
        />
      </div>
      <div>
        <TextField
          id="filled-textarea"
          placeholder="tweet your reply"
          multiline
          className="text-areaa"
          variant="filled"
        />
        <div className="addd-pic">
          <Button className="img-btn" variant="contained">
            <BiImage className="add-img" />
          </Button>
        </div>
      </div>
      <Comment />
    </div>
  );
};

export default PeopleTweet;
