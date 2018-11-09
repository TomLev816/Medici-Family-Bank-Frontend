import React from 'react';

// let listFamilyMembers = (props) => {
//   console.log(props);
//   return props.allFamilyMembers.map(familyMember => {
//     return <div key={familyMember.id} onClick={() => props.changeSelectFamilyMember(familyMember, 'familyMemberShow')}>{familyMember.name}</div>
//   })
// }

export default function Menu(props) {
  return (
    <div>
      {props.allFamilyMembers.map(familyMember => {
       return  <h2
                  key={familyMember.id}
                  onClick={() => props.changeSelectedFamilyMember(familyMember, 'familyMemberShow')}>
                  {familyMember.name}
                </h2>
      })}
    </div>
  );
}
