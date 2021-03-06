import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Menu from './components/Menu.js'
import Members from './components/Members.js'
import FamilyMemberShow from './components/FamilyMemberShow.js'
import Holdings from './components/Holdings.js'
import AboutPage from './components/AboutPage.js'
import MarketPage from './components/MarketPage.js'
import HoldingShow from './components/HoldingShow.js'
import MarketShowPage from './components/MarketShowPage.js'

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    allFamilyMembers: [],
    allTangibleAssets: [],
    allCurrencyHoldings: [],
    selectedFamilyMember: '',
    selectedPage: 'homepage',
    selectedHolding: ''
  }

  componentDidMount = () => {
    this.fetchFamilyMembers()
    this.fetchTangiableAssets()
    this.fetchCurrencyHoldings()
  }

  fetchFamilyMembers = () => {
  fetch('https://fast-reaches-39524.herokuapp.com/api/v1/family_members')
    .then(res => res.json())
    .then(resJson => {
      this.setState((currentState) => {
        return {
          allFamilyMembers: resJson,
          selectedFamilyMember: resJson[1]
        }
      });
    })
  }

  fetchTangiableAssets = () => {
    fetch('https://fast-reaches-39524.herokuapp.com/api/v1/tangible_assets')
      .then(res => res.json())
      .then(resJson => {
        this.setState((currentState) => {
          return {allTangibleAssets: resJson}
        })
      })
  }

  fetchCurrencyHoldings = () => {
    // console.log("hi from currency_holdings");
    fetch('https://fast-reaches-39524.herokuapp.com/api/v1/currency_holdings')
      .then(res => res.json())
      .then((currencyRes) => {
        this.setState((currentState) => {
          return {allCurrencyHoldings: currencyRes }
        })
      })
  }


  changeSelectedFamilyMember = (familyMemberObj) => {
    this.setState({
      selectedFamilyMember: familyMemberObj,
    });
  }

  changeSelectedHolding = (holdingObj) => {
    this.setState({
      selectedHolding: holdingObj,
    });
  }

  sellHolding = (holdingObj) => {

    const holdingId = holdingObj.id
    let oldCurrentSellerCurrency = this.state.allCurrencyHoldings.find(holding => holding.family_member_id === holdingObj.family_member_id).value
    const newCurrentSellerCurrencyHolding = oldCurrentSellerCurrency + holdingObj.value

    let currentBankerCurrency = this.state.allCurrencyHoldings.find(holding => holding.family_member_id === 1).value
    const newBankerCurrency = currentBankerCurrency - holdingObj.value

    const newCurrencyHoldingArray = this.state.allCurrencyHoldings.map((currencyObj) => {
      if (currencyObj.family_member_id === holdingObj.family_member_id){
        currencyObj.value = newCurrentSellerCurrencyHolding
        return currencyObj
      }
      else if (currencyObj.family_member_id === 1) {
        currencyObj.value = newBankerCurrency
        return currencyObj
      }
      else {
        return currencyObj
      }
    })

   const newTangibelAssetArray = this.state.allTangibleAssets.map( (asset) => {
      if (asset.id === holdingId){
        asset.family_member_id = 1
        return asset
      }
      else {
        return asset
      }
    })

    this.setState((currentState) => {
      return {
        allCurrencyHoldings: newCurrencyHoldingArray,
        allTangibleAssets: newTangibelAssetArray,
        selectedPage: 'viewHoldings',
      }
      }, () => console.log(this.state.allCurrencyHoldings))

    fetch(`https://fast-reaches-39524.herokuapp.com/api/v1/tangible_assets/${holdingId}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        family_member_id: 1
      })
    })  // end of fetch 1

    fetch(`https://fast-reaches-39524.herokuapp.com/api/v1/currency_holdings/${holdingObj.family_member_id}`,{
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value: newCurrentSellerCurrencyHolding
      })
    })

    fetch('https://fast-reaches-39524.herokuapp.com/api/v1/currency_holdings/1',{
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value: newBankerCurrency
        })
    })// end of fetch 3
  }// end of sell holding


  buyHolding = (assetObj) => {
    let buyer = this.state.selectedFamilyMember
    let seller = this.state.allFamilyMembers[0]

    let buyerCurrencyBeforePurchase = this.state.allCurrencyHoldings.filter(currency => currency.id === buyer.id)[0].value
    let newCurrencyArrayForBuying
    let newTangibelAssetArrayForBuying
    let sellerCurrencyAfterPurchase
    let buyerCurrencyAfterPurchase

    if (buyerCurrencyBeforePurchase >= assetObj.value) {
      buyerCurrencyAfterPurchase = buyerCurrencyBeforePurchase - assetObj.value
      sellerCurrencyAfterPurchase = seller.currency_holdings[0].value + assetObj.value

      newCurrencyArrayForBuying = this.state.allCurrencyHoldings.map((currencyObj) => {
        if (currencyObj.family_member_id === buyer.id){
          currencyObj.value = buyerCurrencyAfterPurchase
          return currencyObj
        }
        else if (currencyObj.family_member_id === 1) {
          currencyObj.value = sellerCurrencyAfterPurchase
          return currencyObj
        }
        else {
          return currencyObj
        }
      })// end of new currency array mapping function

      newTangibelAssetArrayForBuying = this.state.allTangibleAssets.map((asset) => {
        if (asset.id === assetObj.id){
          asset.family_member_id = buyer.id
          return asset
        }
        else {
          return asset
        }
      }) // end of asset array map
      this.setState((currentState) => {
        return {
          allCurrencyHoldings: newCurrencyArrayForBuying,
          allTangibleAssets: newTangibelAssetArrayForBuying,
          selectedPage: 'viewHoldings',
         }
      })// setting state

      fetch(`https://fast-reaches-39524.herokuapp.com/api/v1/tangible_assets/${assetObj.id}`, {
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          family_member_id: buyer.id
        })
      })  // end of fetch 1
      .then(r => r.json())

      fetch(`https://fast-reaches-39524.herokuapp.com/api/v1/currency_holdings/${buyer.id}`,{
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value: buyerCurrencyAfterPurchase
        })
      })
      .then(r => r.json())

      fetch('https://fast-reaches-39524.herokuapp.com/api/v1/currency_holdings/1',{
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            value: sellerCurrencyAfterPurchase
          })
      })// end of fetch 3
      .then(r => r.json())
    }// end of big old if (bof)
    else {
      alert("Can't Afford This")
    }
  } // end of buy holding


  render() {
    return (
      <Router>
        <div className="App">
            <NavBar allFamilyMembers={this.state.allFamilyMembers} changeSelectedPage={this.changeSelectedPage}/>

            <Route exact path="/about" component={AboutPage}  />

            <Route exact path="/menu" component={Menu} />

            <Route
              path='/family-members'
              render={(props) => <Members {...props}
              allFamilyMembers={this.state.allFamilyMembers} changeSelectedFamilyMember={this.changeSelectedFamilyMember}
              selectedFamilyMember={this.state.selectedFamilyMember}/> }
            />

            <Route
                path='/market'
                render={(props) => <MarketPage {...props}
                  changeSelectedHolding={this.changeSelectedHolding}
                  allCurrencyHoldings={this.state.allCurrencyHoldings}
                  allTangibleAssets={this.state.allTangibleAssets}
                  selectedFamilyMember={this.state.selectedFamilyMember}
                  buyHolding={this.buyHolding}
                 /> }
              />

              <Route
                path='/holdings'
                render={(props) => <Holdings {...props}
                  allTangibleAssets={this.state.allTangibleAssets}
                  allCurrencyHoldings={this.state.allCurrencyHoldings}
                  selectedFamilyMember={this.state.selectedFamilyMember}
                  changeSelectedHolding={this.changeSelectedHolding} /> }
              />

              <Route
                path='/market-show'
                render={(props) => <MarketShowPage {...props}
                  asset={this.state.selectedHolding}
                  changeSelectedPage={this.changeSelectedPage}
                  buyHolding={this.buyHolding} /> }
              />

              <Route
                path='/holdings-show'
                render={(props) => <HoldingShow {...props}
                  asset={this.state.selectedHolding}
                  changeSelectedPage={this.changeSelectedPage}
                  sellHolding={this.sellHolding} /> }
              />

              <Route
                path='/family-members-show'
                render={(props) => <FamilyMemberShow {...props}
                  selectedFamilyMember={this.state.selectedFamilyMember}
                  changeSelectedPage={this.changeSelectedPage} /> }
              />
        </div>
      </Router>
    );
  }
}


export default App;
