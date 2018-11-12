import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class Holding extends Component {

  handleClick = () => {
    this.props.sellHolding(this.props.asset)
  }

  render() {
    console.log(this.props)
    return (
      <div>
      <h1>{this.props.asset.name}</h1>
      <h3>Asset Value: {this.props.asset.value}</h3>
      <img className="main-image" src={this.props.asset.image_src} alt=""></img>
      <p>{this.props.asset.description}</p>
      <button onClick={this.handleClick}>Sell Holding</button>
      </div>
    )
  }

}

export default Holding;
