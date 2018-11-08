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
    return (
      <div className='homepage'>
        <div className='homePageImage'>
          <div>
            <h1>MEDICI FAMILY</h1>
            <Menu
              menuDisplay={this.state.menuDisplay}
              changeMenuState={this.changeMenuState}
              openFamilyMembers={this.props.openFamilyMembers}
              familyMemberDisplay={this.state.familyMemberDisplay}
            />
          </div>
        </div>
      </div>
    );
  }

}
