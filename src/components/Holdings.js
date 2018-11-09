import React, { Component } from 'react';


export default class Holdings extends Component {

  renderCurrency = () => {
    const filteredCurrency = this.props.allCurrencyHoldings.filter((currency) => {
      return currency.family_member_id === this.props.selectedFamilyMember.id
    })
    console.log(filteredCurrency);
    return <div>Florins: {filteredCurrency[0].value}</div>
  }

  renderHoldings = () => {
    const filteredTangibleAssets = this.props.allTangibleAssets.filter((tangibleAsset) => {
      return tangibleAsset.family_member_id === this.props.selectedFamilyMember.id
    })


    // const allSelectedHoldings = [...filteredCurrency, filteredTangibleAssets].flat()
    // console.log(allSelectedHoldings)


  }
  render() {
    // console.log(this.props);
    return (
      <div className="holdingsContainer">
        <h1>Holdings of {this.props.selectedFamilyMember.name} </h1>
        {this.renderCurrency()}
        {this.renderHoldings()}
      </div>
    );
  }

}
