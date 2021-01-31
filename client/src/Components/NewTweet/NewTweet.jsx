import "./newtweet.css";
import React, { useState, useEffect } from 'react'
import { BiImage } from "react-icons/bi";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import CloudImage from '../CardPeopleTweet/uplodimage'
const NewTweet = ({ tweet, setTweets, id }) => {
  console.log('mytweet', tweet)
  const [content, setContent] = useState('')
  const [image, setImage] = useState("")

  const handleImageChange = (data) => {
    setImage(data)
  }

  const postTweet = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tweet: content, user_Id: id, img: image })
    }
    console.log('postreq', { tweet: content, user_Id: id })
    fetch('http://127.0.0.1:8000/tweet/', requestOptions)
      .then(response => response.json())
      .then(data => {
        setContent('')
        console.log('vvvv', data)
        console.log('tweeet', tweet)
        setTweets([data, ...tweet])

      })
  }

  console.log('......', content)
  return (
    <div className="box-newtweet">
      <h5 className="write-tweet">Tweet Something</h5>
      <div className="horz-line"></div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          alt="..."
          className="pic-area"
        />
      </div>
      <TextareaAutosize
        rowsMax={3}
        className="text-area"
        aria-label="empty textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What’s happening?"
      />
      <div className="add-pic">
        <CloudImage handleImageChange={handleImageChange} />
      </div>
      <Button onClick={postTweet} className="tweet-btn" variant="contained">
        Tweet
      </Button>
    </div>
  );
};

export default NewTweet;
