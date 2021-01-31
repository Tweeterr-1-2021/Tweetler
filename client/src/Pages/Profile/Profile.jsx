import React, { Component, useEffect, useState } from "react";
import "./profile.css";

import NavBar from "../SharedComponents/NavBar";
import Card from "./TwetterCard";
import { GiCogLock, GiConsoleController } from "react-icons/gi";

export default function Profile() {
  const [mydata, setMydata] = useState([]);
  const [id, setId] = useState(localStorage.getItem("id"));
  useEffect(() => {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pk: id }),
    };
    let path = "http://127.0.0.1:8000/user/details";
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log("mydataa", data);
        setMydata(data)
      })
  }, [])

  // console.log('<<<<<<<<', mydata)
  // console.log("asd", id)
  return (
    <div className="row py-5 px-4">
      <NavBar />
      <div className="col-md-5 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 cover">
            <div className="media align-items-end profile-head">
              <div className="profilebg">
                <div className="profile mr-3">
                  <img
                    src={mydata.image}
                    alt="..."
                    className=" forProfile"
                  />
                </div>
                <div className="ForName">
                  <h4 className="mt-0 mb-0">{mydata.name}</h4>
                  <p className="small mb-4">palestine</p>
                </div>
                <button id="edit" href="#">
                  Edit profile
                </button>
                <div className="forFollows">
                  <ul className="forFollow">
                    <li className="forli">
                      215
                      <br />
                      <i className="fori">Photos</i>
                    </li>
                    <li className="forli">
                      745
                      <br />
                      <i className="fori">Followers</i>
                    </li>
                    <li className="forli">
                      340
                      <br /> <i className="fori ">Following</i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div> */}
          {
            mydata && mydata.tweets && mydata.tweets.map((tweet, i) => (
              <Card mydata={mydata} tweet={tweet} key={i} />
            ))
          }
          {/* </div> */}
          {/* {console.log('sss', mydata)} */}
          {/* <Card mydata={mydata} /> */}

        </div>
      </div>
    </div>
  );
}
