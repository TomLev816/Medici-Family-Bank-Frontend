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
    <div className='familyMenu' onClick={() => props.changeSelectedPage('menu')}>
      <h1>Menu</h1>
    </div>
  </div>
  );
}

export default MenuBar
