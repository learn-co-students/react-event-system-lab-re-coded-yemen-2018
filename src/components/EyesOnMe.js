// Code Keypad Component Here

import React from 'react';

class EyesOnMe  extends React.Component {
 
  focusEvent = () => {
    console.log('Good!');
  }
  
    blurEvent = () => {
    console.log( 'Hey! Eyes on me!');
  }
 
  render() {
    return (
      <button type="password" onFocus={this.focusEvent} onBlur={this.blurEvent}> click</button>
    );https://learn.co/tracks/re-coded-front-end-web-development/react/state-and-events/event-system-lab#
  }
}

export default EyesOnMe ;