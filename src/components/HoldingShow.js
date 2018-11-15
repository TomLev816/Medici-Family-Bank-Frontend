import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


export default class HoldingShow extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="familyMemberShowPage">
        <div className="holding-show-page">
          <div>
            <h1>{this.props.asset.name}</h1>
          </div>
          <img src={this.props.asset.image_src} className="holdings-show-image" alt=""></img>
          <div>
            {this.props.asset.description}
          </div>
          <div>
            <h3> Asset Value: {this.props.asset.value} Florins</h3>
          </div>
        </div>
          <NavLink to='/holdings'
            activeStyle={{ color: 'red' }}
            className='family-show-buttons'
            onClick={() => this.props.sellHolding(this.props.asset)}>
              Selll Holding
          </NavLink>
          <NavLink
            to='/family-members-show'
            className='family-show-buttons'>
              Go Back to Holdings
          </NavLink>
      </div>
    )
  }

}
