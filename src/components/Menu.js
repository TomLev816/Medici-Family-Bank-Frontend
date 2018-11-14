import React from 'react';
import Members from './Members.js';
import {NavLink} from 'react-router-dom'



export default function Menu(props) {
  return (
    <div className='menu-page'>
      <div className="menu-item">
        <NavLink
          to="/about"
          >
          <h1>About</h1>
        </NavLink>
      </div>
      <div className="menu-item">
          <NavLink
            to="/family-members"
            >
            <h1>Select Family Member</h1>
          </NavLink>
      </div>
      <div className="menu-item">
        <NavLink
          to="/market"
          >
          <h1>Go to Marketplace</h1>
        </NavLink>
      </div>
      <div className="menu-item">
        <NavLink
          to="/holdings"
          >
          <h1>View Your Holdings</h1>
        </NavLink>
      </div>
    </div>
  );
}
