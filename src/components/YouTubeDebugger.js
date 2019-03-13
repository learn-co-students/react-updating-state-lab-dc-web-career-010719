import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state = {
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

  handleBitrate = () => {
    this.setState({
      errors: [...this.state.errors], settings: {bitrate: 12, video: {...this.state.settings.video}}
    })
  }

  handleResolution = () => {
    this.setState({
      errors: [...this.state.errors], settings: {...this.state.settings, video: {resolution: '720p'}}
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.handleBitrate} className="bitrate">Update Bitrate</button>
        <button onClick={this.handleResolution} className="resolution">Update Resolution</button>


      </div>
    )


  }
}