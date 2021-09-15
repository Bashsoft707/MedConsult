import React from 'react'
import { GiWeight } from "react-icons/gi";
import { IoMan, IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import './SubTabs.css'

const Info = () => {
    return (
        <div className='grid'>
            <div className='grid-items'>
                <div className='grid-icon'><GiWeight /></div>
                <div className='grid-content'>
                    <h4>65 kg</h4>
                    <p>Weight</p>   
                </div>
            </div>
            <div className='grid-items'>
            <div className='grid-icon'><RiMoonClearFill /></div>
                <div className='grid-content'>
                <h4>7h 30m</h4>
                <p>Sleep</p>  
                </div>
            </div>
            <div className='grid-items' style={{
                gridColumn: 3,
                gridRow: "1 / span 2",
                textAlign: "left",
                background: "#f5f6fb"
              }}>
                <ul>
                        <h2>Notes</h2>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                    </ul>
                </div>
                <div className='grid-items'>
                <div className='grid-icon'><IoMan /></div>
                <div className='grid-content'>
                <h4>187 cm</h4>
                <p>Height</p> 
                </div>
            </div>
            <div className='grid-items'>
            <div className='grid-icon'><FaHeartbeat /></div>
                <div className='grid-content'>
                <h4>102 BPM</h4>
                        <p>Pulse</p>
                </div>
            </div>
        </div>
    )
}

export default Info
