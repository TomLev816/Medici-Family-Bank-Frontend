import React from 'react';
import Members from './Members.js';



export default function Menu(props) {
  return (
    <div>
      <div onClick={() => props.changeSelectedPage('aboutPage')}>
        <h1>About</h1>
      </div>
      <div onClick={() => props.changeSelectedPage('selectFamilyMember')}>
        <h1>Select Family Member</h1>
      </div>
    </div>
  );
}
