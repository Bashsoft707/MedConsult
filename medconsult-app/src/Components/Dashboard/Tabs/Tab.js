import React, { useState } from "react";
import Info from "./SubTabs/Info";
import Diet from "./SubTabs/Diet";
import Features from "./SubTabs/Features";
import "./Tabs.css";

const Tab = () => {
    const [tab, setTab] = useState(Info);
  return ( 
    <div className="tab">
      <div className="tab-header">
        <div className="tab-heading">Info</div>
        <div className="tab-heading">Diet</div>
        <div className="tab-heading">Feature</div>
      </div>
      <div> 
        {tab}
      </div>
    </div>
  );
};

export default Tab;
