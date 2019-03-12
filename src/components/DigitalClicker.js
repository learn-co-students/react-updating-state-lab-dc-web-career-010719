// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }
  handleClick(clicked){
    this.setState({
      timesClicked: clicked +1
    })
  }

  render() {
    return (
      <div>
        <button onClick={()=>{this.handleClick(this.state.timesClicked)}}>{`${this.state.timesClicked}`}</button>
      </div>
    );
  }
}
