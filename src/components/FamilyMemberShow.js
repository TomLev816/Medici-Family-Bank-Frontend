import React, { Component } from 'react';
import Holdings from './Holdings'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



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
        <NavLink to='/holdings' className="family-show-buttons" >View Holdings</NavLink>
        <NavLink to='/market' className="family-show-buttons" >Go To Marketplace</NavLink>
        <NavLink to='/menu' className="family-show-buttons" >Go Back to Menu</NavLink>
        <NavLink to='/family-members' className="family-show-buttons">Back to Select Member</NavLink>
      </div>
    );
  }

}
