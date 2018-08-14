import React, { Component } from 'react';

class Timer extends Component{

  render() {
    console.log('this is Timer component')
    return (
      <div>
        {this.props.startWith}
      </div>
    );
  }
}
export default Timer