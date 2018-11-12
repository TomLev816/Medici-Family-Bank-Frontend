import React, { Component } from 'react';


export default class HoldingShow extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="familyMemberShowPage">
        <div>{this.props.asset.name}</div>
        <img src={this.props.asset.image_src} className="holdings-show-image" alt=""></img>
        <div>{this.props.asset.description}</div>
        <div>{this.props.asset.value}</div>
        <button onClick={() => this.props.sellHolding(this.props.asset)}>Selll Holding</button>
        <br></br>
        <button onClick={() => this.props.changeSelectedPage('viewHoldings')}>Go Back to Holdings</button>
      </div>
    )
  }

}
