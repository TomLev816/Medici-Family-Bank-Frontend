import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/MenuBar.js';
import Menu from './components/Menu.js'
import Members from './components/Members.js'
import FamilyMemberShow from './components/FamilyMemberShow.js'
import Holdings from './components/Holdings.js'
import AboutPage from './components/AboutPage.js'
import MarketPage from './components/MarketPage.js'



class App extends Component {
  state = {
    allFamilyMembers: [],
    allTangibleAssets: [],
    allCurrencyHoldings: [],
    selectedFamilyMember: '',
    selectedPage: 'homepage',
  }

  componentDidMount = () => {
    this.fetchFamilyMembers()
    this.fetchTangiableAssets()
    this.fetchCurrencyHoldings()
  }




  fetchFamilyMembers = () => {
  fetch('http://localhost:3000/api/v1/family_members')
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
    fetch('http://localhost:3000/api/v1/tangible_assets')
      .then(res => res.json())
      .then(resJson => {
        this.setState((currentState) => {
          return {allTangibleAssets: resJson}
        })
      })
  }

  fetchCurrencyHoldings = () => {
    // console.log("hi from currency_holdings");
    fetch('http://localhost:3000/api/v1/currency_holdings')
      .then(res => res.json())
      .then((currencyRes) => {
        this.setState((currentState) => {
          return {allCurrencyHoldings: currencyRes }
        })
      })
  }

  changeSelectedPage = (page) => {
    this.setState({
      selectedPage: page
    });
  }

  changeSelectedFamilyMember = (familyMemberObj, page) => {
    this.setState({
      selectedFamilyMember: familyMemberObj,
    }, this.changeSelectedPage(page));
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
      return { allCurrencyHoldings: newCurrencyHoldingArray, allTangibleAssets:newTangibelAssetArray }
      }, () => console.log(this.state.allCurrencyHoldings))

    fetch(`http://localhost:3000/api/v1/tangible_assets/${holdingId}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        family_member_id: 1
      })
    })  // end of fetch 1

    fetch(`http://localhost:3000/api/v1/currency_holdings/${holdingObj.family_member_id}`,{
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value: newCurrentSellerCurrencyHolding
      })
    })

    fetch('http://localhost:3000/api/v1/currency_holdings/1',{
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
    console.log(assetObj);
  }



  renderCurrentPage = () => {
    return <>
          {this.state.selectedPage === 'menu' ? <Menu changeSelectedPage={this.changeSelectedPage}/> : null }
          {this.state.selectedPage === 'selectFamilyMember' ? <Members allFamilyMembers={this.state.allFamilyMembers} changeSelectedFamilyMember={this.changeSelectedFamilyMember}/> : null}
          {this.state.selectedPage === 'familyMemberShow' ? <FamilyMemberShow selectedFamilyMember={this.state.selectedFamilyMember} changeSelectedPage={this.changeSelectedPage}/> : null}
          {this.state.selectedPage === 'viewHoldings' ?
            <Holdings allTangibleAssets={this.state.allTangibleAssets}
                      allCurrencyHoldings={this.state.allCurrencyHoldings}
                      selectedFamilyMember={this.state.selectedFamilyMember}
                      sellHolding={this.sellHolding}
              /> : null}
          {this.state.selectedPage==="aboutPage" ? <AboutPage/>: null}
          {this.state.selectedPage==="goToMarket" ? <MarketPage
            allCurrencyHoldings={this.state.allCurrencyHoldings}
            allTangibleAssets={this.state.allTangibleAssets}
            selectedFamilyMember={this.state.selectedFamilyMember}
            buyHolding={this.buyHolding}
          />: null}
        </>
  }
  render() {
    return (
      <div className="App">
        <MenuBar allFamilyMembers={this.state.allFamilyMembers} changeSelectedPage={this.changeSelectedPage}/>
        {this.renderCurrentPage()}
      </div>
    );
  }
}

export default App;
