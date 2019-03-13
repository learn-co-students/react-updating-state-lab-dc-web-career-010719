// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'
        }
      }
    }
  }

  handleChangeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }
  
  render(){
    return (
      <button onClick={this.handleChangeBitrate}>bitrate</button>
    )
  }
}

export default YouTubeDebugger
