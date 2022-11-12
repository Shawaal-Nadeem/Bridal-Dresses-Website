import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">
    <label className="logo">
             <img className="img-size" src="/images/logo.png" alt="logo" />
          </label>
    <div class="menu-wrap">
    <input type="checkbox" class="toggler"/>
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li >< Link className='navbtn' exact to="/">Home</Link></li>
            <li><Link className='navbtn' to="/dresses">Dresses</Link></li>
            <li><Link className='navbtn' to="/about">About</Link></li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
  </nav>


  );
}

export default Navbar;
