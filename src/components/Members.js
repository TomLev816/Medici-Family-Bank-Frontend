import React from 'react';
import Swiper from 'react-id-swiper';

// let listFamilyMembers = (props) => {
//   console.log(props);
//   return props.allFamilyMembers.map(familyMember => {
//     return <div key={familyMember.id} onClick={() => props.changeSelectFamilyMember(familyMember, 'familyMemberShow')}>{familyMember.name}</div>
//   })
// }

export default function Menu(props) {

  const params = {
     slidesPerView: 3,
     spaceBetween: 30,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     }
   };

  return (
    <div className="members-page-container">
      <Swiper {...params}>
        {props.allFamilyMembers.map(familyMember => {
         return  <div
                    className="slider-holder"
                    key={familyMember.id}
                    onClick={() => props.changeSelectedFamilyMember(familyMember, 'familyMemberShow')}>
                    <h2>{familyMember.name}</h2>
                    <img className="members-image" src={familyMember.image_src} alt=""></img>
                  </div>
        })}
      </Swiper>
    </div>
  );
}
