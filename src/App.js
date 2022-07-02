import "./App.css";
import Download from "./Images/Download.svg";
import Home from "./Images/Home.svg";
import More from "./Images/More.svg";
import Notes from "./Images/Notes Types.svg";
import Notifications from "./Images/NotificationsRed.svg";
//import ProCircle from "./Images/Profile Circle.svg";
import Profile from "./Images/Profile.svg";
import Saved from "./Images/Saved.svg";
import RightsidePic from "./Images/Side Pic.svg";
import Search from "./Images/Pin.svg";
import HomeFile from "./Home";

function App() {
  return (
    <div className="app">
      <div className="home_left">
        <div className="logo">LOGO</div>
        <div className="sidebar">
          <div>
            <img src={Home} alt="Home" />
            <span>Home</span>
          </div>
          <div>
            <img src={Notifications} alt="Notifications" />
            <span>Notifications</span>
          </div>
          <div>
            <img src={Notes} alt="Topics" />
            <span>Topics</span>
          </div>
          <div>
            <img src={Saved} alt="Bookmarks" />
            <span>Bookmarks</span>
          </div>
          <div>
            <img src={Download} alt="Archieved" />
            <span>Archieved</span>
          </div>
          <div>
            <img src={Profile} alt="Profile" />
            <span>Profile</span>
          </div>
          <div>
            <img src={More} alt="More" />
            <span>More</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="home_center">
        <HomeFile />
      </div>
      <hr />
      <div className="home_right">
        <div className="searchbar">
          <div className="searchicon">
            <img src={Search} alt="Search" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="noticeboard">
          <span>NOTICE BOARD</span>
          <div className="sec1">
            <h1>TLDR; OUT!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <img src={More} alt="Show More" />
          </div>
          <hr />
          <div className="sec2">
            <h1>Course Registration Deadline</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <img src={More} alt="Show More" />
          </div>
          <hr />
          <div className="sec3">
            <h1>New IG Post on BSP</h1>
            <div className="horicontainer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <img src={RightsidePic} alt="Right Side Pic" />
            </div>
            <img src={More} alt="Show More" />
          </div>
          <div className="button">Show More</div>
        </div>
      </div>
    </div>
  );
}

export default App;
