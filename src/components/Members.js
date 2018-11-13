import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

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
          console.log(familyMember)
         return  <div
                    key={familyMember.id}
                    onClick={() => this.props.changeSelectedFamilyMember(familyMember, 'familyMemberShow')}>
                    <div className="slider-holder">
                      <h2>{familyMember.name}</h2>
                      <img className="members-image" src={familyMember.image_src} alt=""></img>
                    </div>
                  </div>
        })}
      </Swiper>
    </div>
    </>
  );
  }
}
