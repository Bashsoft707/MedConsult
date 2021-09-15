import React from 'react'
// import Dashboard from '../../Components/Dashboard/Dashboard';
import HealthTips from '../../Components/HealthTips/HealthTips';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Profile.css'

const Profile = ({tab}) => {
    
    return (
        <>
            <Sidebar />
            <div className="home-section">
            <div className="text">Dashboard </div>
                <HealthTips />
            </div>
        </>
    )
}

export default Profile;
