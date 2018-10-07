import React, { Component } from 'react';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import QuestionView from './pages/QuestionView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <QuestionView />
      </div>
    );
  }
}

export default App;
