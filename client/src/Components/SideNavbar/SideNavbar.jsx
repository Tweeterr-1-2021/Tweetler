import "./SideNavbar.css";
import { GiHummingbird } from "react-icons/gi";
const SideNavbar = () => {
  return (
    <header className="tweeter-sidenavbar">
      <div className="tweeter-sidenavbar-container">
        <div>
          {/* <div className="sidenav-logo">
            <a href="/home">
              <div id="tweeter-landing">
                <svg viewBox="0 0 24 24" className="tweeter-logo"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                <GiHummingbird
                  id="sidelogo"
                  style={{
                    fontSize: "50px",
                    Color: "#1da1f2 !important",
                    marginLeft: "40px ",
                  }}
                />
              </div>
            </a>
          </div> */}

          <div className="sidenav-container">
            <nav>
              <a style={{ textDecorationLine: "none" }} href="/home">
                <div className="sidenav-item">
                  <div>
                    <svg viewBox="0 0 24 24">
                      <g>
                        <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
                      </g>
                    </svg>
                  </div>
                  <div style={{ color: " rgba(29, 161, 242, 1)" }}>Home</div>
                </div>
              </a>

              <a style={{ textDecorationLine: "none" }} href="/explore">
                <div className="sidenav-item">
                  <div>
                    <svg viewBox="0 0 24 24">
                      <g>
                        <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
                      </g>
                    </svg>
                  </div>
                  <div style={{ color: " rgba(29, 161, 242, 1)" }}>Explore</div>
                </div>
              </a>
              <a style={{ textDecorationLine: "none" }} href="/bookmarks">
                <div className="sidenav-item">
                  <div>
                    <svg viewBox="0 0 24 24">
                      <g>
                        <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path>
                      </g>
                    </svg>
                  </div>
                  <div style={{ color: " rgba(29, 161, 242, 1)" }}>
                    Bookmarks
                  </div>
                </div>
              </a>
              <a style={{ textDecorationLine: "none" }} href="/profile">
                <div className="sidenav-item">
                  <div>
                    <svg viewBox="0 0 24 24">
                      <g>
                        <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
                      </g>
                    </svg>
                  </div>
                  <div style={{ color: " rgba(29, 161, 242, 1)" }}>Profile</div>
                </div>
              </a>
              <div className="tweet-item">
                <a>Tweet</a>
              </div>
            </nav>
          </div>
        </div>

        <div className="username-data">
          <div className="username-data-container">
            <div className="profile-img">
              <img
                alt="yasir tobbileh"
                draggable="true"
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
              ></img>
            </div>

            <div className="username">
              <div>yasir tobbileh</div>
              <div>@Yasir_Tobbileh</div>
            </div>

            <div className="dots-container">
              <svg viewBox="0 0 24 24" className="dots">
                <g>
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SideNavbar;