import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import Holding from "./Holding.js"



export default class Holdings extends Component {

  renderCurrency = () => {
    console.log(this.props.allCurrencyHoldings);
    console.log(this.props.selectedFamilyMember);
    const filteredCurrency = this.props.allCurrencyHoldings.filter((currency) => {
      return currency.family_member_id === this.props.selectedFamilyMember.id
    })
    return <div>Florins: {filteredCurrency[0].value}</div>
  }//end of render currency

  renderHoldings = () => {

    const filteredTangibleAssets = this.props.allTangibleAssets.filter((tangibleAsset) => {
      return tangibleAsset.family_member_id === this.props.selectedFamilyMember.id
    })


    // const allSelectedHoldings = [...filteredCurrency, filteredTangibleAssets].flat()
    return filteredTangibleAssets.map( (asset) => {
      return(
      <NavLink
        to={`/holdings-show`}
      >
        <div key={asset.id} className="slider-holder"
          onClick={() => this.props.changeSelectedHolding('holdingShowPage', asset)}>
          <h1>{asset.name}</h1>
          <h2>Asset Value: {asset.value}</h2>
          <img className="holdings-image" src={asset.image_src} alt=""></img>
        </div>
      </NavLink>
      )
    })

  }// end of render holdings

  render() {
    const params = {
       slidesPerView: 3,
       spaceBetween: 30,
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       }
     };

    return (
      <div className="main-container">
        <div className="holdings-index-header">
          <h1>Holdings of {this.props.selectedFamilyMember.name} </h1>
          {this.renderCurrency()}
        </div>
        <Swiper {...params}>
          {this.renderHoldings()}
        </Swiper>
      </div>
    );
  }
} // ends class
