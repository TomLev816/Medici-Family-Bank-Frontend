import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

export default class MarketPage extends Component {
  state = {
    filterOn: false,
    searchTerm: ''
  }

  renderCurrency = () => {
    const filteredCurrency = this.props.allCurrencyHoldings.filter((currency) => {
      return currency.family_member_id === this.props.selectedFamilyMember.id
    })
    return <div>Florins to Spend: {filteredCurrency[0].value}</div>
  }

  renderHoldings = () => {

    let filteredTangibleAssets = this.props.allTangibleAssets.filter((tangibleAsset) => {
      return tangibleAsset.family_member_id === 1
    })

    if (this.state.filterOn) {
      filteredTangibleAssets = filteredTangibleAssets.filter(asset => asset.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    // const allSelectedHoldings = [...filteredCurrency, filteredTangibleAssets].flat()
    return filteredTangibleAssets.map( (asset) => {
      return <div key={asset.id}>
        <h1>{asset.name}</h1>
        <h3>Asset Value: {asset.value}</h3>
        <img className="holdings-image" src={asset.image_src} alt=""></img>
        <button onClick={() => this.props.buyHolding(asset)}>Buyyy Holding</button>
        <p>{asset.description}</p>
      </div>
    })

  }// end of render holdings


  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
      filterOn: true
    });
  }

  render () {
    const params = {
       slidesPerView: 3,
       spaceBetween: 30,
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       }
     };


    return (
      <div>
        <div>
          <input
            value={this.state.searchTerm}
            placeholder="search marketplace"
            onChange={this.handleChange}>
          </input>
        </div>
        {this.renderCurrency()}
        <Swiper {...params}>
          {this.renderHoldings()}
        </Swiper>
      </div>
    );
  }
}