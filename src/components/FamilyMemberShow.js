import React, { Component } from 'react';
import Holdings from './Holdings'



export default class FamilyMemberShow extends Component {

  render() {
    // console.log(this.props.selectedFamilyMember);
    return (
      <div className="familyMemberShowPage">
        <div className='member-show-name-birth'>
          <h1>{this.props.selectedFamilyMember.name} </h1>
          <h2>Born: {this.props.selectedFamilyMember.birth_date}</h2>
        </div>
        <div className='member-show-decs-img'>
          <div >
            <img src={this.props.selectedFamilyMember.image_src} alt=""></img>
          </div>
          <div className='member-page-desc'><b>About: </b>{this.props.selectedFamilyMember.biography}</div>
        </div>
        <button className="family-show-buttons" onClick={() => this.props.changeSelectedPage('viewHoldings')}>View Holdings</button>
        <button className="family-show-buttons" onClick={() => this.props.changeSelectedPage('goToMarket')}>Go To Marketplace</button>
        <button className="family-show-buttons" onClick={() => this.props.changeSelectedPage('menu')} >Go Back to Menu</button>
        <button className="family-show-buttons" onClick={() => this.props.changeSelectedPage('selectFamilyMember')} >Back to Select Member</button>
      </div>
    );
  }

}
