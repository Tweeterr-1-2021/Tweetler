import React, { Component, useEffect, useState } from "react";
import "./profile.css";

import NavBar from "../SharedComponents/NavBar";
import Card from "./TwetterCard";
import { GiCogLock, GiConsoleController } from "react-icons/gi";
import SideNavbar from "../../Components/SideNavbar/SideNavbar";
import TweetCard from './TwetterCard'
import TweetBody from '../../Components/CardPeopleTweet/newTweetBox'
// import Comment from '../../Components/CardPeopleTweet/comment'

export default function Profile() {
  const [mydata, setMydata] = useState([]);
  const [id, setId] = useState(localStorage.getItem("id"));
  useEffect(() => {
    profileTweet()
  }, [])

  const profileTweet = () => {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pk: id }),
    };
    let path = "http://127.0.0.1:8000/user/details";
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        setMydata(data)
      })
  }
  console.log('wheeeen en data', mydata)

  // console.log('mydata', mydata, 'Id', id, 'userId', { pk: id })
  // console.log("asd", id)
  return (
    <div>
      <NavBar />
      <div className="profile">
        <div className="backprofile__picture"></div>
        <div className="homepage__text">
          <div  >
            <img src={mydata.image} className="profile__picture" />
          </div>
          <div className="profile__right ">
            <h3>{mydata.name}</h3>
          </div>
          <h4 className="profile__about">Web Developer</h4>
          <div className="profile__about1">
            <span>
              <strong>{mydata?.following_To?.length} </strong> following
            </span>
            <span style={{ marginLeft: "10px" }}>
              <strong>{mydata?.following_From?.length}</strong> follower
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0.3' }}>
          <SideNavbar />
        </div>
        <div style={{ flex: '0.7' }}>
          {mydata?.tweets?.map((tweet, i) => (

            <TweetBody tweet={tweet} key={i} />
          )
          )}
        </div>
        {/* <TweetCard /> */}
      </div>
      <div style={{ marginTop: "8%" }}>book</div>
    </div >
  );
}
