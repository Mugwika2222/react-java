import React, { Component } from 'react'
import pexel from './images/pexel2.jpg';
import './Image.css';

export default class image extends Component {
  render() {
    return (
      <div class ='images'>
        <img src={pexel}/>
      </div>
    )
  }
}
