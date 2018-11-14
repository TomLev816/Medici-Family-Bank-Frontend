import React, { Component } from 'react';
import Menu from './Menu';
import {NavLink} from 'react-router-dom'
// <img src={require('../images/medici_homepage.jpg')} alt=''></img>


const NavBar = (props) => {

  return (
  <div className='App-header'>
    <div className='familyName'>
        <h1>MEDICI FAMILY</h1>
    </div>
    <div className='logo'></div>
    <div className='familyMenu' onClick={() => props.changeSelectedPage('menu')}>
        <NavLink
          to="/menu"
          >
          <h1>Menu</h1>
        </NavLink>
    </div>
  </div>
  );
}

export default NavBar
