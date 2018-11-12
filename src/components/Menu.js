import React from 'react';
import Members from './Members.js';



export default function Menu(props) {
  return (
    <div className='menu-page'>
      <div onClick={() => props.changeSelectedPage('aboutPage')}>
        <h1>About</h1>
      </div>
      <div onClick={() => props.changeSelectedPage('selectFamilyMember')}>
        <h1>Select Family Member</h1>
      </div>
      <div onClick={() => props.changeSelectedPage('goToMarket')}>
        <h1>Go to Marketplace</h1>
      </div>
      <div onClick={() => props.changeSelectedPage('viewHoldings')}>
        <h1>View Your Holdings</h1>
      </div>
    </div>
  );
}
