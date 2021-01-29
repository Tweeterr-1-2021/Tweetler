import Trends from "../Trends/Trends"
import WhoToFollow from "../WhoToFollow/WhoToFollow"
import TopNav from "../TopNav/TopNav"
import TweetBox from "../TweetBox/TweetBox"
import Search from "../Search/Search"

import './Main.css';
const Main = () => {
  return (
    <div className="main-comp">
      <div>
        <TopNav />
        <TweetBox />
      </div>
      <div className="main-trends-comp">
        <Search />
        <Trends />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default Main;