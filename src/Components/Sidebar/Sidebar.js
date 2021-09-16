import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Chat from "../Chat/Chat";
import HealthTips from "../../Components/HealthTips/HealthTips";
import User from "../../Components/User/User";
import { FiMenu } from "react-icons/fi";
import { FcPlus, FcSupport } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import {
  BiChat,
  BiUserPlus,
  BiSearch,
  BiMenuAltRight,
  BiLogOut,
} from "react-icons/bi";
import { FaNotesMedical } from "react-icons/fa";
import "./Sidebar.css";
import Profile from "../../Page/Profile/Profile";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togggle = () => setIsOpen(!isOpen);
  const [tab, setTab] = useState(Dashboard);

  return (
    <>
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="logo-details">
        <span className="icons" id="plus-icon">
          <FcPlus />
        </span>
        <div className="logo_name">MedConsult</div>
        <span onClick={togggle} className="icons" id="btn">
          {isOpen ? <BiMenuAltRight /> : <FiMenu />}
        </span>
      </div>
      <ul className="nav-list">
        <li>
          <span className="icons" id="search">
            <BiSearch />
          </span>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="" onClick={() => setTab(Dashboard)}>
            <span className="icons">
              <MdDashboard />
            </span>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="" onClick={() => setTab(User)}>
            <span className="icons">
              <BiUserPlus />
            </span>
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="" onClick={() => setTab(HealthTips)}>
            <span className="icons">
              <FaNotesMedical />
            </span>
            <span className="links_name">
              Health Tips
            </span>
          </a>
          <span className="tooltip">Health Tips</span>
        </li>
        <li>
          <a href="#" onClick={() => setTab(Chat)}>
            <span className="icons">
              <BiChat />
            </span>
            <span className="links_name">Chats</span>
          </a>
          <span className="tooltip">Chats</span>
        </li>
        <li>
          <a href="#">
            <span className="icons">
              <FcSupport />
            </span>
            <span className="links_name">Support</span>
          </a>
          <span className="tooltip">Support</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <img src="" alt="" />
            <div className="name_job">
              <div className="name">Prem Shahi</div>
              <div className="job">Web designer</div>
            </div>
          </div>
          <span className="icons" id="log_out">
            <BiLogOut />
          </span>
        </li>
      </ul>
    </div>
    {tab}
    </>
  );
};

export default Sidebar;
