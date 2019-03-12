import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
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

  handleClick = (event) => {
    event.persist()
    console.log(event)
    const settings = this.state.settings

    if (event.target.classList.contains('bitrate'))
      settings.bitrate = 12
    else if (event.target.classList.contains('resolution'))
      settings.video.resolution = '720p'

    this.setState({settings: settings})
    console.log(this.state)
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
    console.log(this.state)
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
    console.log(this.state)
  }
  
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrate}>Bitrate</button>
        <button className='resolution' onClick={this.handleResolution}>Resolution</button>
      </div>
    )
  }
}
