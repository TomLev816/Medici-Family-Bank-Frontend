import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class Holding extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
      <h1>{this.props.asset.name}</h1>
      <h3>Asset Value: {this.props.asset.value}</h3>
      <img src={this.props.asset.image_src}></img>
      <p>{this.props.asset.description}</p>

      </div>
    )
  }

}

export default Holding;
