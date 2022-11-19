import React from 'react';
import './LandingPage.Style.css';
import { ProductsList } from './ProductsList';
import { products } from './Products';
import NavigationComponent from '../../components/Navigation/Navigation.component';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <NavigationComponent />
      <div className="landing-page-header">
        <span>LANDING PAGE</span>
      </div>
      <ProductsList products={products} />
    </div>
  );
};
