// Code EyesOnMe Component Here

import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component {
  focus = () =>{
    console.log('Good!');
  }
  blur = () =>{
    console.log('Hey! Eyes on me!');
  }
  render(){
    return(
      <button onFocus={this.focus} onBlur={this.blur}>Click me!</button>
    )
  }
}
