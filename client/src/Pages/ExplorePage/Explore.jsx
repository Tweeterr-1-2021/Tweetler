import NavBar from "../SharedComponents/NavBar";
import { BiSearchAlt2 } from "react-icons/bi";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TweetCard from "../../Components/CardPeopleTweet/PeopleTweet";
import SideBar from "../../Components/SideNavbar/SideNavbar";

import "./explore.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <SideBar />
      <div className="search-div">
        <div id="forsearch-logo">
          <BiSearchAlt2 className="Search" />
          <Input
            className="search-text"
            placeholder="Search...."
            type="search"
          />
          <Button className="search-btn" variant="contained">
            search
          </Button>
        </div>
      </div>
      <div className="Card-div">
        <TweetCard />
      </div>
    </div>
  );
};

export default HomePage;
