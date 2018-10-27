// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{
  fo = () => {
      console.log('Good!');
    }
    bl = () => {
        console.log('Hey! Eyes on me!');
      }
render(){


  return(

    <button onFocus={this.fo}  onBlur={this.bl}>click</button>
  )
}

}
