import React from 'react';
import './Navigation.styles.css';

export default function NavigationComponent() {
  return (
    <div className="navigation-div">
      <div className="nav-firstDiv">
        <div className="nav-header">Simply Spices</div>

        <div className="nav">
          <span>Sign in</span>
          <span>Favourites</span>
          <span>Cart</span>
        </div>
      </div>

      <div className="nav-secondDiv">
        <div>
          <span>Spices</span>
          <span>About us</span>
          <span>Contact</span>
        </div>
        <span className="search">
          Search Spice <input type="text" placeholder="search" />
        </span>
      </div>
    </div>
  );
}
