import React from "react";
import Girl from "./Images/Frame.svg";
import Plant from "./Images/Bottom Plant.svg";
// import Chat from "./Images/Chat.svg";
// import Emoji from "./Images/Emoji.svg";
import Feed from "./Images/Feed Chat.svg";
// import Forward from "./Images/Forward.svg";
// import GIF from "./Images/GIF.svg";
// import Image from "./Images/Image.svg";
// import Like from "./Images/Like.svg";
// import RedSave from "./Images/Red Save.svg";
import User from "./Images/User.svg";
import ActionGroup from "./Images/Group 15.svg";
import GirlUser from "./Images/ProfileGirl.svg";
import More from "./Images/More.svg";
import Icons from "./Images/Group 3.svg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hometop">
        <h1>Home</h1>
        <div className="home_content">
          <img src={User} alt="Profile Pic" />
          <input type="text" placeholder="What's on your mind?" />
        </div>
        <div className="home_bottom">
          <img src={ActionGroup} alt="All Buttons" />
          <button className="home_button">Post</button>
        </div>
      </div>
      <hr />
      <div className="post">
        <div className="post_head">
          <img src={Feed} alt="Feed" />
          <span>Technology</span>
        </div>
        <div className="creator_section">
          <div className="creator">
            <img src={GirlUser} alt="Profile Pic" />
            <span>Yamini Vijay Khajekar</span>
          </div>
          <img src={More} alt="More" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="post_container">
          <img src={Girl} alt="Happy Girl" />
        </div>
        <img src={Icons} alt="Icons" />
      </div>
      <hr />
      <div className="post">
        <div className="post_head">
          <img src={Feed} alt="Feed" />
          <span>Administration</span>
        </div>
        <div className="creator_section">
          <div className="creator">
            <img src={User} alt="Profile Pic" />
            <span>Anonymous</span>
          </div>
          <img src={More} alt="More" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <img src={Icons} alt="Icons" />
      </div>
      <hr />
      <div className="post">
        <div className="post_head">
          <img src={Feed} alt="Feed" />
          <span>Sustainability</span>
        </div>
        <div className="creator_section">
          <div className="creator">
            <img src={User} alt="Profile Pic" />
            <span>Anonymous</span>
          </div>
          <img src={More} alt="More" />
        </div>
        <div className="post_container" style={{ backgroundColor: "#E8E8CC" }}>
          <img src={Plant} alt="Plant" />
        </div>
        <img src={Icons} alt="Icons" />
      </div>
    </div>
  );
}

export default Home;
