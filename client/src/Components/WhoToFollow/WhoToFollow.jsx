import './WhoToFollow.css';

const WhoToFollow = () => {
    return (
        <div className="who-to-follow">
            <div className="who-to-follow-container">
                
                <div className="follow-data">
                    <h3>Who to follow</h3>
                </div>

                <div className="follow-data follow-info">
                    <div className="follow-info-container">
                        <div className="follow-img">
                            <img alt="yasir tobbileh" draggable="true" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"></img>
                        </div>

                        <div className="follow-name">
                            <div>yasir tobbileh</div>
                            <div>@Yasir_Tobbileh</div>
                        </div>

                        <div className="tweeter-follow">
                            <a href="/home">Follow</a>
                        </div>
                    </div>
                </div>

                <div className="follow-data show-more">
                    <a>
                        <div>Show more</div>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default WhoToFollow;