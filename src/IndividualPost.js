import React from "react";
import "./IndividualPost.css";
import Like from "./Images/ThumbsUp.svg";
import Dislike from "./Images/Dislike.svg";
import Feed from "./Images/New Tag.svg";
import GirlUser from "./Images/ProfileGirl.svg";
import Girl from "./Images/Frame.svg";
import Icons from "./Images/Group 3.svg";
import User from "./Images/User.svg";
import More from "./Images/More.svg";
import Like1 from "./Images/Like.svg";
import Chat from "./Images/Chat.svg";
import Warning from "./Images/Warning.svg";

function IndividualPost() {
  return (
    <div className="individualpost">
      <div className="individualpost_top">
        <span style={{ marginLeft: "15px" }}>#</span>
        <img
          src={Like}
          alt="Like"
          style={{ marginTop: "-6px", marginLeft: "2px" }}
        />
        <span style={{ marginLeft: "15px" }}>#</span>
        <img
          src={Dislike}
          alt="Dislike"
          style={{ marginTop: "6px", marginLeft: "2px" }}
        />
        <span style={{ marginLeft: "20px" }}>
          Heading of the following Post
        </span>
        <div className="tag">
          <img src={Feed} alt="Feed" />
          <span>Technology</span>
        </div>
      </div>
      <div className="postgirl">
        <div className="creator_section">
          <div className="creator">
            <img src={GirlUser} alt="Profile Pic" />
            <span>Yamini Vijay Khajekar</span>
          </div>
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
      <div className="comment">
        <div className="comment_top">
          <span>Comments</span>
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
        <div className="comment_bottom">
          <span>See 120 replies</span>
          <div className="comment_icons">
            <img src={Like1} alt="Like" style={{ marginRight: "30px" }} />
            <img src={Chat} alt="Chat" style={{ marginRight: "30px" }} />
            <img
              src={Warning}
              alt="Alert"
              style={{ marginBottom: "-5px", marginRight: "10px" }}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="comment">
        <div className="comment_top">
          <span>Comments</span>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className="comment_bottom">
          <span>See 10 replies</span>
          <div className="comment_icons">
            <img src={Like1} alt="Like" style={{ marginRight: "30px" }} />
            <img src={Chat} alt="Chat" style={{ marginRight: "30px" }} />
            <img
              src={Warning}
              alt="Alert"
              style={{ marginBottom: "-5px", marginRight: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualPost;
