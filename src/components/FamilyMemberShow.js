import React, { Component } from 'react';
import Holdings from './Holdings'



export default class FamilyMemberShow extends Component {

  render() {
    // console.log(this.props.selectedFamilyMember);
    return (
      <div className="familyMemberShowPage">
        <div>{this.props.selectedFamilyMember.name}</div>
        <div>{this.props.selectedFamilyMember.birth_date}</div>
        <div>{this.props.selectedFamilyMember.biography}</div>
        <img src={this.props.selectedFamilyMember.image_src} alt=""></img>
        <div onClick={() => this.props.changeSelectedPage('viewHoldings')}>View Holdings</div>
        <div onClick={() => this.props.changeSelectedPage('menu')} >Go Back to Menu</div>
      </div>
    );
  }

}
