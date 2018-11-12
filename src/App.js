import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/MenuBar.js';
import Menu from './components/Menu.js'
import Members from './components/Members.js'
import FamilyMemberShow from './components/FamilyMemberShow.js'
import Holdings from './components/Holdings.js'
import AboutPage from './components/AboutPage.js'



class App extends Component {
  state = {
    allFamilyMembers: [],
    allTangibleAssets: [],
    allCurrencyHoldings: [],
    selectedFamilyMember: '',
    selectedPage: 'homepage'
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
        return {allFamilyMembers: resJson}
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
    }, () => console.log(this.state.selectedPage));
  }

  changeSelectedFamilyMember = (familyMemberObj, page) => {
    this.setState({
      selectedFamilyMember: familyMemberObj,
    }, this.changeSelectedPage(page));
  }

  sellHolding = (holdingObj) => {
    console.log(holdingObj)
    const holdingId = holdingObj.id
    fetch(`http://localhost:3000/api/v1/tangible_assets/${holdingId}`, {method: "DELETE"})
    .then( (r) => {
      console.log(r)
      this.setState((currentState) => {
        return { allTangibleAssets: this.state.allTangibleAssets.filter(asset => asset.id !== holdingId)}
      }, console.log(this.state.allTangibleAssets))
    })
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
