import React, { useState } from "react";
import Info from "./SubTabs/Info";
import Diet from "./SubTabs/Diet";
import Features from "./SubTabs/Features";
import "./Tabs.css";

const Tab = () => {
    const [allTab, setAllTab] = useState(Info);
  return ( 
    <div className="tab">
      <div className="tab-header">
        <div className="tab-heading" onClick={() => setAllTab(Info)}>Info</div>
        <div className="tab-heading" onClick={() => setAllTab(Diet)}>Diet</div>
        <div className="tab-heading" onClick={() => setAllTab(Features)}>Feature</div>
      </div>
      <div> 
        {allTab}
      </div>
    </div>
  );
};

export default Tab;
