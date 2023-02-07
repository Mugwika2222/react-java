import React, { Component } from 'react'
import engineers from './images/engineers.png';
import './Image.css';

export default class image extends Component {
  render() {
    return (
      <div class ='images'>
        <img src={engineers}/>
      </div>
    )
  }
}
