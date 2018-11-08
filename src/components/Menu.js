import React from 'react';
import Members from './Members.js';

let menuDisplay = (props) => {
  console.log(props.familyMemberDisplay);
  if (props.menuDisplay) {
    return (
      <div>
        <div>About Us</div>
        <div onClick={props.openFamilyMembers}> Select Family Member</div>
        {props.familyMemberDisplay ? <Members /> : null}
      </div>
    )
  }
}

export default function Menu(props) {
  return (
    <div>
      <div>
        <h1 onClick={props.changeMenuState}>Menu</h1>
      </div>
      {menuDisplay(props)}
    </div>
  );
}
