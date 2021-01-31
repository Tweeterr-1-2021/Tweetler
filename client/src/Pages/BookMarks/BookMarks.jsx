import NavBar from "../SharedComponents/NavBar";
import { BiSearchAlt2 } from "react-icons/bi";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TweetCard from "../../Components/CardPeopleTweet/PeopleTweet";
import SideBar from "../../Components/SideNavbar/SideNavbar";

import "./bookmark.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <SideBar />
      <div className="book-div">Tweets Saved</div>
      <div className="Card-div">
        <TweetCard />
      </div>
    </div>
  );
};

export default HomePage;
