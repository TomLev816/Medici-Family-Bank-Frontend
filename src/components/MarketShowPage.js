import React, { Component } from 'react';


export default class MarketShowPage extends Component {
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
        <button className='family-show-buttons' onClick={() => this.props.buyHolding(this.props.asset)}>Buy Holding</button>
        <button className='family-show-buttons' onClick={() => this.props.changeSelectedPage('goToMarket')}>Go Back to market page</button>
      </div>
    )
  }

}
