import React from 'react'
import { GiWeight } from "react-icons/gi";
import './SubTabs.css'

const Features = () => {
    return (
        <div className='grid'>
            <div className='grid-items'>
                <div className='grid-icon'><GiWeight /></div>
                <div className='grid-content'>
                    <h4>67 kg</h4>
                    <p>Weight</p>   
                </div>
            </div>
            <div className='grid-items'>
            <div className='grid-icon'><GiWeight /></div>
                <div className='grid-content'>
                    <h4>65 kg</h4>
                    <p>Weight</p>   
                </div>
            </div>
            <div className='grid-items'>
            <div className='grid-icon'><GiWeight /></div>
                <div className='grid-content'>
                    <h4>65 kg</h4>
                    <p>Weight</p>   
                </div>
            </div>
        </div>
    )
}

export default Features
