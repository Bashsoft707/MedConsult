import React, { useState } from "react";
import Chat from "../../Components/Chat/Chat";
import Dashboard from "../../Components/Dashboard/Dashboard";
import HealthTips from "../../Components/HealthTips/HealthTips";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Profile.css";

const Profile = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <Sidebar setTab={setTab} />
      <div className="home-section">{ tab === 1 ? <Dashboard/> : tab === 2 ? <HealthTips /> : tab === 3 ? <HealthTips/> : <Chat /> }</div>
    </>
  );
};

export default Profile;
