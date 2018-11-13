import React, { Component } from 'react';


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
            <h3> Asset Value: {this.props.asset.value} </h3>
          </div>
        </div>
        <button className='family-show-buttons' onClick={() => this.props.sellHolding(this.props.asset)}>Selll Holding</button>
        <button className='family-show-buttons' onClick={() => this.props.changeSelectedPage('viewHoldings')}>Go Back to Holdings</button>
      </div>
    )
  }

}
