
import React from 'react'
import Track from './Track'

const ChartList = ({tracks}) => {
    
    const trackNodes = tracks.map((track,index) => {
        return <Track track={track} index={index} />
    })
    
  return (
    <div className="chart-list">
        <h1 className="title">TOP 20</h1>
        {trackNodes}
    </div>
  )
}

export default ChartList
