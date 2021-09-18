import React from 'react'
import './HealthTips.css'

const HealthTips = ({allTips}) => {
    return (
        <>
            <div className="text">Health tips</div>
            <div className="row-container">
                {allTips.data && allTips.data.map((tips, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card">
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
