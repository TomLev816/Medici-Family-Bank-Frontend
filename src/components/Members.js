import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import FamilyMemberShow from './FamilyMemberShow.js'

// let listFamilyMembers = (props) => {
//   console.log(props);
//   return props.allFamilyMembers.map(familyMember => {
//     return <div key={familyMember.id} onClick={() => props.changeSelectFamilyMember(familyMember, 'familyMemberShow')}>{familyMember.name}</div>
//   })
// }

export default class Menu extends Component {
  state = {
    searchTerm: '',
    filterOn: false
  }

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
    <>
    <div>
      <input
        value={this.state.searchTerm}
        placeholder="search marketplace"
        onChange={this.handleChange}>
      </input>
    </div>
    <div className="members-page-container">
      <Swiper {...params}>
        {this.props.allFamilyMembers
          .filter(member => member.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
          .map(familyMember => {
         return  (
          <NavLink key={familyMember.id} to={`/family-members-show`}>
            <div
              onClick={() => this.props.changeSelectedFamilyMember(familyMember)}
              className="slider-holder"
              key={familyMember.id}>
              <h2>{familyMember.name}</h2>
              <img className="members-image" src={familyMember.image_src} alt=""></img>
            </div>
          </NavLink>
          )
        })}
      </Swiper>
    </div>
    </>
  );
  }
}
