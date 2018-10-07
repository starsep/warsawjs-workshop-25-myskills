import React from 'react';
import logo from './logo.png';
import './PageHeader.css';

const PageHeader = () => (
  <header className="App-header">
    <img src={logo} id="App-header-logo" alt="WarsawJS logo" />
    <h1>
      My skills
    </h1>
  </header>
);

export default PageHeader;
