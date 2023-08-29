import React from "react";
import "./sidebar.scss";
import { projects, sideBar } from "../../utils/sideBar";
import { addWhiteIcon, bulb } from "../../constant";

export default function Sidebar() {
  return (
    <div className="listContainer">
      <ul>
        {sideBar.map((elm) => (
          <div key={elm.title} className="listItem">
            <span>
              <img src={elm.icon} alt="icon" />
            </span>
            <li>{elm.title}</li>
          </div>
        ))}
      </ul>
      <div className="projects">
        <div className="projectHeader">
          <h4>MY PROJECTS</h4>
          <span>
            <img src={addWhiteIcon} alt="addBtn" />
          </span>
        </div>
        <ul>
          {projects.map((elm) => (
            <div
              key={elm.color}
              className={`listItem ${elm.isActive ? "active" : ""}`}
            >
              <span
                className="dot"
                style={{ backgroundColor: `${elm.color}` }}
              ></span>
              <li>{elm.title}</li>
              {elm.isActive && <div className="menuDot">...</div>}
            </div>
          ))}
        </ul>
      </div>

      <div className="circleBox">
        <img src={bulb} alt="bulb" />
      </div>

      <div className="writeMsg">
        <h5>Thoughts Time</h5>
        <p className="msg_para">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <div>
          <input className="inputBox" type="text" placeholder="Write Message" />
        </div>
      </div>
    </div>
  );
}
