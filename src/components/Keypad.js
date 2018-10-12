// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {
 
  Keypad = () => {
    console.log('Entering password...');
  }
 
  render() {
    return (
      <input type="password" onKeyUp ={this.Keypad} />
    );
  }
}

export default Keypad;