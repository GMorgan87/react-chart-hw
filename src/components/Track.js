import React from 'react'
import './Track.css'

const Track = ({track, index}) => {    
  return (
    <div className="track">
        <div className='num'><h1>{index+1}</h1></div>
        <img src={track['im:image'][1]['label']} alt=''></img>
        <div className="track-details">
            <h3>{track['im:name']['label']}</h3>
            <h4>{track['im:artist']['label']}</h4>
        </div>
    </div>
  )
}

export default Track
