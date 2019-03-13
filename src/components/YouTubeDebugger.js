// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {bitrate: 8,
                 video: {resolution: '1080p'}}
    }
  }

  changeBitRate = () => {
    this.setState({
        settings: {...this.state.settings, bitrate: 12}
      })
  }

  changeVideoResolution = () => {
    this.setState({
        settings: {...this.state.settings, video: {resolution: '720p'}}
      })
  }

  render() {
    return(
      <div>
      <button className="bitrate" onClick={this.changeBitRate}>Change Bit Rate</button>
      <button className="resolution" onClick={this.changeVideoResolution}>Change Video Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
