import React from 'react'
import './HealthTips.css'

const HealthTips = ({allTips}) => {
    // const [ allTips, setAllTips ] = useState([])

    // useEffect(() => {
    //     fetch('https://demo-api.pneumahealth.co/telehealth/tips')
    //   .then(response => response.json())
    //   .then(response => { console.log(response); setAllTips(response) })
    //   .catch(err => console.error(err));
    // }, [])

    return (
        <>
            <div className="text">Health tips</div>
            <div className="row-container">
                {allTips.data && allTips.data.map((tips, index) => {
                return (
                    <div className="col-md-4" key={index}>
                    <div className="card mr-2 mb-2">
                        <div className="card-body">
                        <h5 className="card-title">Category: {tips.category} </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Condition: {tips.condition}</h6>
                        <p className="card-text">
                        {
                            tips.tip.slice(0, 150) 
                        } 
                        { tips.tip.length > 150 ? <a 
                            style={{
                            display: 'block',
                            color: 'blue',
                            cursor: 'pointer'
                        }}> see more</a> : null}
                        </p>
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
