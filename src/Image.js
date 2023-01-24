import React, { Component } from 'react'
import man from './images/man.png';
import './Image.css';

export default class image extends Component {
  render() {
    return (
      <div class ='images'>
        <img src={man}/>
      </div>
    )
  }
}
