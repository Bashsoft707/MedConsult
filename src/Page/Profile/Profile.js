import React, { useState, useEffect } from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Chat from "../../Components/Chat/Chat";
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
import "./Profile.css";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({})
  const [tab, setTab] = useState(<Dashboard user={user} />);

  const [ allTips, setAllTips ] = useState([])

  const id = localStorage.getItem('name');

  const options = {
    method: 'GET',
    headers: {Accept: 'application/json', Authorization: 'Bearer cwzmajfp2v0lf0lo8eb5'}
  };
  useEffect(() => {
    fetch(`https://demo-api.pneumahealth.co/patients/${id}`, options)
      .then(response => response.json())
      .then(response => {
        setUser(response.data)
        console.log(user)
      })
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
      fetch('https://demo-api.pneumahealth.co/telehealth/tips')
    .then(response => response.json())
    .then(response => { console.log(response); setAllTips(response) })
    .catch(err => console.error(err));
  }, [])

  const togggle = () => setIsOpen(!isOpen);

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
            <a href="" onClick={() => setTab(<Dashboard user={user} />)}>
              <span className="icons">
                <MdDashboard />
              </span>
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="#" onClick={() => setTab(<User user={user} />)}>
              <span className="icons">
                <BiUserPlus />
              </span>
              <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
          </li>
          <li>
            <a href="#" onClick={() => setTab(<HealthTips allTips={allTips} />)}>
              <span className="icons">
                <FaNotesMedical />
              </span>
              <span className="links_name">Health Tips</span>
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
      <div className="home-section">
        {tab}
      </div>
    </>
  );
};

export default Profile;