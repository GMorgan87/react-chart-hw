import React, { Component } from 'react'
import ChartList from '../components/ChartList'

class ChartContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
         tracks:[]
      }
    }
    
    componentDidMount() {
      const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
      fetch(url)
      .then(res => res.json())
      .then(data => this.setState({
          tracks: data.feed.entry
        }))
    }
    

  render() {
    return (
      <div className="chart-container">
        <ChartList tracks={this.state.tracks}/>
      </div>
    )
  }
}

export default ChartContainer
