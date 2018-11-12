import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
// import Holding from "./Holding.js"



export default class Holdings extends Component {

  renderCurrency = () => {
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
      return <div key={asset.id} className="slider-holder" onClick={() => this.props.changeSelectedHolding('holdingShowPage', asset)}>
        <h1>{asset.name}</h1>
        <h3>Asset Value: {asset.value}</h3>
        <img className="holdings-image" src={asset.image_src} alt=""></img>
      </div>
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
        <h1>Holdings of {this.props.selectedFamilyMember.name} </h1>
        {this.renderCurrency()}
        <Swiper {...params}>
          {this.renderHoldings()}
        </Swiper>
      </div>
    );
  }
} // ends class
