import React from 'react';
import desktop from '../../images/desktop.svg';
import './styles.css';

export const Desktop = () => {
  return (
    <div className="Home">
      <header className="Home-Page">
        <h2>Outliers</h2>
        <h5>Find The Best Flight Deals With Us</h5>
        <img src={desktop} alt="Outliers" />
      </header>
    </div>
  );
};
