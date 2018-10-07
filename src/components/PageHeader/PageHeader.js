import React from "react";
import logo from './logo.png';
import './PageHeader.css';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} id="App-header-logo" />
        <h1>
          My skills
        </h1>
      </header>
    );
  }
}

export default PageHeader;
