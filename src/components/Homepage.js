import React, { Component } from 'react';
import Menu from './Menu';
// <img src={require('../images/medici_homepage.jpg')} alt=''></img>


export default class Homepage extends Component {
  state = {
    menuDisplay: false,
    familyMemberDisplay: false
  }

  changeMenuState = () => {
    this.setState({
      menuDisplay: !this.state.menuDisplay
    });
  }

  openFamilyMembers = () => {
    this.setState({
      familyMemberDisplay: !this.state.familyMemberDisplay
    });
  }


  render() {
    console.log(this.props.allFamilyMembers);
    return (
    <div className='App-header'>
      <div className='familyName'>
        <h1>MEDICI FAMILY</h1>
      </div>
      <div className='logo'></div>
      <div className='familyMenu'>
        <Menu
          menuDisplay={this.state.menuDisplay}
          changeMenuState={this.changeMenuState}
          openFamilyMembers={this.openFamilyMembers}
          familyMemberDisplay={this.state.familyMemberDisplay}
          allFamilyMembers={this.props.allFamilyMembers}
          changeSelectFamilyMember={this.props.changeSelectFamilyMember}
        />
      </div>
    </div>
    );
  }

}
