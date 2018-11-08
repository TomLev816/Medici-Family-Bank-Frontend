import React from 'react';

let listFamilyMembers = (props) => {
  return props.allFamilyMembers.map(familyMember => {
    return <div key={familyMember.id} onClick={() => props.changeSelectFamilyMember(familyMember, familyMember.id)}>{familyMember.name}</div>
  })
}

export default function Menu(props) {
  return (
    <div>
      {listFamilyMembers(props)}
    </div>
  );
}
