import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './HealthTips.css'

const HealthTips = () => {

    const [ allTips, setAllTips ] = useState([])

    useEffect(() => {
        fetch('https://demo-api.pneumahealth.co/telehealth/tips')
      .then(response => response.json())
      .then(response => { console.log(response); setAllTips(response) })
      .catch(err => console.error(err));
    })

    return (
        <>
            <Sidebar />
            <div className="text">Health tips</div>
            <div className="row">
                {allTips.data && allTips.data.map((tips, index) => {
                return (
                    <div className="col-md-4" key={index}>
                    <div className="card mr-2 mb-2">
                        <div className="card-body">
                        <h5 className="card-title">Category: {tips.category} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Condition: {tips.condition}</h6>
                        <p className="card-text">{tips.tip}</p>
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>
      </>
    )
}

export default HealthTips
