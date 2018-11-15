import React, { Component } from 'react';
import Menu from './Menu';
// <img src={require('../images/medici_homepage.jpg')} alt=''></img>


const MenuBar = (props) => {

  return (
  <div className='App-header'>
    <div className='familyName'>
      <h1>MEDICI FAMILY</h1>
    </div>
    <div className='logo'></div>
    <div className='familyMenu'>
      <div className='menu-in-navbar'>
        <h1>Menu</h1>
      </div>
    </div>
  </div>
  );
}

export default MenuBar
