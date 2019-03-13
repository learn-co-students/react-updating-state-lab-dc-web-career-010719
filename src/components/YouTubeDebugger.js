import React, {Component} from 'react'

class YouTubeDebugger extends Component {

  constructor() {
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

  setBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  setResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="bitrate"
            onClick={this.setBitrate}
          >
          Set Bit Rate to 12
          </button>
        </div>
        <div>
          <button
            className="resolution"
            onClick={this.setResolution}
          >
          Set Resolution to 720p
          </button>
        </div>
      </div>
    )
  }
}

export default YouTubeDebugger
