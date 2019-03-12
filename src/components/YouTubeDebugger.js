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
        },
      }
    }
  }

  changeBitrate = () => {
    let settings = {...this.state.settings}
    settings.bitrate = 12
    this.setState({settings})
  }

  changeResolution = () => {
    let settings = {...this.state.settings}
    settings.video.resolution = '720p'
    this.setState({settings})
  }

  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={this.changeBitrate}
        >
          {this.state.settings.bitrate}
        </button>

        <button
          className="resolution"
          onClick={this.changeResolution}
        >
          {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger
