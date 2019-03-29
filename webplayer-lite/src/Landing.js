import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default class Landing extends Component {
  render() {
    return (
      <div class="landingPage">
        <Link to="/main">
        SoundCloudAggregator
        </Link>
      </div>
    )
  }
}
