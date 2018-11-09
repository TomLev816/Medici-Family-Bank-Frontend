import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import FamilyMemberShow from './components/FamilyMemberShow.js'

class App extends Component {
  state = {
    allFamilyMembers: [],
    selectedFamilyMember: '',
    selectedPage: 'homepage'
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/family_members')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          allFamilyMembers: resJson,
        });
      })
  }

  changeSelectFamilyMember = (familyMemberObj, page) => {
    this.setState({
      selectedFamilyMember: familyMemberObj,
      selectedPage: page
    }, () => console.log(this.state.selectedPage));
  }


  render() {
    return (
      <div className="App">
        <Homepage allFamilyMembers={this.state.allFamilyMembers} changeSelectFamilyMember={this.changeSelectFamilyMember}/>
        {this.state.selectedPage === 'familyMemberShow' ? <FamilyMemberShow selectedFamilyMember={this.state.selectedFamilyMember} changeSelectFamilyMember={this.changeSelectFamilyMember}/> : null}
      </div>
    );
  }
}

export default App;
